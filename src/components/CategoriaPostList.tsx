import {
  Container,
  Flex,
  Button,
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { useState } from "react";
import dynamic from 'next/dynamic'
const Menu = dynamic(() => import ("./Menu"));
const Rodape = dynamic(() => import ("./Rodape"));
const Analise = dynamic(() => import ("./Analise"));
const PostItem = dynamic(() => import ("./PostItem"));
import useTranslation from 'next-translate/useTranslation';
import { PostContent } from '../lib/blogs';
import { CategoriaContent } from '../lib/categorias';

type Props = {
  blogs: PostContent[];
  categoria: CategoriaContent;
  pagination: {
    current: number;
    pages: number;
  };
};

export default function CategoriaPostList({ blogs, categoria }:Props) {

  const { t } = useTranslation("common");
  
  const imagePerRow = 6;

  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  return (
    <Menu>
      <Container
        maxW={'5xl'}
        py='16'
        px={{
          lg: '0',
          sm: '20px'
        }}>
        <Flex
          flexDir={'column'}
          gap='10'>
          <Flex
            align={'center'}
            margin='0 auto'
            gap='2'>
            <Heading
              as='h1'
              variant={'h1'}
              textAlign='center'>
              {t('categoria')}
            </Heading>
            <Text
              fontSize={'2xl'}>
                / {categoria.name}
              </Text>
          </Flex>
          <Grid
            templateColumns={{
              lg: 'repeat(3, 1fr)',
              sm: 'repeat(2, 1fr)'
            }}
            gap={6}>
            {blogs?.slice(0, next).map((it, i) => (
              <GridItem key={i}>
                <PostItem post={it} />
              </GridItem>
            ))}
          </Grid>
          <Box>
            {next < blogs?.length && (
              <Flex
                justifyContent={'center'}
                w='full'>
                <Button
                  onClick={handleMoreImage}
                  variant='button'
                  _hover={{
                    bg:'#B69DF8'
                  }}>
                  {t('carrega')}
                </Button>
              </Flex>
            )}
          </Box>
        </Flex>
      </Container>
      <Analise />
      <Rodape recursosCompletos={undefined} ultimasPostagens={undefined} conteudoCategoria={undefined} principaisPlataformas={undefined} />
    </Menu>
  );
}