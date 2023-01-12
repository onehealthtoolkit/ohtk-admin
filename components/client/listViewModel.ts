import { action, makeObservable, observable, runInAction } from "mobx";
import { BaseViewModel } from "lib/baseViewModel";
import { IClientService, Client } from "lib/services/client";

export class ClientListViewModel extends BaseViewModel {
  data: Client[] = [];

  nameSearch: string = "";

  constructor(readonly clientService: IClientService) {
    super();
    makeObservable(this, {
      data: observable,
      nameSearch: observable,
      setSearchValue: action,
      clearCodeSearch: action,
      fetch: action,
    });
  }

  setSearchValue(nameSearch: string = "", offset: number = 0) {
    this.nameSearch = nameSearch;
    this.offset = offset;
    this.fetch();
  }

  clearCodeSearch() {
    this.nameSearch = "";
  }

  async fetch(force?: boolean): Promise<void> {
    const result = await this.clientService.fetchClients(
      this.limit,
      this.offset,
      this.nameSearch,
      force
    );
    runInAction(() => {
      this.data = result.items || [];
      this.totalCount = result.totalCount || 0;
    });
    if (result.error) {
      this.setErrorMessage(result.error);
    }
  }
}
