import { NextPage } from "next";
import DomainUpdate from "components/client/domain/update";
import Layout from "components/layout";
import Protect from "components/auth/protect";
import { useRouter } from "next/router";
import Spinner from "components/widgets/spinner";

const AdminDomainUpdatePage: NextPage = () => {
  const router = useRouter();
  const { domain_id } = router.query;
  if (!domain_id) {
    return <Spinner />;
  }
  return (
    <Protect>
      <Layout>
        <DomainUpdate />
      </Layout>
    </Protect>
  );
};

export default AdminDomainUpdatePage;
