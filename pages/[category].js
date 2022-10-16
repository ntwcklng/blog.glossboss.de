import PostList from "@components/postlist";
import getPosts from "@utils/getPosts";
import Layout from "@components/layout";
import { allCategories } from "@utils/allCategories";
import { stringify } from "postcss";
import { CategoryLabel } from "@components/ui/categoryLabel";
import Container from "@components/container";
import CategoryFilter from "@components/categoryFilter";
import { siteUrl } from "@lib/config";

export default function Home({ posts, category }) {
  return (
    <Layout
      url={`${siteUrl}/${category.toLowerCase()}`}
      title={`GLOSSBOSS Blog - ${category}`}
      description={`Alle Blogbeiträge der Kategorie ${category}`}>
      <CategoryLabel large={true}>{category}</CategoryLabel>
      <Container className="!py-0">
        <CategoryFilter />
      </Container>
      <PostList posts={posts} category={category} />
    </Layout>
  );
}
export async function getStaticProps(context) {
  const category =
    context.params.category
      .toLowerCase()
      .charAt(0)
      .toUpperCase() + context.params.category.slice(1);
  const posts = await getPosts(category);
  return {
    props: {
      posts,
      category: category
    }
  };
}
export async function getStaticPaths() {
  const paths = allCategories.map(cat => ({
    params: {
      category: cat.toLowerCase()
    }
  }));
  return {
    paths,
    fallback: false
  };
}
