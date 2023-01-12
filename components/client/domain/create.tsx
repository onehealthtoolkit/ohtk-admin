import { useCallback, useState } from "react";
import { observer } from "mobx-react";
import { useRouter } from "next/router";
import {
  CancelButton,
  Checkbox,
  ErrorText,
  Field,
  FieldGroup,
  Form,
  FormAction,
  FormMessage,
  Label,
  SaveButton,
  TextArea,
  TextInput,
} from "components/widgets/forms";
import Spinner from "components/widgets/spinner";
import useServices from "lib/services/provider";
import Breadcrumb from "components/layout/breadcrumb";
import { useTranslation } from "react-i18next";
import { DomainCreateViewModel } from "./createViewModel";

const DomainCreate = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const services = useServices();
  const [viewModel] = useState(
    () =>
      new DomainCreateViewModel(
        router.query.id as string,
        services.domainService
      )
  );

  const isSubmitting = viewModel.isSubmitting;
  const errors = viewModel.fieldErrors;

  const onSubmit = useCallback(async () => {
    if (await viewModel.save()) {
      router.back();
    }
  }, [router, viewModel]);

  return (
    <>
      <Breadcrumb
        crumbs={[
          {
            text: t("breadcrumb.clients", "Clients"),
            href: "/clients",
          },
          {
            text: `${router.query.client_name}`,
            href: `/clients/${router.query.id}/update/`,
          },
          { text: "Create domain" },
        ]}
      />

      <Form>
        <FieldGroup>
          <Field $size="half">
            <Label htmlFor="domain">{t("form.label.domain", "Name")}</Label>
            <TextInput
              id="domain"
              type="text"
              placeholder={t("form.placeholder.domain", "Name")}
              onChange={evt => (viewModel.domain = evt.target.value)}
              disabled={isSubmitting}
              required
            />
            <ErrorText>{errors.domain}</ErrorText>
          </Field>
          <Field $size="half">
            <Checkbox
              id="isPrimary"
              value="True"
              onChange={evt => (viewModel.isPrimary = evt.target.checked)}
              disabled={isSubmitting}
              label={t("form.label.isPrimary", "Is Primary")}
            />
          </Field>
        </FieldGroup>
        {viewModel.submitError.length > 0 && (
          <FormMessage>{viewModel.submitError}</FormMessage>
        )}
        <FormAction>
          <SaveButton type="button" disabled={isSubmitting} onClick={onSubmit}>
            {isSubmitting ? <Spinner /> : t("form.button.save", "Save")}
          </SaveButton>
          <CancelButton type="button" onClick={() => router.back()}>
            {t("form.button.cancel", "Cancel")}
          </CancelButton>
        </FormAction>
      </Form>
    </>
  );
};

export default observer(DomainCreate);
