import { Post } from "@/interfaces/post";
import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDir = join(process.cwd(), "_content");

// get post file names
const EXCLUDES = [".git", ".github"];
const getFilenames = () => {
  const filenames = readdirSync(postsDir).filter(
    (filename) => !EXCLUDES.includes(filename)
  );
  console.log("filenames", filenames);
  return filenames;
};

const getPostByFilename = (filename: string) => {
  const fullPath = join(postsDir, filename);
  const fileContent = readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContent);
  const slug = slugify(data.title); // Use post title as slug / permalink

  return { ...data, slug, content } as Post;
};

export const getAllPosts = () => {
  const filenames = getFilenames();
  const posts = filenames.map((filename) => getPostByFilename(filename));
  return posts;
};

export const getPostSlugs = () => {
  const posts = getAllPosts();
  return posts.map((post) => post.slug);
};

export const getPostBySlug = (slug: string) => {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
};

//
const slugify = (str: string) => {
  // https://dev.to/bybydev/how-to-slugify-a-string-in-javascript-4o9n
  return str.replace(/\s+/g, "-"); // replace spaces with hyphens
};

const unslug = (str: string) => {
  return str.split("-").join(" ");
};
