import {
  Avatar,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import style from 'styled-components';

const Arrow = style.div`
.swiper-button-next,
.swiper-button-prev {
    color: #5B1AB2;
    fill: black;
    stroke: black;
}
`
export default function Testemunho() {

  const bg = useColorModeValue('bgClear', 'bgDark');
  const { t } = useTranslation("common");

  return (
    <Container
      maxW={'full'}
      textAlign='center'
      py='16'
      bg={bg}>
      <Center>
        <Flex
          w={'5xl'}
          flexDir='column'
          gap='10'>
          <Heading
            as={'h4'}
            fontSize='3xl'
            fontWeight='bold'>
            {t("clientes")}
          </Heading>
          <Box
            w={{
              lg: 'auto',
              sm: '100vw'
            }}
            zIndex='0'>
            <Arrow>
              <Swiper rewind={true}
                navigation={true}
                modules={[Navigation]}>
                <SwiperSlide>
                  <Info
                    titulo={'Titulo do depoimento'}
                    texto={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat ante, dignissim vel nisi in, vestibulum pellentesque diam. Suspendisse suscipit vehicula tortor, ut finibus nisl mattis in. Donec a tortor a risus posuere ornare eu vel quam. Suspendisse congue purus in tristique porttitor. Suspendisse nunc enim, interdum sed est ornare, molestie interdum purus. Morbi sem eros, dapibus sed augue nec, eleifend semper erat.'}
                    nome={'Nome Pessoa'}
                    cargo={'Cargo'} />
                </SwiperSlide>
                <SwiperSlide>
                  <Info
                    titulo={'Titulo do depoimento'}
                    texto={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat ante, dignissim vel nisi in, vestibulum pellentesque diam. Suspendisse suscipit vehicula tortor, ut finibus nisl mattis in. Donec a tortor a risus posuere ornare eu vel quam. Suspendisse congue purus in tristique porttitor. Suspendisse nunc enim, interdum sed est ornare, molestie interdum purus. Morbi sem eros, dapibus sed augue nec, eleifend semper erat.'}
                    nome={'Nome Pessoa'}
                    cargo={'Cargo'} />
                </SwiperSlide>
                <SwiperSlide>
                  <Info
                    titulo={'Titulo do depoimento'}
                    texto={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat ante, dignissim vel nisi in, vestibulum pellentesque diam. Suspendisse suscipit vehicula tortor, ut finibus nisl mattis in. Donec a tortor a risus posuere ornare eu vel quam. Suspendisse congue purus in tristique porttitor. Suspendisse nunc enim, interdum sed est ornare, molestie interdum purus. Morbi sem eros, dapibus sed augue nec, eleifend semper erat.'}
                    nome={'Nome Pessoa'}
                    cargo={'Cargo'} />
                </SwiperSlide>
                <SwiperSlide>
                  <Info
                    titulo={'Titulo do depoimento'}
                    texto={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat ante, dignissim vel nisi in, vestibulum pellentesque diam. Suspendisse suscipit vehicula tortor, ut finibus nisl mattis in. Donec a tortor a risus posuere ornare eu vel quam. Suspendisse congue purus in tristique porttitor. Suspendisse nunc enim, interdum sed est ornare, molestie interdum purus. Morbi sem eros, dapibus sed augue nec, eleifend semper erat.'}
                    nome={'Nome Pessoa'}
                    cargo={'Cargo'} />
                </SwiperSlide>
                <SwiperSlide>
                  <Info
                    titulo={'Titulo do depoimento'}
                    texto={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat ante, dignissim vel nisi in, vestibulum pellentesque diam. Suspendisse suscipit vehicula tortor, ut finibus nisl mattis in. Donec a tortor a risus posuere ornare eu vel quam. Suspendisse congue purus in tristique porttitor. Suspendisse nunc enim, interdum sed est ornare, molestie interdum purus. Morbi sem eros, dapibus sed augue nec, eleifend semper erat.'}
                    nome={'Nome Pessoa'}
                    cargo={'Cargo'} />
                </SwiperSlide>
              </Swiper>
            </Arrow>
          </Box>
        </Flex>
      </Center>
    </Container>
  )
}

function Info({ titulo, texto, nome, cargo, imagem }) {
  const bg = useColorModeValue('white', 'blackAlpha.200');
  const aspas = useColorModeValue("url('/images/aspas-clear.webp')", "url('/images/aspas-dark.png')");

  return (
    <Box px={{
      lg: '20',
      sm: '10'
    }}>
      <Box
        bg='white'
        p='10'
        bgImage="url('/images/aspas-clear.webp')"
        bgRepeat={'no-repeat'}
        boxShadow='shadow'
        borderRadius='5px'>
        <VStack
          textAlign={'initial'}
          align={'initial'}
          maxW={'3xl'}
          margin='0 auto'>
          <Box>
            <Heading
              as='h4'
              variant={'h4'}
              color={'black'}
              fontSize='lg'
              fontWeight='bold'>
              {titulo}
            </Heading>
            <br />
            <Text
              color={'black'}>
              {texto}
            </Text>
          </Box>
          <br />
          <Flex
            gap={'3'}>
            <Avatar src={imagem} />
            <Box>
              <Text
                color={'black'}
                fontWeight='bold'>
                {nome}
              </Text>
              <Text
                color={'black'}>
                {cargo}
              </Text>
            </Box>
          </Flex>
        </VStack>
      </Box>
    </Box>
  )
}