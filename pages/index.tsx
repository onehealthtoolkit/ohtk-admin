import { Inter } from "@next/font/google";
import { useTranslation } from "react-i18next";
import Protect from "components/auth/protect";
import Layout from "components/layout";
import Breadcrumb from "components/layout/breadcrumb";
import ClientList from "components/client/list";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation();
  // return <p>xx</p>;
  return (
    <Protect>
      <Layout>
        <Breadcrumb crumbs={[{ text: t("breadcrumb.clients", "Clients") }]} />
        <ClientList />
      </Layout>
    </Protect>
  );
}
