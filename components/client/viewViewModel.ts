import { BaseViewModel } from "lib/baseViewModel";
import { Client } from "lib/services/client";
import { IClientService } from "lib/services/client/clientService";
import { computed, makeObservable, observable } from "mobx";

export class ClientViewViewModel extends BaseViewModel {
  id: string;
  _data: Client = {} as Client;

  constructor(id: string, readonly clientService: IClientService) {
    super();
    makeObservable(this, {
      _data: observable,
      data: computed,
    });
    this.id = id;
    this.fetch();
  }

  get data(): Client {
    return this._data;
  }
  set data(value: Client) {
    this._data = value;
  }

  async fetch() {
    this.isLoading = true;
    const data = await (await this.clientService.getClient(this.id)).data;
    if (data) {
      this.data = data;
    }
    this.isLoading = false;
  }
}
