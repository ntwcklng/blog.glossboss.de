import { NextSeo } from "next-seo";
import Dosierungen from "@components/dosierungen";
import getDosierungen from "@utils/getDosierungen";
import Layout from "@components/layout";
import CategoryFilter from "@components/categoryFilter";
import Container from "@components/container";
import { siteUrl } from "@lib/config";

export default function Home({ produkte }) {
  return (
    <Layout
      url={`${siteUrl}/dosierungen`}
      title="Dosierungen und Mischungsverhältnisse von Autopflege Produkten - glossboss Autopflege Blog"
      description="Hier findest du eine Liste die wir ständig erweitern mit Dosierungen und Mischungsverhältnissen von Autopflege Produkten wie Shampoos, Snow Foams und mehr">
      <Dosierungen produkte={produkte} />
    </Layout>
  );
}
export async function getStaticProps() {
  const produkte = await getDosierungen();
  return {
    props: {
      produkte
    }
  };
}
