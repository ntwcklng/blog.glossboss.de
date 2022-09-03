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
        {posts.length > postsToShow && (
          <button
            onClick={loadMorePosts}
            className="text-lg animate-pulse hover:text-blue-500">
            weitere{" "}
            {Math.min(reloadPosts, posts.length - postsToShow)}{" "}
            Beiträge laden{" "}
          </button>
        )}
      </div>
    </Container>
  );
}
