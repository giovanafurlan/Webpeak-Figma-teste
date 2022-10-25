import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  VStack,
  Image
} from '@chakra-ui/react';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic'
const Menu = dynamic(() => import("../../components/Menu"));
const Rodape = dynamic(() => import("../../components/Rodape"));
const Numbers = dynamic(() => import("../../components/Numbers"));
const Midia = dynamic(() => import("../../components/Midia"));
const Testemunho = dynamic(() => import("../../components/Testemunho"));
const Clientes = dynamic(() => import("../../components/Clientes"));

export default function Planos() {

  const { t } = useTranslation("common");

  const [basic, setBasic] = useState('598,80');
  const [fit, setFit] = useState('930,82');
  const [ultra, setUltra] = useState('1.565,18');
  const [trimestral, setTrimestral] = useState(t('valorTrimestre'));
  const [semestral, setSemestral] = useState(t('valorTrimestre'));
  const [anual, setAnual] = useState(t('valorTrimestre'));

  function valuesTrimestral() {
    setBasic('598,80');
    setFit('930,82');
    setUltra('1.565,18');
    setTrimestral(t('valorTrimestre'));
    setSemestral(t('valorTrimestre'));
    setAnual(t('valorTrimestre'));
  }

  function valuesSemestral() {
    setBasic('1.213,44');
    setFit('1.820,16');
    setUltra('3.042,66');
    setTrimestral(t('valorSemestre'));
    setSemestral(t('valorSemestre'));
    setAnual(t('valorSemestre'));
  }

  function valuesAnual() {
    setBasic('2.043,68');
    setFit('3.075,07');
    setUltra('5.140,32');
    setTrimestral(t('valorRecorrenteAnual'));
    setSemestral(t('valorRecorrenteAnual'));
    setAnual(t('valorRecorrenteAnual'));
  }

  const bg = useColorModeValue('bgClear', 'bgDark');

  return (
    <>
      <Menu>
        <Container
          maxW={'full'}
          textAlign='center'
          pt='8'
          pb='16'
          bg={bg}>

          {/* lg */}
          <Box
            display={{
              lg: 'block',
              sm: 'none'
            }}
            justifyContent={'center'}
            margin='0 auto'
            maxW={'5xl'}
            textAlign={'center'}
            p='0'>
            <Flex
              float={{
                lg: 'right',
                sm: 'none'
              }}
              flexDir={{
                lg: 'row',
                sm: 'column'
              }}
              mb='50px'
              h='max-content'
              align='center'
              gap={'2'}>
              <Card
                titulo={'SEO Basic'}
                texto={'Para donos de negócios ou pequenos times de marketing in-house:'}
                preco={'R$' + basic}
                texto2={trimestral}
                assinar={t('assinar') + ' Basic'} />
              <Card
                titulo={'SEO Fit'}
                texto={'Para donos de negócios ou pequenos times de marketing in-house:'}
                preco={'R$' + fit}
                texto2={semestral}
                assinar={t('assinar') + ' Fit'} />
              <Card
                titulo={'SEO Ultra'}
                texto={'Para donos de negócios ou pequenos times de marketing in-house:'}
                preco={'R$' + ultra}
                texto2={anual}
                assinar={t('assinar') + ' Ultra'} />
            </Flex>
            <Tabs
              defaultIndex={0}
              variant='unstyled'
              align='center'
              mb='30px'
              border={'none'}
              mt={{
                sm: '30px'
              }}>
              <TabList
                border={'none'}
                display='block'>
                <Flex
                  flexDirection={'column'}
                  gap='6'>
                  <Heading
                    as={'h1'}>
                    {t('planosPrecos')}
                  </Heading>
                  <Text
                    as={'h2'}>
                    {t('solucao')}
                  </Text>
                  <Box
                    mt='10px'
                    mb='10px'
                    border={'1px'}
                    borderRadius='lg'
                    borderColor={'gray.300'}
                    p='2'>
                    <Text
                      fontSize={'lg'}
                      fontWeight='medium'>{t('escolhaPlano')}</Text>
                    <HStack
                      justifyContent={'center'}>
                      <Tab
                        onClick={valuesTrimestral}>
                        <ButtonPlano
                          imagem={'/images/basic.webp'}
                          nome={t('trimestral')}
                          promoSN={'hidden'}
                          promocao={'10% OFF'} />
                      </Tab>
                      <Tab
                        onClick={valuesSemestral}>
                        <ButtonPlano
                          imagem={'/images/fit.webp'}
                          nome={t('semestral')}
                          promoSN={'visible'}
                          promocao={'10% OFF'} />
                      </Tab>
                      <Tab
                        onClick={valuesAnual}>
                        <ButtonPlano
                          imagem={'/images/ultra.webp'}
                          nome={t('anual')}
                          promoSN={'visible'}
                          promocao={'20% OFF'} />
                      </Tab>
                    </HStack>
                  </Box>
                </Flex>
              </TabList>
              <TabPanels mt='40px'>
                <TabPanel p='0'>
                  <InfoPlano nivel={'/images/nivel4.webp'} />
                </TabPanel>
                <TabPanel p='0'>
                  <InfoPlano nivel={'/images/nivel4.webp'} />
                </TabPanel>
                <TabPanel p='0'>
                  <InfoPlano nivel={'/images/nivel4.webp'} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          {/* sm */}
          <Box
            display={{
              lg: 'none',
              sm: 'block'
            }}
            justifyContent={'center'}
            margin='0 auto'
            maxW={'5xl'}
            textAlign={'center'}
            p='0'>
            <Tabs
              defaultIndex={0}
              variant='unstyled'
              align='center'
              mb='30px'
              border={'none'}
              mt={{
                sm: '30px'
              }}>
              <TabList
                border={'none'}>
                <Flex
                  flexDirection={'column'}
                  gap='30px'>
                  <Heading
                    as={'h1'}>
                    {t('planosPrecos')}
                  </Heading>
                  <Text
                    as={'h2'}>
                    {t('solucao')}
                  </Text>
                  <Box
                    mt='10px'
                    mb='10px'
                    border={'1px'}
                    borderRadius='lg'
                    borderColor={'gray.300'}
                    p='2'>
                    <Text
                      fontSize={'lg'}
                      fontWeight='medium'>{t('escolhaPlano')}</Text>
                    <HStack
                      justifyContent={'center'}>
                      <Tab
                        onClick={valuesTrimestral}>
                        <ButtonPlano
                          imagem={'/images/basic.webp'}
                          nome={t('trimestral')}
                          promoSN={'hidden'}
                          promocao={'10% OFF'} />
                      </Tab>
                      <Tab
                        onClick={valuesSemestral}>
                        <ButtonPlano
                          imagem={'/images/fit.webp'}
                          nome={t('semestral')}
                          promoSN={'visible'}
                          promocao={'10% OFF'} />
                      </Tab>
                      <Tab
                        onClick={valuesAnual}>
                        <ButtonPlano
                          imagem={'/images/ultra.webp'}
                          nome={t('anual')}
                          promoSN={'visible'}
                          promocao={'20% OFF'} />
                      </Tab>
                    </HStack>
                  </Box>
                </Flex>
              </TabList>
              <Flex
                float={{
                  lg: 'right',
                  sm: 'none'
                }}
                flexDir={{
                  lg: 'row',
                  sm: 'column'
                }}
                mb='50px'
                h='max-content'
                align='center'
                gap={'2'}>
                <Card
                  titulo={'SEO Basic'}
                  texto={'Para donos de negócios ou pequenos times de marketing in-house:'}
                  preco={'R$' + basic}
                  texto2={trimestral}
                  assinar={t('assinar') + ' Basic'} />
                <Card
                  titulo={'SEO Fit'}
                  texto={'Para donos de negócios ou pequenos times de marketing in-house:'}
                  preco={'R$' + fit}
                  texto2={semestral}
                  assinar={t('assinar') + ' Fit'} />
                <Card
                  titulo={'SEO Ultra'}
                  texto={'Para donos de negócios ou pequenos times de marketing in-house:'}
                  preco={'R$' + ultra}
                  texto2={anual}
                  assinar={t('assinar') + ' Ultra'} />
              </Flex>
              <TabPanels mt='40px'>
                <TabPanel p='0'>
                  <InfoPlano nivel={'/images/nivel4.webp'} />
                </TabPanel>
                <TabPanel p='0'>
                  <InfoPlano nivel={'/images/nivel4.webp'} />
                </TabPanel>
                <TabPanel p='0'>
                  <InfoPlano nivel={'/images/nivel4.webp'} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
        <Numbers />
        <Midia />
        <Testemunho />
        <Clientes />
      </Menu >
      <Rodape recursosCompletos={undefined} ultimasPostagens={undefined} conteudoCategoria={undefined} principaisPlataformas={undefined} />
    </>
  );
}

