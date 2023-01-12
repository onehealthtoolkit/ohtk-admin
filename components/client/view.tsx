import { useState } from "react";
import { observer } from "mobx-react";
import { useRouter } from "next/router";
import { MaskingLoader } from "components/widgets/forms";
import useServices from "lib/services/provider";
import { ClientViewViewModel } from "./viewViewModel";
import { useTranslation } from "react-i18next";
import ViewActionButtons from "components/widgets/viewActionButtons";
import Table from "components/widgets/table";
import { CheckIcon } from "@heroicons/react/24/solid";

const ClientView = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const services = useServices();
  const [viewModel] = useState(
    () =>
      new ClientViewViewModel(router.query.id as string, services.clientService)
  );

  return (
    <MaskingLoader loading={viewModel.isLoading}>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th
                  scope="row"
                  className="w-1/4 px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {t("form.label.id", "Id")}
                </th>
                <td className="px-6 py-4">{viewModel.data.id}</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th
                  scope="row"
                  className="w-1/4 px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {t("form.label.name", "Name")}
                </th>
                <td className="px-6 py-4">{viewModel.data.name}</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th
                  scope="row"
                  className="w-1/4 px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {t("form.label.schemaName", "Schema Name")}
                </th>
                <td className="px-6 py-4">{viewModel.data.schemaName}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center flex-wrap mb-4 mt-4">
          <p>{t("breadcrumb.domains", "Domains")}</p>
        </div>
        <Table
          columns={[
            {
              label: t("form.label.id", "Id"),
              get: record => record.id,
            },
            {
              label: t("form.label.name", "Name"),
              get: record => record.domain,
            },
            {
              label: t("form.label.description", "Description"),
              get: record => {
                return record.isPrimary ? (
                  <CheckIcon className="h-5 w-5" />
                ) : (
                  ""
                );
              },
            },
          ]}
          data={viewModel?.data.domains || []}
        />
        <ViewActionButtons editUrl={`/clients/${viewModel.data.id}/update`} />
      </div>
    </MaskingLoader>
  );
};

export default observer(ClientView);
