import Header from "@/_components/Header";
import PostBody from "@/_components/PostBody";
import { getPostBySlug, getPostSlugs } from "@/lib/api";

import styles from "./post.module.scss";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function page({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return "The slug is invalid";
  }

  // const content = await markdownToHtml(post.content);

  return (
    <main className="mx-auto max-w-xl">
      <Header />
      <article className={styles.post}>
        <h1 className="text-xl font-bold mb-4">{post.title}</h1>
        <PostBody content={post.content} />
      </article>
    </main>
  );
}
