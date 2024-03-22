import Link from "next/link";
import DateFormatter from "./DateFormatter";

type Props = {
  title: string;
  ctime: Date;
  slug: string;
};

export default function PostItem({ title, ctime, slug }: Props) {
  return (
    <div className="flex justify-between items-center">
      <Link href={`/posts/${slug}`} className="hover:underline">
        {title}
      </Link>
      <div className="text-gray-500 text-sm">
        <DateFormatter date={ctime} />
      </div>
    </div>
  );
}
