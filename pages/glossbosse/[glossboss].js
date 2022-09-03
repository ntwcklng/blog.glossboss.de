import { NextSeo } from "next-seo";
import PostList from "@components/postlist";
import getPosts from "@utils/getPosts";
import Layout from "@components/layout";
import { allCategories } from "@utils/allCategories";
import { stringify } from "postcss";
import { CategoryLabel } from "@components/ui/categoryLabel";
import { glossbosse } from "@lib/config";

export default function Home({ posts, glossboss }) {
  return (
    <Layout>
      <CategoryLabel large={true}>{glossboss}</CategoryLabel>
      <PostList posts={posts} glossboss={glossboss} />
    </Layout>
  );
}
export async function getStaticProps(context) {
  const glossboss =
    context.params.glossboss.toLowerCase().charAt(0).toUpperCase() +
    context.params.glossboss.slice(1);
  const posts = await getPosts("", glossboss);
  return {
    props: {
      posts,
      glossboss: glossboss
    }
  };
}
export async function getStaticPaths() {
  let paths = [];
  for (const glossboss in glossbosse) {
    if (Object.hasOwnProperty.call(glossbosse, glossboss)) {
      const element = glossbosse[glossboss];
      if (glossbosse[glossboss].active) {
        paths.push({
          params: {
            glossboss: glossboss.toLowerCase()
          }
        });
      }
    }
  }
  console.log(paths);

  return {
    paths,
    fallback: false
  };
}
