import {
  Container,
  Center,
  Flex,
  useColorModeValue,
  Grid,
  GridItem,
  Button,
  Tag,
  Text,
  Box
} from '@chakra-ui/react';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import dynamic from 'next/dynamic'
const Menu = dynamic(() => import("./Menu"));
const Rodape = dynamic(() => import("./Rodape"));
const Analise = dynamic(() => import("./Analise"));
const PostItem = dynamic(() => import("./PostItem"));
const PostItemStatic = dynamic(() => import("./PostItemStatic"));
const TagButton = dynamic(() => import("./TagButton"));
const CategoriaButton = dynamic(() => import("./CategoriaButton"));
const Paginations = dynamic(() => import("./Pagination"));
import { PostContent } from "../lib/blogs";
import { TagContent } from "../lib/tags";
import { CategoriaContent } from "../lib/categorias";

type Props = {
  blogs: PostContent[];
  tags: TagContent[];
  categorias: CategoriaContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

export default function PostList({
  blogs,
  tags,
  categorias,
  pagination }: Props) {

  const { t } = useTranslation("common");
  const bg = useColorModeValue('bgClear', 'bgDark');

  const imagePerRow = 6;

  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  return (
    <>
      <Menu>
        <Container
          maxW={'full'}
          bg={bg}
          py='50px'
          textAlign={'center'}>
          <Center>
            <Flex
              flexDir={'column'}
              gap='10'
              w={'5xl'}>
              {/* <Box>
                {tags.map((it, i) => (
                  <TagButton key={i} tag={it} />
                ))}
              </Box>
              <Box>
                {categorias.map((it, i) => (
                  <CategoriaButton key={i} categoria={it} />
                ))}
              </Box> */}
              {/* lg */}
              <Box
                display={{
                  lg: 'inline',
                  sm: 'none'
                }}>
                <Box mb='10'>
                  {blogs?.slice(0, 1).map((it, i) => (
                    <GridItem key={i}>
                      <PostItemStatic post={it} />
                    </GridItem>
                  ))}
                </Box>
                <Flex
                  gap='8'
                  flexDir={{
                    lg: 'row',
                    sm: 'column'
                  }}>
                  {blogs?.slice(1, 3).map((it, i) => (
                    <GridItem key={i}>
                      <PostItemStatic post={it} />
                    </GridItem>
                  ))}
                </Flex>
                {/* <Paginations
                  current={pagination.current}
                  pages={pagination.pages}
                  link={{
                    href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
                    as: (page) => (page === 1 ? null : "/posts/page/" + page),
                  }}
                /> */}
              </Box>
              {/* sm */}
              <Box
                display={{
                  lg: 'none',
                  sm: 'inline'
                }}>
                <Swiper
                  pagination={{
                    type: "fraction",
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper">
                  {blogs?.slice(0, 3).map((it, i) => (
                    <SwiperSlide key={i}>
                      <PostItemStatic post={it} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
              <Grid
                templateColumns={{
                  lg: 'repeat(3, 1fr)',
                  sm: 'repeat(1, 1fr)'
                }}
                gap={8}>
                {blogs?.slice(3, next).map((it, i) => (
                  <GridItem key={i}>
                    <PostItem post={it} />
                  </GridItem>
                ))}
              </Grid>
              {next < blogs?.length && (
                <Flex
                  justifyContent={'center'}
                  w='full'>
                  <Button
                    onClick={handleMoreImage}
                    variant='button'
                    _hover={{
                      bg: '#B69DF8'
                    }}>
                    {t('carrega')}
                  </Button>
                </Flex>
              )}
            </Flex>
          </Center>
        </Container>
        <Analise />
        <Rodape recursosCompletos={undefined} ultimasPostagens={undefined} conteudoCategoria={undefined} principaisPlataformas={undefined} />
      </Menu>
    </>
  );
}