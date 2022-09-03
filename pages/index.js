import { NextSeo } from "next-seo";
import PostList from "@components/postlist";
import getPosts from "@utils/getPosts";
import Layout from "@components/layout";

export default function Home({ posts }) {
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  );
}
export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts
    }
  };
}
