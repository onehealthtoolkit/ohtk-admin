import { useCallback, useMemo, useState } from "react";
import { Observer, observer } from "mobx-react";
import { useRouter } from "next/router";
import { ClientUpdateViewModel } from "./updateViewModel";
import {
  CancelButton,
  ErrorText,
  Field,
  FieldGroup,
  Form,
  FormAction,
  FormMessage,
  Label,
  MaskingLoader,
  SaveButton,
  TextInput,
  TextArea,
} from "components/widgets/forms";
import Spinner from "components/widgets/spinner";
import useServices from "lib/services/provider";
import { useTranslation } from "react-i18next";
import { DomainList } from "./domain/list";

const ClientUpdate = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const services = useServices();
  const [viewModel] = useState(() =>
    new ClientUpdateViewModel(
      router.query.id as string,
      services.clientService,
      services.domainService
    ).registerDialog("confirmDelete")
  );

  const nameField = useMemo(
    () => (
      <Observer>
        {() => (
          <Field $size="half">
            <Label htmlFor="key">{t("form.label.name", "Name")}</Label>
            <TextInput
              id="key"
              type="text"
              placeholder={t("form.placeholder.name", "Name")}
              onChange={evt => (viewModel.name = evt.target.value)}
              disabled={viewModel.isSubmitting}
              defaultValue={viewModel.name}
              required
            />
            <ErrorText>{viewModel.fieldErrors.key}</ErrorText>
          </Field>
        )}
      </Observer>
    ),
    [t, viewModel]
  );

  const schemaNameField = useMemo(
    () => (
      <Observer>
        {() => (
          <Field $size="half">
            <Label htmlFor="value">
              {t("form.label.schema", "Schema Name")}
            </Label>
            <TextInput
              id="value"
              readOnly={true}
              placeholder={t("form.placeholder.schemaName", "Schema Name")}
              onChange={evt => (viewModel.schemaName = evt.target.value)}
              disabled={viewModel.isSubmitting}
              defaultValue={viewModel.schemaName}
              required
            />
            <ErrorText>{viewModel.fieldErrors.value}</ErrorText>
          </Field>
        )}
      </Observer>
    ),
    [t, viewModel]
  );

  const onSubmit = useCallback(async () => {
    if (await viewModel.save()) {
      router.back();
    }
  }, [router, viewModel]);

  return (
    <MaskingLoader loading={viewModel.isLoading}>
      <>
        <Form>
          <FieldGroup>
            <>
              {nameField}
              {schemaNameField}
            </>
          </FieldGroup>
          {viewModel.submitError.length > 0 && (
            <FormMessage>{viewModel.submitError}</FormMessage>
          )}
          <FormAction>
            <SaveButton
              type="button"
              disabled={viewModel.isSubmitting}
              onClick={onSubmit}
            >
              {viewModel.isSubmitting ? (
                <Spinner />
              ) : (
                t("form.button.save", "Save")
              )}
            </SaveButton>
            <CancelButton type="button" onClick={() => router.back()}>
              {t("form.button.cancel", "Cancel")}
            </CancelButton>
          </FormAction>
        </Form>
        <hr className="mb-5 mt-5" />
        <DomainList viewModel={viewModel} />
      </>
    </MaskingLoader>
  );
};

export default observer(ClientUpdate);
