import { NextPage } from "next";
import Layout from "components/layout";
import ClientCreate from "components/client/create";
import Protect from "components/auth/protect";
import Breadcrumb from "components/layout/breadcrumb";
import { Store } from "lib/store";
import { useTranslation } from "react-i18next";

const AdminClientCreatePage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Protect guard={(store: Store) => store.isSuperUser}>
      <Layout>
        <Breadcrumb
          crumbs={[
            {
              text: t("breadcrumb.clients", "Clients"),
              href: "/clients",
            },
            { text: t("breadcrumb.create", "Create") },
          ]}
        />
        <ClientCreate />
      </Layout>
    </Protect>
  );
};

export default AdminClientCreatePage;
