import Spinner from "components/widgets/spinner";
import Table from "components/widgets/table";
import { Observer } from "mobx-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Filter from "./filter";
import ErrorDisplay from "components/widgets/errorDisplay";
import useServices from "lib/services/provider";
import Link from "next/link";
import { AddButton } from "components/widgets/forms";
import Paginate from "components/widgets/table/paginate";

import { ClientListViewModel } from "./listViewModel";
import TotalItem from "components/widgets/table/totalItem";
import { ParsedUrlQuery } from "querystring";
import useUrlParams from "lib/hooks/urlParams/useUrlParams";
import { useTranslation } from "react-i18next";

const parseUrlParams = (query: ParsedUrlQuery) => {
  return {
    q: query.q as string,
    offset: query.offset ? parseInt(query.offset as string) : 0,
  };
};

const ClientList = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { clientService } = useServices();
  const { setUrl, query, resetUrl } = useUrlParams();

  const [viewModel] = useState<ClientListViewModel>(() => {
    const model = new ClientListViewModel(clientService);
    model.registerDialog("confirmDelete");
    return model;
  });

  useEffect(() => {
    if (router.isReady) {
      const filter = parseUrlParams(query);
      viewModel.setSearchValue(filter.q, filter.offset);
    }
  }, [query, viewModel, router.isReady]);

  const applySearch = ({ q, offset }: { q?: string; offset?: number }) => {
    const filter = parseUrlParams(query);
    if (q) {
      filter.q = q;
    }
    if (Number.isInteger(offset)) {
      filter.offset = offset!;
    }
    setUrl(filter);
  };
  if (!viewModel) {
    return <Spinner />;
  }
  return (
    <Observer>
      {() => (
        <div>
          <div className="flex items-center flex-wrap mb-4 gap-2">
            <TotalItem
              totalCount={viewModel.totalCount}
              onRefresh={() => viewModel.fetch(true)}
            />
            <Filter
              nameSearch={viewModel.nameSearch}
              onChange={value => {
                if (value == "") {
                  resetUrl();
                } else {
                  applySearch({ q: value, offset: 0 });
                }
              }}
            />
            <div className="flex-grow md:flex-none"></div>
            <Link href={"/clients/create"} passHref>
              <AddButton />
            </Link>
          </div>

          <Table
            columns={[
              {
                label: t("form.label.name", "Name"),
                get: record => record.name,
              },
              {
                label: t("form.label.schemaName", "Schema Name"),
                get: record => record.schemaName,
              },
            ]}
            data={viewModel?.data || []}
            onEdit={record => router.push(`/clients/${record.id}/update`)}
            onView={record => router.push(`/clients/${record.id}/view`)}
          />
          <ErrorDisplay message={viewModel?.errorMessage} />
          <Paginate
            offset={viewModel.offset}
            limit={viewModel.limit}
            totalCount={viewModel.totalCount}
            onChange={value => {
              applySearch({ offset: value });
            }}
          />
        </div>
      )}
    </Observer>
  );
};

export default ClientList;
