import { Tag } from "@chakra-ui/react";
import Link from "next/link";
import { TagContent } from "../lib/tags";

type Props = {
  tag: TagContent;
};

export default function TagButton({ tag }:Props) {
  return (
    <Link
      href={"/blogs/tags/[[...ta]]"}
      as={`/blogs/tags/${tag.ta}`}>
      <a>
        <Tag colorScheme={'purple'}>{tag.name}</Tag>
      </a>
    </Link>
  );
}