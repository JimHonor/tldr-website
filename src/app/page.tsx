import Header from "@/_components/Header";
import SearchablePosts from "@/_components/SeachablePosts";
import { getAllPosts } from "@/lib/api";

export default function page() {
  const posts = getAllPosts();

  return (
    <div className="max-w-xl mx-auto">
      <Header />
      <p>test</p>
      <SearchablePosts posts={posts} />
    </div>
  );
}
