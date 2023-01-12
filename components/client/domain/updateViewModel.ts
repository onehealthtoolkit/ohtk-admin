import { SaveResult } from "lib/services/interface";
import { Domain } from "lib/services/domain/domain";
import { IDomainService } from "lib/services/domain/domainService";
import { DomainViewModel } from "./domainViewModel";

export class DomainUpdateViewModel extends DomainViewModel {
  id: string;
  constructor(
    readonly clientId: string,
    id: string,
    domainService: IDomainService
  ) {
    super(clientId, domainService);
    this.id = id;
    this.fetch();
  }

  async fetch() {
    this.isLoading = true;
    const data = await (await this.domainService.getDomain(this.id)).data;
    if (data) {
      this.id = data.id;
      this.domain = data.domain;
      this.isPrimary = data.isPrimary;
    }
    this.isLoading = false;
  }

  public _save(): Promise<SaveResult<Domain>> {
    return this.domainService.updateDomain(
      this.id,
      this.clientId,
      this.domain,
      this.isPrimary
    );
  }
}
