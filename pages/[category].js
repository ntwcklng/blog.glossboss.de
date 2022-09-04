import { NextSeo } from "next-seo";
import PostList from "@components/postlist";
import getPosts from "@utils/getPosts";
import Layout from "@components/layout";
import { allCategories } from "@utils/allCategories";
import { stringify } from "postcss";
import { CategoryLabel } from "@components/ui/categoryLabel";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { forwardRef, Fragment, useEffect, useState } from "react";
import Container from "@components/container";
const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});
export default function Home({ posts, category }) {
  return (
    <Layout>
      <CategoryLabel large={true}>{category}</CategoryLabel>
      <Container>
        <Menu as="div" className=" mx-auto inline-block max-w-full">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              Kategorien{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ml-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </Menu.Button>

            <>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 ">
                  {allCategories.map((cat, i) => {
                    return (
                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <MyLink href={`/${cat.toLowerCase()}`}>
                              <CategoryLabel
                                plain={true}
                                className={`${
                                  active
                                    ? "bg-gray-50 text-gray-700"
                                    : " "
                                }group flex w-full items-center rounded-md px-2 py-2 text-md mt-0`}>
                                {cat}
                              </CategoryLabel>
                            </MyLink>
                          )}
                        </Menu.Item>
                      </div>
                    );
                  })}
                </Menu.Items>
              </Transition>
            </>
          </div>
        </Menu>
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
