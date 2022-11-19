import Markdown from "react-markdown";
import Layout from "@components/layout";
import Container from "@components/container";
import { CategoryLabel } from "@components/ui/categoryLabel";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import de from "date-fns/locale/de";
import Link from "next/link";
import AuthorCard from "@components/authorcard";
import { ArticleJsonLd, NextSeo, BreadcrumbJsonLd } from "next-seo";
import { siteUrl, siteName, glossbosse } from "@lib/config";

export default function Post({ post }) {
  return (
    <Layout>
      <NextSeo
        title={`${post.fields.title} - ${post.fields.subTitle}`}
        canonical={`${siteUrl}/${post.fields.category.toLowerCase()}/${
          post.fields.slug
        }`}
        openGraph={{
          url: `${siteUrl}/${post.fields.category.toLowerCase()}/${
            post.fields.slug
          }`,
          title: `${post.fields.title} - ${post.fields.subTitle}`,
          description: "",
          images: [
            {
              url: post.fields.postImage || "",
              width: 800,
              height: 600
            }
          ],
          site_name: siteName
        }}
      />
      <ArticleJsonLd
        type="Blog"
        url={`${siteUrl}/${post.fields.category.toLowerCase()}/${
          post.fields.slug
        }`}
        title={`${post.fields.title} - ${post.fields.subTitle}`}
        images={[post.fields.postImage || ""]}
        authorName={glossbosse[post?.fields.author].displayName}
        datePublished={post.fields.date}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: post.fields.category,
            item: `${siteUrl}/${post.fields.category.toLowerCase()}`
          },
          {
            position: 2,
            name: post.fields.title,
            item: `${siteUrl}/${post.fields.category.toLowerCase()}/${
              post.fields.slug
            }`
          }
        ]}
      />
      <Container className="!pt-0">
        <div className="max-w-screen-md mx-auto">
          <div className="text-center">
            <a href={`/${post.fields.category.toLowerCase()}`}>
              <CategoryLabel>{post.fields.category}</CategoryLabel>
            </a>
          </div>
          <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-gray-200 text-gray-700">
            {post.fields.title}{" "}
            <span className="text-xl dark:text-gray-300 inline-block text-gray-600">
              {post.fields.subTitle}
            </span>
          </h1>
          <div className="flex justify-center mt-3 space-x-3 text-gray-500">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-12 h-12">
                <Image
                  src={glossbosse[post.fields.author].image}
                  layout="fill"
                  alt={post.fields.title}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-400">
                  von {glossbosse[post.fields.author].displayName}
                </p>
                <div className="flex items-center space-x-1 text-sm">
                  <span>am</span>
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={post.fields.date}>
                    {format(
                      parseISO(post.fields.date),
                      "dd. MMMM yyyy",
                      { locale: de }
                    )}
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div
        className={`relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg ${post
          .fields.postImage && "aspect-video"}`}>
        {post.fields.postImage ? (
          <Image
            src={post.fields.postImage}
            alt={post.fields.title}
            layout="fill"
            loading="eager"
            objectFit="cover"
            priority={true}
          />
        ) : (
          <div className="bg-gradient-to-r from-[#00f260] to-[#0575e6] h-56 animate-pulse"></div>
        )}
      </div>

      <Container>
        <article className="max-w-screen-md mx-auto">
          <div className="mx-auto my-3 prose prose-base prose-stone dark:prose-invert prose-a:text-blue-400">
            <Markdown>{post.fields.body}</Markdown>
          </div>
          <div className="flex justify-center mt-7 mb-7">
            <Link
              href="/"
              className="px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-400 hover:-translate-x-1 transition-all">
              
                ← Alle Beiträge
              
            </Link>
            <Link
              href={`/${post.fields.category.toLowerCase()}`}
              className="px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-400 hover:translate-x-1 transition-all">
              in{post.fields.category}stöbern →
            </Link>
          </div>
          {glossbosse[post?.fields.author].bio != "" && (
            <AuthorCard author={post.fields.author} />
          )}
        </article>
      </Container>
    </Layout>
  );
}
export async function getStaticProps(context) {
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });
  const result = await client
    .getEntries({
      content_type: "post",
      "fields.slug": context.params.slug
    })
    .then(res => res.items);
  const post = result.pop();
  if (!post) return { props: {} };
  return {
    props: {
      post
    }
  };
}
export async function getStaticPaths() {
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });

  // Query Contentful for all blog posts in the space
  const posts = await client
    .getEntries({ content_type: "post", limit: 1000 })
    .then(response => response.items);

  // Map the result of that query to a list of slugs.
  // This will give Next the list of all blog post pages that need to be
  // rendered at build time.
  const paths = posts.map(({ fields: { slug, category } }) => ({
    params: {
      category: `${category.toLowerCase()}`,
      slug
    }
  }));
  return {
    paths,
    fallback: false
  };
}
