"use client";

import { Post } from "@/interfaces/post";
import PostList from "./PostList";
import Searchbar from "./Searchbar";
import { useMemo, useState } from "react";

type Props = {
  posts: Post[];
};

export default function Home({ posts }: Props) {
  const [searchterm, setSearchterm] = useState("");

  const filterPosts = useMemo(
    () =>
      searchterm
        ? posts.filter((post) => post.title.includes(searchterm))
        : posts,
    [searchterm]
  );

  return (
    <>
      <Searchbar onSubmit={setSearchterm} />
      <PostList posts={filterPosts} />
    </>
  );
}
