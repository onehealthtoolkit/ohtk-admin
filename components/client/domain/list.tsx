import { AddButton } from "components/widgets/forms";
import Table from "components/widgets/table";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import ConfirmDialog from "components/widgets/dialogs/confirmDialog";
import { Observer } from "mobx-react";
import { Domain } from "lib/services/domain";
import { ClientUpdateViewModel } from "../updateViewModel";
import { CheckIcon } from "@heroicons/react/24/solid";

export const DomainList = ({
  viewModel,
}: {
  viewModel: ClientUpdateViewModel;
}) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex items-center flex-wrap mb-4">
        <div className="flex items-center flex-wrap mb-4 mt-4">
          <p>{t("breadcrumb.domains", "Domains")}</p>
        </div>
        <div className="flex-grow"></div>
        <Link
          href={{
            pathname: `/clients/${viewModel.id}/domains/create`,
            query: {
              client_name: viewModel.name,
            },
          }}
          passHref
        >
          <AddButton />
        </Link>
      </div>
      <Observer>
        {() => (
          <Table
            columns={[
              {
                label: t("form.label.id", "Id"),
                get: record => record.id,
              },
              {
                label: t("form.label.domain", "Domain"),
                get: record => record.domain,
              },
              {
                label: t("form.label.isPrimary", "Primary"),
                get: record => {
                  return record.isPrimary ? (
                    <CheckIcon className="h-5 w-5" />
                  ) : (
                    ""
                  );
                },
              },
            ]}
            data={viewModel?._domains || []}
            onEdit={record =>
              router.push({
                pathname: `/clients/${viewModel.id}/domains/${record.id}/update`,
                query: {
                  client_name: viewModel.name,
                },
              })
            }
            onView={record =>
              router.push({
                pathname: `/clients/${viewModel.id}/domains/${record.id}/view`,
                query: {
                  client_name: viewModel.name,
                },
              })
            }
            onDelete={record => viewModel.dialog("confirmDelete")?.open(record)}
          />
        )}
      </Observer>
      <ConfirmDialog
        store={viewModel.dialog("confirmDelete")}
        title={t("dialog.title.confirmDelete", "Confirm delete")}
        content={t("dialog.content.confirmDelete", "Are you sure?")}
        onYes={(record: Domain) => viewModel.deleteDomain(record.id)}
        onNo={() => viewModel.dialog("confirmDelete")?.close()}
      />
    </div>
  );
};
