import { NextPage } from "next";
import DomainView from "components/client/domain/view";
import Layout from "components/layout";
import Protect from "components/auth/protect";
import { useRouter } from "next/router";
import Spinner from "components/widgets/spinner";

const AdminDomainViewPage: NextPage = () => {
  const router = useRouter();
  const { domain_id } = router.query;
  if (!domain_id) {
    return <Spinner />;
  }
  return (
    <Protect>
      <Layout>
        <DomainView />
      </Layout>
    </Protect>
  );
};

export default AdminDomainViewPage;
