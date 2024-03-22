import { Post } from "@/interfaces/post";
import PostItem from "./PostItem";

type Props = {
  posts: Post[];
};

export default function PostList({ posts }: Props) {
  return (
    <div>
      {posts.map((post) => (
        <PostItem
          key={post.slug}
          title={post.title}
          ctime={post.ctime}
          slug={post.slug}
        />
      ))}
    </div>
  );
}
