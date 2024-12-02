import { LandingView } from "@components";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";

//prevent lazy load and hydration error
const PageLayout = dynamic(
  () => import("../src/components/templates/PageLayout"),
  { ssr: false }
);

const Home: NextPage = () => {
  const [assets, setAssets] = useState<boolean[]>([false]);

  return (
    <PageLayout assets={assets}>
      <LandingView setAssets={setAssets} />
    </PageLayout>
  );
};
export default Home;
