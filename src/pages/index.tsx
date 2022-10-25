import {
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  useColorModeValue,
  Box,
  Text,
  Image
} from '@chakra-ui/react';
import { CgSearchFound } from "react-icons/cg";
import { FiLink } from "react-icons/fi";
import { AiOutlineKey } from "react-icons/ai";
import { MdOutlineMarkChatUnread } from "react-icons/md";
import useTranslation from 'next-translate/useTranslation';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import dynamic from 'next/dynamic'
const Menu = dynamic(() => import("../components/Menu"));
const Rodape = dynamic(() => import("../components/Rodape"));
const Numbers = dynamic(() => import("../components/Numbers"));
const Midia = dynamic(() => import("../components/Midia"));
const Planos = dynamic(() => import("../components/Planos"));
const Clientes = dynamic(() => import("../components/Clientes"));
const Testemunho = dynamic(() => import("../components/Testemunho"));
const Sessao = dynamic(() => import("../components/Sessao"));
const Card = dynamic(() => import("../components/Card"));
import style from 'styled-components';

const Dot = style.div`
.swiper-pagination-bullet-active{
    background: #fff;
}
.swiper{
  padding-top: 20px;
  padding-bottom: 20px;
}

.swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
  bottom: -5px;
}
`

export default function Index() {
  const { t } = useTranslation("common");

  const bg = useColorModeValue('bgClear', 'bgDark');
  const search = useColorModeValue("url('images/search-clear.webp')", "url('images/search-dark.webp')");

  const marcas = [
    {
      alt: 'Flores Net - WebPeak Ferramenta de SEO',
      logo: '/images/logo-flores-net.webp'
    },
    {
      alt: 'Iron Bag - WebPeak Ferramenta de SEO',
      logo: '/images/logo-iron-bag.webp'
    },
    {
      alt: 'Joao Bidu - WebPeak Ferramenta de SEO',
      logo: '/images/logo-joao-bidu.webp'
    },
    {
      alt: 'Loeil - WebPeak Ferramenta de SEO',
      logo: '/images/logo-loeil.webp'
    },
    {
      alt: 'Embalagens Vip - WebPeak Ferramenta de SEO',
      logo: '/images/logo-embalagens-vip.webp'
    },
    {
      alt: 'Newage - WebPeak Ferramenta de SEO',
      logo: '/images/logo-newage.webp'
    },
    {
      alt: 'Nobre Mobilia - WebPeak Ferramenta de SEO',
      logo: '/images/logo-nobre-mobilia.webp'
    },
    {
      alt: 'Medico das Canetas - WebPeak Ferramenta de SEO',
      logo: '/images/logo-medico-das-canetas.webp'
    },
    {
      alt: 'Paulinho Motos - WebPeak Ferramenta de SEO',
      logo: '/images/logo-paulinho-motos.webp'
    },
    {
      alt: 'Real Suplementos - WebPeak Ferramenta de SEO',
      logo: '/images/logo-real-suplementos.webp'
    },
    {
      alt: 'Uniorka - WebPeak Ferramenta de SEO',
      logo: '/images/logo-uniorka.webp'
    },
  ]

  return (
    <>
      <Menu>
        <Container
          bgGradient={'linear-gradient(180deg, #5B1AB2 0%, #300964 100%)'}
          maxW='full'
          pt='16'
          pb='14'>
          <Center>
            <Box
              w={'5xl'}
              flexDir='column'>
              <Heading
                as={'h1'}
                fontWeight='medium'
                color='white'
                mb='10'
                px={{
                  lg: '0',
                  sm: '4'
                }}>
                {t("mensuracao")}
                <br />
                {t("mensuracao2")}
              </Heading>
              {/* <Box display={'none'}>
                <Text
                  fontWeight='normal'
                  fontSize={'2xl'}
                  color='white'
                  textAlign={'initial'}
                  mb='10'
                  px={{
                    lg: '0',
                    sm: '4'
                  }}>
                  {t("trafego")} <br />
                  {t("trafego2")}
                </Text>
                <Grid
                  templateColumns={{
                    lg: '2fr 1fr 1fr'
                  }}
                  gap={6}
                  mb='10'
                  px={{
                    lg: '0',
                    sm: '4'
                  }}>
                  <Input
                    borderRadius={'3xl'}
                    bg='white'
                    color={'black'}
                    placeholder={t('url')}
                    type='text'
                    _placeholder={{
                      color: 'gray.400',
                      fontSize: 'sm'
                    }} />
                  <Input
                    borderRadius={'3xl'}
                    bg='white'
                    color={'black'}
                    placeholder={t('email')}
                    type='email'
                    _placeholder={{
                      color: 'gray.400',
                      fontSize: 'sm'
                    }} />
                  <Button
                    colSpan={2}
                    variant={'button-orange'}
                    _hover={{
                      bg: '#FFB596'
                    }}>
                    {t("resultado")}
                  </Button>
                </Grid>
              </Box> */}
              <Text
                fontSize={'2xl'}
                color='white'
                textAlign={'center'}>
                {t("confiado")}
              </Text>
              <Box
                display={{
                  lg: 'inline',
                  sm: 'none'
                }}>
                <Dot>
                  <Swiper
                    slidesPerView={5}
                    spaceBetween={60}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper">
                    {marcas.map((item, idx) => (
                      <SwiperSlide
                        key={idx}>
                        <Image
                          src={item.logo}
                          alt={item.alt}
                          width='auto'
                          height={'auto'}
                          loading='lazy' />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Dot>
              </Box>

              <Box
                display={{
                  lg: 'none',
                  sm: 'inline-block'
                }}
                w='100vw'>
                <Dot>
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper">
                    {marcas.map((item, idx) => (
                      <SwiperSlide
                        key={idx}>
                        <Image
                          src={item.logo}
                          alt={item.alt}
                          width='40'
                          height={'auto'}
                          loading='lazy' />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Dot>
              </Box>
            </Box>
          </Center>
        </Container>
        <Container
          bg={bg}
          maxW='full'
          py='16'>
          <Center>
            <Flex
              w={'5xl'}
              flexDir='column'
              gap='10'
              textAlign={'center'}>
              <Heading
                as={'h2'}
                variant={'h2'}>
                {t("plataformaAll")}
              </Heading>
              <Heading
                as={'h3'}
                variant={'h3'}
                textAlign={'center'}>
                {t("demonstracao")}
              </Heading>
              <Center>
                <Flex flexDirection={'column'}>
                  <Grid
                    templateColumns={{
                      lg: 'repeat(4, 1fr)',
                      md: 'repeat(3, 1fr)',
                      sm: 'repeat(2, 1fr)'
                    }}
                    gap={5}>
                    <Card
                      titulo={t("auditoria")}
                      icone={CgSearchFound}
                      cor={'linear(purple.400, purple.700)'}
                      texto={t('cardTextoAuditoria')}
                      link={'/recursos/auditoria-tecnica'}>
                    </Card>
                    <Card
                      titulo={t("palavraChave")}
                      icone={AiOutlineKey}
                      cor={'linear(blue.400, blue.700)'}
                      texto={t('cardTextoPalavraChave')}
                      link={'/recursos/palavra-chave'}>
                    </Card>
                    <Card
                      titulo={t("backlinks")}
                      icone={FiLink}
                      cor={'linear(yellow.400, yellow.700)'}
                      texto={t('cardTextoBacklinks')}
                      link={'/recursos/backlinks'}>
                    </Card>
                    <Card
                      titulo={t("sinais")}
                      icone={MdOutlineMarkChatUnread}
                      cor={'linear(pink.400, pink.700)'}
                      texto={t('cardTextoSinais')}
                      link={'/recursos/sinais-sociais'}>
                    </Card>
                  </Grid>
                  <Button
                    margin={'0 auto'}
                    mt='10'
                    variant={'button-orange'}
                    _hover={{
                      bg: '#FFB596'
                    }}>
                    {t('testarFerramenta')}
                  </Button>
                </Flex>
              </Center>
            </Flex>
          </Center>
        </Container>
        <Sessao
          titulo={t("auditoria")}
          texto={t('sessaoTextoAuditoria')}
          imagem={'/images/auditoria-tecnica.webp'}
          alt={'Auditoria Técnica - Ferramenta de SEO WebPeak'}
          ordem={{
            lg: '1',
            sm: '0'
          }}
          fundo={'none'}
          alinhamento={'start'}
          fundoIMG={''}
          link={'/recursos/auditoria-tecnica'}
          py='16'
          width={'5xl'} bgImg={undefined} />
        <Sessao
          titulo={t("palavraChave")}
          texto={t('sessaoTextoPalavraChave')}
          imagem={'/images/palavra-chave.webp'}
          alt={'Palavra Chave - Ferramenta de SEO WebPeak'}
          ordem={'0'}
          fundo={bg}
          alinhamento={'end'}
          fundoIMG={''}
          link={'/recursos/palavra-chave'}
          py='16'
          width={'5xl'} bgImg={undefined} />
        <Sessao
          titulo={t("backlinks")}
          texto={t('sessaoTextoBacklinks')}
          imagem={'/images/backlinks.webp'}
          alt={'Backlinks - Ferramenta de SEO WebPeak'}
          ordem={{
            lg: '1',
            sm: '0'
          }}
          fundo={''}
          alinhamento={'start'}
          fundoIMG={''}
          link={'/recursos/backlinks'}
          py='16'
          width={'5xl'} bgImg={undefined} />
        <Sessao
          titulo={t("sinais")}
          texto={t('sessaoTextoSinais')}
          imagem={'/images/sinais-sociais.webp'}
          alt={'Sinais Sociais - Ferramenta de SEO WebPeak'}
          ordem={'0'}
          fundo={bg}
          alinhamento={'end'}
          fundoIMG={search}
          link={'/recursos/sinais-sociais'}
          py='16'
          width={'5xl'} bgImg={undefined} />

        <Numbers />

        <Planos />

        <Midia />

        <Testemunho />

        <Clientes />

        <Rodape recursosCompletos={undefined} ultimasPostagens={undefined} conteudoCategoria={undefined} principaisPlataformas={undefined} />
      </Menu>
    </>
  );
}