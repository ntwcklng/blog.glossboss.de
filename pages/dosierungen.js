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
      <Container className="a:text-blue-700">
        <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
          Dosierungen
        </h1>
        Hier findest du eine Liste die wir ständig erweitern mit
        Dosierungen und Mischungsverhältnissen von Autopflege
        Produkten wie Shampoos, Snow Foams und mehr. Dir fehlt ein
        Produkt? Schreibe uns eine{" "}
        <a
          href="mailto:marvin@glossboss.de"
          className="text-blue-500">
          eMail
        </a>{" "}
        oder eine Nachricht auf{" "}
        <a
          href="https://instagram.de/glossboss.de"
          className="text-blue-500">
          Instagram @glossboss.de
        </a>
      </Container>
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
