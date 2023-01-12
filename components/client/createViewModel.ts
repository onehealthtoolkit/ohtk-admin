import { Client } from "lib/services/client";
import { SaveResult } from "lib/services/interface";
import { ClientViewModel } from "./clientViewModel";

export class ClientCreateViewModel extends ClientViewModel {
  public _save(): Promise<SaveResult<Client>> {
    return this.clientService.createClient(this.name, this.schemaName);
  }
}
