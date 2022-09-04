import { NextSeo } from "next-seo";
import PostList from "@components/postlist";
import getPosts from "@utils/getPosts";
import Layout from "@components/layout";
import CategoryFilter from "@components/categoryFilter";
import Container from "@components/container";

export default function Home({ posts }) {
  return (
    <Layout>
      <Container className="!py-0">
        <CategoryFilter />
      </Container>
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
