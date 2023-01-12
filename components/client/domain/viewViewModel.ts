import { BaseViewModel } from "lib/baseViewModel";
import { Domain } from "lib/services/domain/domain";
import { IDomainService } from "lib/services/domain/domainService";
import { computed, makeObservable, observable } from "mobx";

export class DomainViewViewModel extends BaseViewModel {
  id: string;
  _data: Domain = {} as Domain;

  constructor(id: string, readonly domainService: IDomainService) {
    super();
    makeObservable(this, {
      _data: observable,
      data: computed,
    });
    this.id = id;
    this.fetch();
  }

  get data(): Domain {
    return this._data;
  }
  set data(value: Domain) {
    this._data = value;
  }

  async fetch() {
    this.isLoading = true;
    const data = await (await this.domainService.getDomain(this.id)).data;
    if (data) {
      this.data = data;
    }
    this.isLoading = false;
  }
}
