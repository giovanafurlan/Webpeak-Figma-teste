import {
    Text,
  } from '@chakra-ui/react';
  import Link from "next/link";
  
  export default function RodapeLink({ item, link }) {
  
    return (
      <Link href={`/${link}/` + item.slug}>
        <a>
            <Text
              fontWeight='normal'
              fontSize={'md'}>
              {item.title}
            </Text>
        </a>
      </Link>
    );
  }
  