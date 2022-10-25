import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import dynamic from 'next/dynamic'
const Menu = dynamic(() => import ("../../components/Menu"));

export default function Stylebook() {

  const { t } = useTranslation("common");

  const Cores = [
    {
      nome: t('primaria'),
      hex: '#5B1AB2',
      bg: 'primary',
      tituloCor: 'white'
    },
    {
      nome: t('secundaria'),
      hex: '#B69DF8',
      bg: 'secondary',
      tituloCor: 'white'
    },
    {
      nome: t('tercearia'),
      hex: '#FF6600',
      bg: 'tertiary',
      tituloCor: 'white'
    }
  ]

  const Background = [
    {
      nome: t('claro'),
      hex: '#FBF7FF',
      bg: 'bgClear',
      tituloCor: 'black'
    },
    {
      nome: t('escuro'),
      hex: '#43474f',
      bg: 'bgDark',
      tituloCor: 'white'
    }
  ]

  function Cor({ nome, hex, bg, tituloCor, gradiente }) {
    return (
      <>
        <Flex
          bg={bg}
          bgGradient={gradiente}
          w='60'
          h='40'
          borderRadius={'5px'}
          justifyContent={'space-between'}
          flexDir='column'
          p='4'>
          <Text
            color={tituloCor}
            fontSize={'lg'}
            align={'initial'}>
            {nome}
          </Text>
          <Text
            fontSize={'sm'}
            color={tituloCor}
            align={'end'}>
            {hex}
          </Text>
        </Flex>
      </>
    )
  }

  function Fonte({ nome, children }) {
    return (
      <>
        <Flex
          justifyContent={'space-between'}
          align='center'>
          <Text>
            {nome}
          </Text>
          {children}
        </Flex>
        <Divider />
      </>
    )
  }

  const cor = useColorModeValue('gray.400', 'gray.600');

  return (
    <Menu>
      <Container
        maxW='full'
        py='16'
        textAlign={'center'}>
        <Heading
          as={'h1'}
          variant={'h1'}
          mb='10'>
          Stylebook
        </Heading>
        <Center
          flexDir={'column'}>
          <Flex
            w={'5xl'}
            flexDir='column'
            gap='10'>
            <Flex
              flexDir='row'
              gap='5'
              mt='15px'>
              {Cores.map((cor, idx) => (
                <Cor
                  key={idx}
                  nome={cor.nome}
                  hex={cor.hex}
                  bg={cor.bg}
                  gradiente={''}
                  tituloCor={cor.tituloCor} />
              ))}
            </Flex>
            <Flex
              flexDir='row'
              gap='5'
              mt='15px'>
              {Background.map((cor, idx) => (
                <Cor
                  key={idx}
                  nome={cor.nome}
                  hex={cor.hex}
                  bg={cor.bg}
                  gradiente={''}
                  tituloCor={cor.tituloCor} />
              ))}
            </Flex>
            <Flex
              flexDir='row'
              gap='5'
              mt='15px'>
              <Cor
                nome={t('gradiente')}
                bg={''}
                gradiente={'linear-gradient(180deg, #5B1AB2 0%, #300964 100%)'}
                tituloCor='white'
                hex='linear-gradient(180deg, #5B1AB2 0%, #300964 100%)'
              />
            </Flex>
            <Fonte nome='Heading 1'>
              <Heading
                variant={'h1'}>
                Webpeak
              </Heading>
            </Fonte>

            <Fonte nome='Heading 2'>
              <Heading
                variant={'h2'}>
                Webpeak
              </Heading>
            </Fonte>

            <Fonte nome='Heading 3'>
              <Heading
                variant={'h3'}>
                Webpeak
              </Heading>
            </Fonte>

            <Fonte nome={t('paragrafo')}>
              <Text>
                Webpeak
              </Text>
            </Fonte>

            <Fonte nome='Link'>
              <Box
                fontWeight={'500'}
                fontSize='14px'
                _hover={{
                  textDecoration: 'none',
                  color: cor
                }}>
                <Link
                  href={''}>
                  <a>Webpeak</a>
                </Link>
              </Box>
            </Fonte>

            <Fonte nome={t('btnPrimario')}>
              <Button
                variant={'button'}
                _hover={{
                  bg: '#B69DF8'
                }}>
                Webpeak
              </Button>
            </Fonte>

            <Fonte nome={t('btnSecundario')}>
              <Button 
              variant={'button-orange'}
              _hover={{
                  bg: '#FFB596'
              }}>
                Webpeak
              </Button>
            </Fonte>

            <Fonte nome='Accordion'>
              <Accordion
                defaultIndex={[0]}
                allowMultiple>
                <AccordionItem w='md'>
                  <AccordionButton>
                    <Text>
                      Lorem
                    </Text>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel maxW={'md'}>
                    <Text
                      align={'initial'}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ipsam expedita eaque. At ex voluptatum adipisci omnis id saepe natus, nobis itaque laborum beatae repudiandae! Sint reprehenderit adipisci tenetur aspernatur.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Fonte>
          </Flex>

        </Center>
      </Container>
    </Menu>
  )
}