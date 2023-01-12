import { useState } from "react";
import { observer } from "mobx-react";
import { useRouter } from "next/router";
import { MaskingLoader } from "components/widgets/forms";
import useServices from "lib/services/provider";
import { DomainViewViewModel } from "./viewViewModel";
import Breadcrumb from "components/layout/breadcrumb";
import { useTranslation } from "react-i18next";
import { CheckIcon } from "@heroicons/react/24/solid";
import ViewActionButtons from "components/widgets/viewActionButtons";

const DomainView = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const services = useServices();
  const [viewModel] = useState(
    () =>
      new DomainViewViewModel(
        router.query.domain_id as string,
        services.domainService
      )
  );

  return (
    <MaskingLoader loading={viewModel.isLoading}>
      <div>
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
            { text: "View domain" },
          ]}
        />

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
                  {t("form.label.domain", "Domain")}
                </th>
                <td className="px-6 py-4">{viewModel.data.domain}</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th
                  scope="row"
                  className="w-1/4 px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {t("form.label.isPrimary", "Primary")}
                </th>
                <td className="px-6 py-4">
                  {viewModel.data.isPrimary && (
                    <CheckIcon className="h-5 w-5" />
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <ViewActionButtons />
      </div>
    </MaskingLoader>
  );
};

export default observer(DomainView);
