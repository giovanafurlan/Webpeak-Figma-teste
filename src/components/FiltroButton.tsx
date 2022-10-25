import {
  Flex,
  Tag
} from "@chakra-ui/react";
import { FiltroContent } from "../lib/filtros";

type Props = {
  filterItem: React.MouseEventHandler<HTMLButtonElement>;
  menuItems: string[];
};

export default function FiltroButton({ filterItem, menuItems }:Props) {

  return (
    <Flex
      textTransform={'capitalize'}
      gap='4'
      margin='0 auto'
      mb='10'>
      {menuItems.map((Val, id) => {
        return (
          <Tag
            key={id}
            _hover={{
              bg: 'primary',
              color: 'white'
            }}
            _focus={{
              bg: 'primary',
              color: 'white'
            }}
            px='4'
            py='2'
            borderRadius={'lg'}
            fontSize='md'
            cursor={'pointer'}
            onClick={filterItem}>
            {Val}
          </Tag>
        );
      })}
      {/* <Tag
        _hover={{
          bg: 'primary',
          color: 'white'
        }}
        _active={{
          bg: 'primary',
          color: 'white'
        }}
        px='4'
        py='2'
        borderRadius={'lg'}
        fontSize='md'
        cursor={'pointer'}
        onClick={refreshPage}>
          Todos
      </Tag> */}
    </Flex>
  );
};