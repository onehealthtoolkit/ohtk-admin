import { NextPage } from "next";
import Layout from "components/layout";
import DomainCreate from "components/client/domain/create";
import Protect from "components/auth/protect";

const AdminDomainCreatePage: NextPage = () => {
  return (
    <Protect>
      <Layout>
        <DomainCreate />
      </Layout>
    </Protect>
  );
};

export default AdminDomainCreatePage;
