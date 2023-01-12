import { useCallback, useMemo, useState } from "react";
import { Observer, observer } from "mobx-react";
import { useRouter } from "next/router";
import { DomainUpdateViewModel } from "./updateViewModel";
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
  MaskingLoader,
  SaveButton,
  TextInput,
} from "components/widgets/forms";
import Spinner from "components/widgets/spinner";
import useServices from "lib/services/provider";
import Breadcrumb from "components/layout/breadcrumb";
import { useTranslation } from "react-i18next";

const DomainUpdate = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const services = useServices();
  const [viewModel] = useState(
    () =>
      new DomainUpdateViewModel(
        router.query.id as string,
        router.query.domain_id as string,
        services.domainService
      )
  );

  const domainField = useMemo(
    () => (
      <Observer>
        {() => (
          <Field $size="half">
            <Label htmlFor="domain">{t("form.label.domain", "Domain")}</Label>
            <TextInput
              id="domain"
              type="text"
              placeholder={t("form.placeholder.domain", "Domain")}
              onChange={evt => (viewModel.domain = evt.target.value)}
              disabled={viewModel.isSubmitting}
              defaultValue={viewModel.domain}
              required
            />
            <ErrorText>{viewModel.fieldErrors.domain}</ErrorText>
          </Field>
        )}
      </Observer>
    ),
    [t, viewModel]
  );

  const isPrimaryField = useMemo(
    () => (
      <Observer>
        {() => (
          <Field $size="half">
            <Checkbox
              id="isStartState"
              value="True"
              defaultChecked={viewModel.isPrimary}
              onChange={evt => (viewModel.isPrimary = evt.target.checked)}
              disabled={viewModel.isSubmitting}
              label={t("form.label.isPrimary", "Is Primary")}
            />
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
            { text: "Update domain" },
          ]}
        />
        <Form>
          <FieldGroup>
            {domainField}
            {isPrimaryField}
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
      </>
    </MaskingLoader>
  );
};

export default observer(DomainUpdate);
