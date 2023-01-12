import React, { useContext } from "react";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { AuthService, IAuthService } from "./auth";
import ProfileService, { IProfileService } from "./profile";
import { ClientService, IClientService } from "./client/clientService";
import { DomainService, IDomainService } from "./domain";

export interface IServiceProvider {
  get authService(): IAuthService;
  get profileService(): IProfileService;
  get clientService(): IClientService;
  get domainService(): IDomainService;
}

export class ServicesProvider implements IServiceProvider {
  client: ApolloClient<NormalizedCacheObject>;

  authService: AuthService;
  profileService: ProfileService;
  clientService: ClientService;
  domainService: DomainService;

  constructor(client: ApolloClient<NormalizedCacheObject>) {
    this.client = client;
    this.authService = new AuthService(client);
    this.profileService = new ProfileService(client);
    this.clientService = new ClientService(client);
    this.domainService = new DomainService(client);
  }
}

export const ServicesContext = React.createContext<
  ServicesProvider | undefined
>(undefined);

const useServices = (): IServiceProvider => {
  const currentServices = useContext(ServicesContext);
  if (!currentServices) {
    throw new Error("useServices must be used within ServiceContextProvider");
  }

  return currentServices;
};

export default useServices;
