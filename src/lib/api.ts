import { Post } from "@/interfaces/post";
import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDir = join(process.cwd(), "_content");

// get post file names
const getPostSlugs = () => {
  return readdirSync(postsDir);
};

const getPostByFilenames = (slug: string) => {
  const realSlug = slugify(slug.replace(/\.md$/, ""));

  const fullPath = join(postsDir, slug);
  const fileContent = readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContent);

  return { ...data, slug: realSlug, content } as Post;
};

export const getPostBySlug = (slug: string) => {
  const filename = unslug(slug) + ".md";
  const fullPath = join(postsDir, filename);
  const fileContent = readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContent);

  return { ...data, slug, content } as Post;
};

export const getAllPosts = () => {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostByFilenames(slug));
  return posts;
};

//
const slugify = (str: string) => {
  // https://dev.to/bybydev/how-to-slugify-a-string-in-javascript-4o9n
  return str.replace(/\s+/g, "-"); // replace spaces with hyphens
};

const unslug = (str: string) => {
  return str.split("-").join(" ");
};
