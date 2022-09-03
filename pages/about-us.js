import { NextSeo } from "next-seo";
import Layout from "@components/layout";
import Container from "@components/container";

export default function About() {
  return (
    <Layout>
      <Container>
        <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
          Über uns
        </h1>
        <div className="mx-auto my-3">jo</div>
      </Container>
    </Layout>
  );
}
// export async function getStaticProps() {
//   const posts = await getPosts("Videos");
//   return {
//     props: {
//       posts
//     }
//   };
// }
