import { SaveResult } from "lib/services/interface";
import { Domain } from "lib/services/domain/domain";
import { DomainViewModel } from "./domainViewModel";

export class DomainCreateViewModel extends DomainViewModel {
  public _save(): Promise<SaveResult<Domain>> {
    return this.domainService.createDomain(
      this.clientId,
      this.domain,
      this.isPrimary
    );
  }
}
