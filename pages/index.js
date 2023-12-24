import Layout from "@/components/Layout";
import HomeHeader from "@/components/HomeHeader";
import HomeStats from "@/components/HomeStats";
import Meta from "@/components/Meta";

export default function Home() {
  return (
    <Layout>
      <Meta title="Dashboard" />
      <HomeHeader />
      <HomeStats />
    </Layout>
  );
}
