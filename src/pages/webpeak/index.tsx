import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { RiUserSettingsLine } from 'react-icons/ri';
import { FiRefreshCw } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { GiHillConquest, GiOnTarget } from 'react-icons/gi';
import { TbDiamond } from 'react-icons/tb';
import dynamic from 'next/dynamic'
const Menu = dynamic(() => import("../../components/Menu"));
const Rodape = dynamic(() => import("../../components/Rodape"));
const Numbers = dynamic(() => import("../../components/Numbers"));
const Testemunho = dynamic(() => import("../../components/Testemunho"));
const Midia = dynamic(() => import("../../components/Midia"));
const Timeline = dynamic(() => import("../../components/Timeline"));
const Marcas = dynamic(() => import("../../components/Marcas"));
import style from 'styled-components';

const List = style.div`
  li{
    list-style: none;
  }
`

export default function Webpeak() {

  const { t } = useTranslation("common");
  const bg = useColorModeValue('bgClear', 'bgDark');

  const flores = useColorModeValue('/images/floresnet.png', '/images/logo-floresnet-branco.png');
  const iron = useColorModeValue('/images/ironbag.png', '/images/logo-ironbag-branco.png');
  const joao = useColorModeValue('/images/joao-bidu.png', '/images/logo-joao-bidu-branco.png');
  const loeil = useColorModeValue('/images/loeil.png', '/images/logo-loeil-branco.png');
  const newage = useColorModeValue('/images/newage.png', '/images/logo-newage-branco.png');
  const nobre = useColorModeValue('/images/nobre-mobilia.png', '/images/logo-nobre-mobilia-branco.png');
  const medico = useColorModeValue('/images/medico-das-canetas.png', '/images/logo-medico-das-canetas-branco.png');
  const paulinho = useColorModeValue('/images/paulinho-motos.png', '/images/logo-paulinho-motos-branco.png');
  const uniorka = useColorModeValue('/images/uniorka.png', '/images/logo-uniorka-branco.png');

  const marcas = [
    {
      alt: 'Flores Net - WebPeak Ferramenta de SEO',
      logo: flores
    },
    {
      alt: 'Iron Bag - WebPeak Ferramenta de SEO',
      logo: iron
    },
    {
      alt: 'Joao Bidu - WebPeak Ferramenta de SEO',
      logo: joao
    },
    {
      alt: 'Loeil - WebPeak Ferramenta de SEO',
      logo: loeil
    },
    {
      alt: 'Newage - WebPeak Ferramenta de SEO',
      logo: newage
    },
    {
      alt: 'Nobre Mobilia - WebPeak Ferramenta de SEO',
      logo: nobre
    },
    {
      alt: 'Medico das Canetas - WebPeak Ferramenta de SEO',
      logo: medico
    },
    {
      alt: 'Paulinho Motos - WebPeak Ferramenta de SEO',
      logo: paulinho
    },
    {
      alt: 'Uniorka - WebPeak Ferramenta de SEO',
      logo: uniorka
    },
  ]

  const bg2 = useColorModeValue('bgClear', 'bgDark');
  const color2 = useColorModeValue('black', 'white');

  return (
    <Menu>
      <Container
        maxW={'full'}
        bg={bg}
        py='16'
        textAlign={'center'}>
        <Center>
          <Flex
            flexDir={'column'}
            gap='10'
            w={'5xl'}>
            <Heading
              as={'h1'}
              variant='h1'>
              {t('conhecaWebpeak')}
            </Heading>
            <Heading
              as={'h3'}
              variant='h3'>
              {t('timelineWebpeak')}
            </Heading>
            <List>
              <Box mt='4'>
                <Timeline />
              </Box>
            </List>
          </Flex>
        </Center>
      </Container>
      <Marcas
        marcas={marcas} />
      <Container
        maxW={'full'}
        bg={bg}
        py='16'
        textAlign={'center'}>
        <Center>
          <Box
            w={'5xl'}
            flexDir='column'>
            <Grid
              templateColumns={{
                lg: 'repeat(3, 1fr)',
                sm: 'repeat(2, 1fr)'
              }}
              gap={{
                lg: '8',
                sm: '4'
              }}>
              <Card
                icone={RiUserSettingsLine}
                titulo={'Sucesso do Cliente'}
                texto={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
              <Card
                icone={FiRefreshCw}
                titulo={'Atualizações'}
                texto={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
              <Card
                icone={AiOutlineHeart}
                titulo={'Prestação de Serviço'}
                texto={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
              <Card
                icone={GiHillConquest}
                titulo={'Missão'}
                texto={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
              <Card
                icone={GiOnTarget}
                titulo={'Visão'}
                texto={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
              <Card
                icone={TbDiamond}
                titulo={'Valores'}
                texto={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
            </Grid>
          </Box>
        </Center>
      </Container>
      <Numbers />
      <Testemunho />
      <Midia />
      <Rodape recursosCompletos={undefined} ultimasPostagens={undefined} conteudoCategoria={undefined} principaisPlataformas={undefined} />
    </Menu>
  );
}

function Card({
  icone,
  titulo,
  texto }) {

  return (
    <Flex
      flexDir={'column'}
      gap='6'
      py='10'
      px='4'
      w={'auto'}
      h='auto'
      align='center'
      boxShadow={'0px 4px 15px rgba(0, 0, 0, 0.07)'}>
      <Flex
        bgGradient={'linear-gradient(#5B1AB2, purple.700)'}
        margin='0 auto'
        w={'min'}
        p='4'
        borderRadius={'100%'}
        align='center'
        color={'white'}>
        <Icon
          as={icone}
          w={'8'}
          h={'8'}
          alignSelf={'center'}
          color='white' />
      </Flex>
      <Heading
        as={'h3'}
        variant='h3'>
        {titulo}
      </Heading>
      <Text>{texto}</Text>
    </Flex>
  )
}