import { NextPage } from "next";
import ClientUpdate from "components/client/update";
import Layout from "components/layout";
import Protect from "components/auth/protect";
import Breadcrumb from "components/layout/breadcrumb";
import { useRouter } from "next/router";
import Spinner from "components/widgets/spinner";
import { Store } from "lib/store";
import { useTranslation } from "react-i18next";

const AdminClientUpdatePage: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation();
  if (!router.isReady) {
    return <Spinner />;
  }

  return (
    <Protect guard={(store: Store) => store.isSuperUser}>
      <Layout>
        <Breadcrumb
          crumbs={[
            {
              text: t("breadcrumb.clients", "Clients"),
              href: "/clients",
            },
            { text: t("breadcrumb.update", "Update") },
          ]}
        />
        <ClientUpdate />
      </Layout>
    </Protect>
  );
};

export default AdminClientUpdatePage;
