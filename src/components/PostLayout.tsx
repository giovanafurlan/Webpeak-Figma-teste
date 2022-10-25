import {
  Container,
  Flex,
  useColorModeValue,
  Button,
  Box,
  Heading,
  Text,
  Image
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { getAuthor } from "../lib/authors";
import { getTag } from "../lib/tags";
import { getCategoria } from "../lib/categorias";
import dynamic from 'next/dynamic'
const Menu = dynamic(() => import("./Menu"));
const Rodape = dynamic(() => import("./Rodape"));
const Date = dynamic(() => import("./Date"));
const Author = dynamic(() => import("./Author"));
const TagButton = dynamic(() => import("./TagButton"));
const CategoriaButton = dynamic(() => import("./CategoriaButton"));
const BasicMeta = dynamic(() => import("./meta/BasicMeta"));
const JsonLdMeta = dynamic(() => import("./meta/JsonLdMeta"));
const TwitterCardMeta = dynamic(() => import("./meta/TwitterCardMeta"));
const OpenGraphMeta = dynamic(() => import("./meta/OpenGraphMeta"));
import style from 'styled-components';

const Format = style.div`
* {
  all: revert;
}

p {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 17px;
}

a {
  background-color: transparent;
  -webkit-transition: .2s cubic-bezier(.215, .61, .355, 1);
  transition: .2s cubic-bezier(.215, .61, .355, 1);
  color: #FF6600;
  text-decoration: none;
}

a:hover{
  color: #5B1AB2;
}

strong {
  font-weight: 700;
}

ol, ul {
  margin-top: 0;
  margin-bottom: 10px;
  padding-left: 40px;
}

h1, h2, h3, h4, h5, h6{
  margin-top: 40px;
  margin-bottom: 30px;
  font-weight: 400;
}

h1 {
  font-size: 3.125rem;
  line-height: 3.188rem;
}

h2{
  font-size: 2.75rem;
  line-height: 3.125rem;
}

h3 {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

h4 {
  font-size: 1.313rem;
  line-height: 1.938rem;
}

img {
  width: 100%;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
}

iframe {
  width: 100%;
  height: 40vh;
  margin: 0 auto;
}

figure{
  padding: 0!important;
  margin: 0 auto;
}

figcaption {
  margin-top: 5px;
  margin-bottom: 20px;
  text-align: center;
}

blockquote {
  margin: 0 0 10px;
  padding: 10px 20px;
  border-left: 5px solid #e2e2e2;
  font-size: 18px;
  line-height: 22px;
}

@media(min-width: 320px) and (max-width: 1000px){
  margin: 0 auto;

  img{
      width: auto;
  }
}
`
type Props = {
  image: string;
  title: string;
  intro: string;
  date: Date;
  slug: string;
  tags: string[];
  categorias: string[];
  author: string;
  description?: string;
  children: React.ReactNode;
};

export default function PostLayout({
  image,
  title,
  intro,
  date,
  slug,
  author,
  tags,
  categorias,
  description = "",
  children
}:Props) {
  const keywords = tags.map(it => getTag(it).name);

  const authorName = getAuthor(author).name;

  const { t } = useTranslation("common");
  const bg = useColorModeValue('bgClear', 'bgDark');

  return (
    <>
      <BasicMeta
        url={`/blogs/${slug}`}
        title={title}
        keywords={keywords}
        description={intro}
      />
      <TwitterCardMeta
        url={`/blogs/${slug}`}
        title={title}
        description={intro}
      />
      <OpenGraphMeta
        url={`/blogs/${slug}`}
        title={title}
        description={intro}
      />
      <JsonLdMeta
        url={`/blogs/${slug}`}
        title={title}
        keywords={keywords}
        date={date}
        author={authorName}
        description={intro}
      />
      <Menu>
        <Container
          maxW={'full'}
          pt='16'
          pb='14'
          px={{
            lg: '0',
            sm: '20px'
          }}
          bg={bg}>
          <Flex
            flexDir={'column'}
            maxW={'5xl'}
            margin={'0 auto'}
            gap='10'>
            {/* <Flex
              gap='2'
              margin={'0 auto'}
              display='none'>
              {categorias?.map((it, i) => (
                <Box key={i}>
                  <CategoriaButton key={i} categoria={getCategoria(it)} />
                </Box>
              ))}
            </Flex> */}
            <Box
              margin={'0 auto'}>
              <Heading
                as='h1'
                variant={'h1'}>
                {title}
              </Heading>
            </Box>
            <Flex
              gap='2'
              margin={'0 auto'}>
              {tags?.map((it, i) => (
                <Box key={i}>
                  <TagButton tag={getTag(it)} />
                </Box>
              ))}
            </Flex>
            <Flex
              margin={'0 auto'}
              gap='2'
              align={'center'}>
              <Date
                color={'gray'}
                date={date} />
              <Author author={getAuthor(author)} />
            </Flex>
            <Format>
              <Text>
                {intro}
              </Text>
            </Format>
          </Flex>
        </Container>
        <Image
          src={image}
          alt={title}
          width='100%'
          maxHeight={'lg'}
          loading='lazy' />
        <Container
          maxW={'5xl'}
          py='16'
          px={{
            lg: '0',
            sm: '20px'
          }}>
          <Format>
            <Box>
              {children}
            </Box>
          </Format>
          <Flex
            bg='primary'
            borderRadius={'9px'}
            p='10'
            mt='16'
            textAlign={'center'}
            flexDir='column'
            gap='4'>
            <Text
              color='white'
              fontSize={'lg'}>
              {t('analise')}
            </Text>
            <Button
              variant={'button-orange'}
              margin={'0 auto'}
              _hover={{
                bg: '#FFB596'
              }}>
              {t('comeca')}
            </Button>
          </Flex>
        </Container>
        <Rodape recursosCompletos={undefined} ultimasPostagens={undefined} conteudoCategoria={undefined} principaisPlataformas={undefined} />
      </Menu>
    </>
  );
}