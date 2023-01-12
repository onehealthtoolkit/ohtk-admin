import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import {
  DomainCreateDocument,
  DomainDeleteDocument,
  DomainUpdateDocument,
  GetClientDocument,
  GetDomainDocument,
} from "lib/generated/graphql";
import { Domain } from "lib/services/domain/domain";
import {
  DeleteResult,
  GetResult,
  IService,
  SaveResult,
} from "lib/services/interface";

export interface IDomainService extends IService {
  getDomain(key: string): Promise<GetResult<Domain>>;

  createDomain(
    clientId: string,
    domain: string,
    isPrimary: boolean
  ): Promise<SaveResult<Domain>>;

  updateDomain(
    id: string,
    clientId: string,
    domain: string,
    isPrimary: boolean
  ): Promise<SaveResult<Domain>>;

  deleteDomain(id: string, clientId: string): Promise<DeleteResult>;
}

export class DomainService implements IDomainService {
  client: ApolloClient<NormalizedCacheObject>;

  constructor(client: ApolloClient<NormalizedCacheObject>) {
    this.client = client;
  }

  async getDomain(id: string) {
    const getResult = await this.client.query({
      query: GetDomainDocument,
      variables: {
        id,
      },
    });

    let data;
    const domain = getResult.data.adminDomainGet;
    if (domain) {
      data = {
        id: domain.id,
        domain: domain.domain,
        isPrimary: domain.isPrimary,
      };
    }
    return {
      data,
    };
  }

  async createDomain(
    clientId: string,
    domain: string,
    isPrimary: boolean
  ): Promise<SaveResult<Domain>> {
    const createResult = await this.client.mutate({
      mutation: DomainCreateDocument,
      variables: {
        clientId,
        domain,
        isPrimary,
      },
      refetchQueries: [
        {
          query: GetClientDocument,
          variables: {
            id: clientId,
          },
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

    const result = createResult.data?.adminDomainCreate?.result;
    switch (result?.__typename) {
      case "AdminDomainCreateSuccess": {
        console.log("success", result);
        break;
      }
      case "AdminDomainCreateProblem": {
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

  async updateDomain(
    id: string,
    clientId: string,
    domain: string,
    isPrimary: boolean
  ): Promise<SaveResult<Domain>> {
    const updateResult = await this.client.mutate({
      mutation: DomainUpdateDocument,
      variables: {
        id,
        domain,
        isPrimary,
      },
      refetchQueries: [
        {
          query: GetClientDocument,
          variables: {
            id: clientId,
          },
          fetchPolicy: "network-only",
        },
      ],
      awaitRefetchQueries: true,
      update: (cache, result) => {
        const cacheItem = cache.readQuery({
          query: GetDomainDocument,
          variables: { id },
        });
        const domainCache = cacheItem?.adminDomainGet;
        if (domainCache) {
          const serverReturnValue = result.data?.adminDomainUpdate?.result;
          if (serverReturnValue?.__typename === "AdminDomainUpdateSuccess") {
            const newDomainValue = serverReturnValue;
            cache.writeQuery({
              query: GetDomainDocument,
              variables: { id },
              data: {
                __typename: "Query",
                adminDomainGet: { ...newDomainValue, __typename: "DomainType" },
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

    const result = updateResult.data?.adminDomainUpdate?.result;
    switch (result?.__typename) {
      case "AdminDomainUpdateSuccess": {
        console.log("success", result);
        break;
      }
      case "AdminDomainUpdateProblem": {
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

  async deleteDomain(id: string, clientId: string) {
    const deleteResult = await this.client.mutate({
      mutation: DomainDeleteDocument,
      variables: {
        id,
      },
      refetchQueries: [
        {
          query: GetClientDocument,
          variables: {
            id: clientId,
          },
          fetchPolicy: "network-only",
        },
      ],
      awaitRefetchQueries: true,
      update: cache => {
        cache.evict({
          id: cache.identify({
            __typename: "AdminDomainQueryType",
            id: id,
          }),
        });
        cache.evict({
          id: cache.identify({
            __typename: "DomainType",
            id: id,
          }),
        });
      },
    });

    return { error: deleteResult.errors?.map(o => o.message).join(",") };
  }
}
