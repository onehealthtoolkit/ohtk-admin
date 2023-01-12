import { Client } from "lib/services/client";
import { IClientService } from "lib/services/client/clientService";
import { IDomainService } from "lib/services/domain";
import { SaveResult } from "lib/services/interface";
import { runInAction } from "mobx";
import { ClientViewModel } from "./clientViewModel";

export class ClientUpdateViewModel extends ClientViewModel {
  id: string;
  constructor(
    id: string,
    clientService: IClientService,
    readonly domainService: IDomainService
  ) {
    super(clientService);
    this.id = id;
    this.fetch();
  }

  async fetch() {
    this.isLoading = true;
    const data = await (await this.clientService.getClient(this.id)).data;
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.schemaName = data.schemaName;
      this.domains = data.domains || [];
    }
    this.isLoading = false;
  }

  public _save(): Promise<SaveResult<Client>> {
    return this.clientService.updateClient(this.id, this.name);
  }

  async deleteDomain(id: string): Promise<void> {
    const result = await this.domainService.deleteDomain(id, this.id);
    if (!result.error) {
      runInAction(
        () => (this.domains = this.domains.filter(item => item.id != id))
      );
    }
  }
}
