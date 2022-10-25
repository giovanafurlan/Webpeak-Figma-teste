import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { CategoriaContent } from "../lib/categorias";

type Props = {
  categoria: CategoriaContent;
};

export default function CategoriaButton({ categoria }: Props) {
  return (
    <Box
      borderBottom={'2px'}
      w='max-content'
      margin={'0 auto'}
      borderColor='primary'
      textTransform={'capitalize'}>
      <Link href={"/blogs/categorias/[[...cate]]"} as={`/blogs/categorias/${categoria.cate}`}>
        <a>
          {categoria.name}
        </a>
      </Link>
    </Box>
  );
}