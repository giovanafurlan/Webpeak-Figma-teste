import {
  Flex,
  Text
} from '@chakra-ui/react';
import { AuthorContent } from "../lib/authors";

type Props = {
  author: AuthorContent;
};

export default function Author({ author }: Props) {
  return (
    <Flex
      align={'center'}
      gap='2'>
      <Text
        as={'span'}>
        {author.name}
      </Text>
    </Flex>
  );
}
