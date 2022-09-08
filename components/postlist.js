import { useState, Fragment } from "react";
import {
  generateDefaultThumb,
  reloadPosts,
  generateSlug,
  CategoryLabel
} from "@utils/posts";
import Link from "next/link";
import Card from "@components/ui/card";
import Container from "./container";

export default function PostList({ posts = [], category = "" }) {
  const [postsToShow, setPostsToShow] = useState(reloadPosts - 7);

  const loadMorePosts = () => {
    setPostsToShow(prev => prev + reloadPosts);
  };
  return (
    <Container>
      <div className="grid gap-10 lg:gap-10 md:grid-cols-2">
        {posts.slice(0, 2).map((post, i) => {
          return (
            <Card data={post.fields} aspect="landscape" key={i} />
          );
        })}
      </div>
      <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
        {posts.slice(2, postsToShow).map((post, i) => {
          return <Card data={post.fields} aspect="square" key={i} />;
        })}
      </div>
      {posts.length > postsToShow && (
        <button
          onClick={loadMorePosts}
          className="mx-auto block mt-20 mb-6 justify-center rounded-md bg-gray-200 px-4 py-2 text-md font-medium text-gray-700 hover:bg-blue-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:bg-gray-600 dark:text-gray-200">
          weitere {Math.min(reloadPosts, posts.length - postsToShow)}{" "}
          Beiträge laden{" "}
        </button>
      )}
    </Container>
  );
}
