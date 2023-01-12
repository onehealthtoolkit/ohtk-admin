import { BaseFormViewModel } from "lib/baseFormViewModel";
import { Client, IClientService } from "lib/services/client";
import { Domain } from "lib/services/domain";
import { SaveResult } from "lib/services/interface";
import { action, computed, makeObservable, observable } from "mobx";

export abstract class ClientViewModel extends BaseFormViewModel {
  clientService: IClientService;

  _name: string = "";
  _schemaName: string = "";
  _domains: Domain[] = [];

  constructor(clientService: IClientService) {
    super();
    makeObservable(this, {
      _name: observable,
      name: computed,
      _schemaName: observable,
      schemaName: computed,
      _domains: observable,
      domains: computed,
      save: action,
      validate: action,
    });
    this.clientService = clientService;
  }

  public get name(): string {
    return this._name;
  }
  public set name(schemaName: string) {
    this._name = schemaName;
    delete this.fieldErrors["name"];
    if (this.submitError.length > 0) {
      this.submitError = "";
    }
  }

  public get schemaName(): string {
    return this._schemaName;
  }
  public set schemaName(schemaName: string) {
    this._schemaName = schemaName;
    delete this.fieldErrors["schemaName"];
    if (this.submitError.length > 0) {
      this.submitError = "";
    }
  }

  public get domains(): Domain[] {
    return this._domains;
  }
  public set domains(value: Domain[]) {
    this._domains = value;
  }

  public abstract _save(): Promise<SaveResult<Client>>;

  public async save(): Promise<boolean> {
    this.isSubmitting = true;

    if (this.validate()) {
      var result = await this._save();

      this.isSubmitting = false;

      if (!result.success) {
        if (result.message) {
          this.submitError = result.message;
        }
        if (result.fields) {
          this.fieldErrors = result.fields;
        }
      }
      return result.success;
    }
    this.isSubmitting = false;
    return false;
  }

  validate(): boolean {
    let isValid = true;
    if (this.name.length === 0) {
      isValid = false;
      this.fieldErrors["name"] = "this field is required";
    }

    if (this.schemaName.length === 0) {
      isValid = false;
      this.fieldErrors["schemaName"] = "this field is required";
    }

    return isValid;
  }
}
