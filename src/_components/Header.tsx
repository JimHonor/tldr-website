import Link from "next/link";

export default function Header() {
  return (
    <div className="py-4 mb-2">
      <Link href="/" className="hover:underline">
        Home
      </Link>
    </div>
  );
}
