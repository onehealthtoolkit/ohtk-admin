import { BaseFormViewModel } from "lib/baseFormViewModel";
import { SaveResult } from "lib/services/interface";
import { Domain } from "lib/services/domain/domain";
import { IDomainService } from "lib/services/domain/domainService";
import { action, computed, makeObservable, observable } from "mobx";

export abstract class DomainViewModel extends BaseFormViewModel {
  domainService: IDomainService;

  _domain: string = "";
  _isPrimary: boolean = false;

  constructor(readonly clientId: string, domainService: IDomainService) {
    super();
    makeObservable(this, {
      _domain: observable,
      domain: computed,
      _isPrimary: observable,
      isPrimary: computed,
      save: action,
      validate: action,
    });
    this.domainService = domainService;
  }

  public get domain(): string {
    return this._domain;
  }
  public set domain(value: string) {
    this._domain = value;
    delete this.fieldErrors["name"];
    if (this.submitError.length > 0) {
      this.submitError = "";
    }
  }

  public get isPrimary(): boolean {
    return this._isPrimary;
  }
  public set isPrimary(value: boolean) {
    this._isPrimary = value;
    delete this.fieldErrors["isPrimary"];
    if (this.submitError.length > 0) {
      this.submitError = "";
    }
  }

  public abstract _save(): Promise<SaveResult<Domain>>;

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
    if (this.domain.length === 0) {
      isValid = false;
      this.fieldErrors["domain"] = "this field is required";
    }

    return isValid;
  }
}