function Card({ titulo, texto, preco, texto2, assinar }) {
  const { t } = useTranslation("common");

  return (
    <Flex
      w={{
        lg: '52',
        sm: 'auto'
      }}
      flexDirection='column'
      textAlign='initial'>
      <Flex 
        p={'4'}
        flexDirection='column'
        gap={4}>
        <Text
          fontSize={'2xl'}>
          {titulo}
        </Text>
        <Text>
          {texto}
        </Text>
        <Text
          fontSize={'3xl'}
          color='tertiary'
          fontWeight={'bold'}>
          {preco}
        </Text>
        <Text>
          {texto2}
        </Text>
      </Flex>
      <Button
        variant={'button-orange'}
        margin='0 auto'
        _hover={{
          bg: '#FFB596'
        }}>
        {assinar}
      </Button>
    </Flex>
  )
}

function ButtonPlano({ imagem, nome, promoSN, promocao }) {
  const { t } = useTranslation("common");

  return (
    <VStack>
      <Box
        h='min-content'
        bg='gray.200'
        _hover={{
          bg: 'gray.300'
        }}
        borderRadius={'5px'}
        p='2'>
        <Image
          src={imagem}
          alt={`Logo do Plano ${nome}`}
          width='auto'
          height={'auto'}
          loading='lazy' />
      </Box>
      <Text>
        {nome}
      </Text>
      <Text visibility={promoSN}>
        {promocao}
      </Text>
    </VStack>
  )
}

