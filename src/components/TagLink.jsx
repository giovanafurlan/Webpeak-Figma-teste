import Link from "next/link";

export default function TagLink({ tag }) {
  return (
    <Link
      href={"/blogs/tags/[[...ta]]"}
      as={`/blogs/tags/${tag.ta}`}>
      <a>{tag.name}</a>
    </Link>
  );
}
