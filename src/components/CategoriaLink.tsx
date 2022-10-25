import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { CategoriaContent } from "../lib/categorias";

type Props = {
  categoria: CategoriaContent;
};

export default function CategoriaLink({ categoria }: Props) {
  return (
    <Text textTransform={'capitalize'}>
      <Link
        href={"/blogs/categorias/[[...cate]]"}
        as={`/blogs/categorias/${categoria.cate}`}>
        <a>{categoria.name}</a>
      </Link>
    </Text>
  );
}