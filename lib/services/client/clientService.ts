import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import {
  ClientsDocument,
  ClientCreateDocument,
  ClientUpdateDocument,
  GetClientDocument,
} from "lib/generated/graphql";
import { Client } from "lib/services/client/client";
import {
  GetResult,
  IService,
  QueryResult,
  SaveResult,
} from "lib/services/interface";
import { Domain } from "../domain";

export interface IClientService extends IService {
  fetchClients(
    limit: number,
    offset: number,
    searchText: string,
    force?: boolean
  ): Promise<QueryResult<Client[]>>;

  getClient(key: string): Promise<GetResult<Client>>;

  createClient(name: string, schemaName: string): Promise<SaveResult<Client>>;

  updateClient(id: string, name: string): Promise<SaveResult<Client>>;
}

export class ClientService implements IClientService {
  client: ApolloClient<NormalizedCacheObject>;

  fetchClientsQuery = {
    limit: 20,
    offset: 0,
    q: "",
    ordering: "name,asc",
  };

  constructor(client: ApolloClient<NormalizedCacheObject>) {
    this.client = client;
  }

  async fetchClients(
    limit: number,
    offset: number,
    searchText: string,
    force?: boolean
  ) {
    this.fetchClientsQuery = {
      ...this.fetchClientsQuery,
      limit,
      offset,
      q: searchText,
    };
    const fetchResult = await this.client.query({
      query: ClientsDocument,
      variables: this.fetchClientsQuery,
      fetchPolicy: force ? "network-only" : "cache-first",
    });

    const items = Array<Client>();
    fetchResult.data.adminClientQuery?.results.forEach(item => {
      if (item) {
        items.push({
          id: item.id,
          name: item.name,
          schemaName: item.schemaName,
        });
      }
    });
    return {
      items,
      totalCount: fetchResult.data.adminClientQuery?.totalCount,
    };
  }

  async getClient(id: string) {
    const getResult = await this.client.query({
      query: GetClientDocument,
      variables: {
        id,
      },
    });

    let data;
    const client = getResult.data.adminClientGet;
    if (client) {
      data = {
        id: client.id,
        name: client.name,
        schemaName: client.schemaName,
        domains: client.domains as Array<Domain>,
      };
    }
    return {
      data,
    };
  }

  async createClient(
    name: string,
    schemaName: string
  ): Promise<SaveResult<Client>> {
    const createResult = await this.client.mutate({
      mutation: ClientCreateDocument,
      variables: {
        name,
        schemaName,
      },
      refetchQueries: [
        {
          query: ClientsDocument,
          variables: this.fetchClientsQuery,
          fetchPolicy: "network-only",
        },
      ],
      awaitRefetchQueries: true,
    });

    if (createResult.errors) {
      return {
        success: false,
        message: createResult.errors.map(o => o.message).join(","),
      };
    }

    const result = createResult.data?.adminClientCreate?.result;
    switch (result?.__typename) {
      case "AdminClientCreateSuccess": {
        console.log("success", result);
        break;
      }
      case "AdminClientCreateProblem": {
        console.log("problem", result);
        const fields: any = {};
        // field validation errors, show specifiic error for each fields
        result.fields?.forEach(f => {
          fields[f.name] = f.message;
        });
        return {
          success: false,
          fields,
          message: result.message,
        };
      }
    }
    return {
      success: true,
    };
  }

  async updateClient(id: string, name: string): Promise<SaveResult<Client>> {
    const updateResult = await this.client.mutate({
      mutation: ClientUpdateDocument,
      variables: {
        id,
        name,
      },
      refetchQueries: [
        {
          query: ClientsDocument,
          variables: this.fetchClientsQuery,
          fetchPolicy: "network-only",
        },
      ],
      awaitRefetchQueries: true,
      update: (cache, result) => {
        const cacheItem = cache.readQuery({
          query: GetClientDocument,
          variables: { id },
        });
        const clientCache = cacheItem?.adminClientGet;
        if (clientCache) {
          const serverReturnValue = result.data?.adminClientUpdate?.result;
          if (serverReturnValue?.__typename === "AdminClientUpdateSuccess") {
            const newClientValue = serverReturnValue;
            cache.writeQuery({
              query: GetClientDocument,
              variables: { id },
              data: {
                __typename: "Query",
                adminClientGet: { ...newClientValue, __typename: "ClientType" },
              },
            });
          }
        }
      },
    });

    if (updateResult.errors) {
      return {
        success: false,
        message: updateResult.errors.map(o => o.message).join(","),
      };
    }

    const result = updateResult.data?.adminClientUpdate?.result;
    switch (result?.__typename) {
      case "AdminClientUpdateSuccess": {
        console.log("success", result);
        break;
      }
      case "AdminClientUpdateProblem": {
        console.log("problem", result);
        const fields: any = {};
        result.fields?.forEach(f => {
          fields[f.name] = f.message;
        });

        return {
          success: false,
          fields,
          message: result.message,
        };
      }
    }
    return {
      success: true,
    };
  }
}