function InfoTabela({ infos }) {

  const { t } = useTranslation("common");
  const color = useColorModeValue('primary', 'white');
  
  return (
    <TableContainer>
      <Table
        variant='unstyled'>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>
              <Text color={color}>
                Basic
              </Text>
            </Th>
            <Th>
              <Text color={color}>
                Fit
              </Text>
            </Th>
            <Th>
              <Text color={color}>
                Ultra
              </Text>
            </Th>
          </Tr>
        </Thead>
        {infos.map((info, idx) => (
          <Tbody key={idx}>
            <Tr>
              <Td>{info.nome}</Td>
              <Td>{info.count1}</Td>
              <Td>{info.count2}</Td>
              <Td>{info.count3}</Td>
            </Tr>
          </Tbody>
        ))}
      </Table>
    </TableContainer>
  )
}

function InfoPlano({ nivel }) {
  const { t } = useTranslation("common");

  const infoPrincipal = [
    {
      nome: t('analisePalavraChave'),
      count1: '1',
      count2: '2',
      count3: '3'
    },
    {
      nome: t('analiseConcorrentes'),
      count1: '1',
      count2: '2',
      count3: '3'
    },
    {
      nome: t('analiseBacklinks'),
      count1: '1',
      count2: '2',
      count3: '3'
    },
    {
      nome: t('otimizacaoInterna'),
      count1: '1',
      count2: '2',
      count3: '3'
    },
    {
      nome: t('linksInterno'),
      count1: '1',
      count2: '2',
      count3: '3'
    },
    {
      nome: t('sinaisSociais'),
      count1: '1',
      count2: '2',
      count3: '3'
    }
  ]

  const infoPalavraChave = [
    {
      nome: t('tabelaInfo1'),
      count1: '50',
      count2: '75',
      count3: '150'
    },
    {
      nome: t('tabelaInfo2'),
      count1: '1',
      count2: '2',
      count3: '2'
    },
    {
      nome: t('tabelaInfo3'),
      count1: t('primeira'),
      count2: t('primeiraSegunda'),
      count3: t('primeiraSegunda'),
    },
    {
      nome: t('tabelaInfo4'),
      count1: t('semanal'),
      count2: t('semanal'),
      count3: t('semanal'),
    }
  ]

  const infoConcorrentes = [
    {
      nome: t('tabelaInfo5'),
      count1: '10',
      count2: '15',
      count3: '20'
    }
  ]

  const infoBacklinks = [
    {
      nome: t('tabelaInfo6'),
      count1: '900',
      count2: '1500',
      count3: '4000'
    },
    {
      nome: t('tabelaInfo7'),
      count1: t('quinzenal'),
      count2: t('quinzenal'),
      count3: t('quinzenal'),
    },
    {
      nome: t('tabelaInfo8'),
      count1: '5',
      count2: '8',
      count3: '10'
    },
    {
      nome: t('tabelaInfo9'),
      count1: t('duasVezesSemana'),
      count2: t('duasVezesSemana'),
      count3: t('diario'),
    },
    {
      nome: t('tabelaInfo10'),
      count1: '900',
      count2: '1500',
      count3: '4000'
    },
    {
      nome: t('tabelaInf11'),
      count1: t('mensal'),
      count2: t('mensal'),
      count3: t('mensal'),
    },
    {
      nome: t('tabelaInfo12'),
      count1: '500',
      count2: '1000',
      count3: '2000'
    },
    {
      nome: t('tabelaInfo13'),
      count1: t('semanal'),
      count2: t('diario'),
      count3: t('diario'),
    }
  ]

  const infoOtimizacao = [
    {
      nome: t('tabelaInfo14'),
      count1: '500',
      count2: '1500',
      count3: `${t('acima')} 3000`
    },
    {
      nome: t('tabelaInfo15'),
      count1: '500',
      count2: '1500',
      count3: `${t('acima')} 3000`
    },
    {
      nome: t('tabelaInfo16'),
      count1: t('diario'),
      count2: t('diario'),
      count3: t('diario'),
    },
    {
      nome: t('tabelaInfo17'),
      count1: t('diario'),
      count2: t('diario'),
      count3: t('diario'),
    }
  ]

  const infoLinks = [
    {
      nome: t('tabelaInfo18'),
      count1: t('diario'),
      count2: t('diario'),
      count3: t('diario'),
    }
  ]

  const infoSinais = [
    {
      nome: t('tabelaInfo19'),
      count1: '5',
      count2: '10',
      count3: '20'
    },
    {
      nome: t('tabelaInfo20'),
      count1: t('diario'),
      count2: t('diario'),
      count3: t('diario'),
    },
    {
      nome: t('tabelaInfo21'),
      count1: '1',
      count2: '2',
      count3: '4'
    },
    {
      nome: t('tabelaInfo22'),
      count1: t('diario'),
      count2: t('diario'),
      count3: t('diario'),
    }
  ]

  return (
    <Accordion
      defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              {t('principaisModulos')}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          pb={2}
          pt={0}
          px={0}>
          <InfoTabela infos={infoPrincipal} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              {t('analisePalavraChave')}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <InfoTabela infos={infoPalavraChave} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              {t('analiseConcorrentes')}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <InfoTabela infos={infoConcorrentes} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              {t('analiseBacklinks')}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <InfoTabela infos={infoBacklinks} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              {t('otimizacaoInterna')}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <InfoTabela infos={infoOtimizacao} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              {t('linksInterno')}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <InfoTabela infos={infoLinks} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              {t('sinaisSociais')}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <InfoTabela infos={infoSinais} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}