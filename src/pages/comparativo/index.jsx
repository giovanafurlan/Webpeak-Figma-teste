import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  List,
  ListItem,
  Text,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic'
const Menu = dynamic(() => import("../../components/Menu"));
const Rodape = dynamic(() => import("../../components/Rodape"));
const Testemunho = dynamic(() => import("../../components/Testemunho"));
const Midia = dynamic(() => import("../../components/Midia"));

export default function Comparativo() {

  const { t } = useTranslation("common");
  const bg = useColorModeValue('bgClear', 'bgDark');
  const bgSN = useColorModeValue('white', 'blackAlpha.200');

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
              {t('compartivoSEMRush')}
            </Heading>
            <Divider borderColor={'primary'} />
            <Flex
              gap='4'
              flexDir={{
                lg: 'row',
                sm: 'column'
              }}>
              <Flex
                textAlign={'initial'}
                flexDir='column'
                gap={'10'}>
                <Heading
                  as='h2'
                  fontWeight={'normal'}
                  textAlign={'initial'}>
                  {t('melhorFerramentaSEO')}
                </Heading>
                <Heading
                  as='h3'
                  fontSize={'lg'}
                  fontWeight='normal'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ut quas amet laborum accusamus optio commodi temporibus modi atque odio quaerat nesciunt
                </Heading>
              </Flex>
              <Image
                src='gibbresh.png'
                fallbackSrc='https://via.placeholder.com/500X300'
                alt='' />
            </Flex>
            <Heading
              as='h3'
              variant={'h3'}
              mb='10'>
              {t('vejaComparativo')}
            </Heading>
            <Grids
              titulo={t('planosPrecos')}
              subtitulo={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}>
              <Card
                bgSN={bgSN}
                shadowSN={'shadow'}
                titulo={t('pagamentoReal')}
                display={'inline-flex'}
                imagem={'/images/logo-webpeak.webp'}
                extraVerde={t('opcoesPagamento')}
                extra={'+ 22 tools + 3 apps'}
                tituloPlano1={'Lite '}
                tituloPlano2={'Basic'}
                tituloPlano3={'Fit'}
                tituloPlano4={'Ultra'}
                precoPlano1={t('precoPlano1')}
                precoPlano2={t('precoPlano2')}
                precoPlano3={t('precoPlano3')}
                precoPlano4={t('precoPlano4')} />
              <Card
                titulo={t("pagamentoReal")}
                display={'inline-flex'}
                imagem={'/images/logo-semrush.webp'}
                tituloPlano1={'Pro'}
                tituloPlano2={'Guru'}
                tituloPlano3={'Business'}
                precoPlano1={t('precoPlano5')}
                precoPlano2={t('precoPlano6')}
                precoPlano3={t('precoPlano7')} />
            </Grids>
            <Grids
              titulo={t('testeGratis')}>
              <Card
                bgSN={bgSN}
                display={'none'}
                shadowSN={'shadow'}
                conteudo={t('projetoDemonstrativo')}
                imagem={'/images/right.webp'} />
              <Card
                conteudo={t('disponibilza')}
                imagem={'/images/right.webp'}
                extraVermelho={t('necessarioCartao')} />
            </Grids>
            <Grids
              titulo={t('usuarios')}>
              <Card
                bgSN={bgSN}
                shadowSN={'shadow'}>
                <Text
                  fontSize={'lg'}
                  fontWeight='bold'
                  color='green'>
                  {t('ilimitado')}
                </Text>
              </Card>
              <Card
                conteudo={t('precoUsuario')} />
            </Grids>
            <Line />
            <Grids
              titulo={t('pesquisaPalavraChave')}
              subtitulo={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}>
              <Card
                bgSN={bgSN}
                shadowSN={'shadow'}
                conteudo={t('analises')}>
                <Text
                  fontSize={'lg'}
                  fontWeight='bold'
                  color='green'>
                  {t('atualizaPesquisa')}
                </Text>
              </Card>
              <Card>
                <Box fontSize={'lg'}>
                  <Text>{t('atualizaMensal')}</Text>
                  <Text>Clickstream</Text>
                </Box>
              </Card>
            </Grids>
            <Grids
              titulo={'Rank Checker'}>
              <Card
                bgSN={bgSN}
                shadowSN={'shadow'}
                imagem={'/images/right.webp'}
                display={'none'} />
              <Card
                imagem={'/images/right.webp'}
                display={'none'} />
            </Grids>
            <Grids
              titulo={'Local Rank Checker'}>
              <Card
                bgSN={bgSN}
                shadowSN={'shadow'}
                imagem={'/images/right.webp'}
                display={'none'} />
              <Card
                imagem={'/images/right.webp'}
                display={'none'} />
            </Grids>
            <Grids
              titulo={t('historicoRank')}>
              <Card
                bgSN={bgSN}
                shadowSN={'shadow'}
                imagem={'/images/right.webp'}
                display={'none'} />
              <Card
                imagem={'/images/right.webp'}
                display={'none'} />
            </Grids>
            <Grids
              titulo={'Devices Rank'}>
              <Card
                bgSN={bgSN}
                shadowSN={'shadow'}
                imagem={'/images/right.webp'}
                display={'none'} />
              <Card
                imagem={'/images/right.webp'}
                display={'none'} />
            </Grids>
            <Line />
            <Grids
              titulo={t('auditoriaSEO')}
              subtitulo='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'>
              <Card
                bgSN={bgSN}
                shadowSN={'shadow'}
                imagem={'/images/right.webp'}
                display={'none'} />
              <Card
                imagem={'/images/right.webp'}
                display={'none'} />
            </Grids>
            <Grids
              titulo={t('auditoriaTecnica')}>
              <Card
                bgSN={bgSN}
                shadowSN={'shadow'}
                imagem={'/images/right.webp'}
                display={'none'} />
              <Card
                imagem={'/images/right.webp'}
                display={'none'} />
            </Grids>
            <Grids
              titulo={t('integracoesGoogle')}
              subtitulo='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'>
              <Card
                bgSN={bgSN}
                shadowSN={'shadow'}
                imagem={'/images/right.webp'}
                display={'none'}>
                <List>
                  <ListItem>
                    Google Analytics
                  </ListItem>
                  <ListItem>
                    Google Ads
                  </ListItem>
                  <ListItem>
                    Google Search Console
                  </ListItem>
                  <ListItem>
                    {t('googleMeuNegocio')}
                  </ListItem>
                </List>
              </Card>
              <Card
                imagem={'/images/right.webp'}
                display={'none'}>
                <List>
                  <ListItem>
                    Google Analytics
                  </ListItem>
                  <ListItem>
                    Google Ads
                  </ListItem>
                  <ListItem>
                    Google Search Console
                  </ListItem>
                  <ListItem>
                    {t('googleMeuNegocio')}
                  </ListItem>
                </List>
              </Card>
            </Grids>
            <Grids
              titulo={'Sitemap'}
              subtitulo={t('geracaoEnvio')}>
              <Card
                bgSN={bgSN}
                shadowSN={'shadow'}
                imagem={'/images/right.webp'}
                display={'none'} />
              <Card
                imagem={'/images/error.webp'}
                display={'none'} />
            </Grids>
            <Line />
            <Grids
              titulo={t('qualidadeBacklinks')}
              subtitulo={t('referenciasSite')}>
              <Card
                bgSN={bgSN}
                shadowSN={'shadow'}
                imagem={'/images/right.webp'}
                display={'none'} />
              <Card
                imagem={'/images/error.webp'}
                display={'none'} />
            </Grids>
            <Grids
              titulo={t('analiseMajestic')}
              subtitulo={t('rastreamento')}>
              <Card
                bgSN={bgSN}
                shadowSN={'shadow'}
                imagem={'/images/right.webp'}
                display={'none'} />
              <Card
                imagem={'/images/error.webp'}
                display={'none'} />
            </Grids>
            <Grids
              titulo={t('rejeicaoLinks')}
              subtitulo={t('ferramentaRejeicaoLinks')}>
              <Card
                bgSN={bgSN}
                shadowSN={'shadow'}
                imagem={'/images/right.webp'}
                display={'none'} />
              <Card
                imagem={'/images/error.webp'}
                display={'none'} />
            </Grids>
            <Grids
              titulo={t('submissaoLinks')}
              subtitulo={t('locaisSubmissaoLinks')}>
              <Card
                bgSN={bgSN}
                shadowSN={'shadow'}
                imagem={'/images/right.webp'}
                display={'none'} />
              <Card
                imagem={'/images/error.webp'}
                display={'none'} />
            </Grids>
            <Grids
              titulo={t('submissaoLinks')}
              subtitulo={t('formasDePagamento')}>
              <Card
                bgSN={bgSN}
                shadowSN={'shadow'}
                imagem={'/images/right.webp'}
                display={'none'}>
                <Text
                  fontSize={'lg'}
                  fontWeight='bold'
                  color='green'>
                  {t('semCustoAdicional')}
                </Text>
                <List>
                  <ListItem>
                    {t('metricasDominio')}
                  </ListItem>
                  <ListItem>
                    {t('espiaoPalavraChave')}
                  </ListItem>
                  <ListItem>
                    {t('competidoresPerigosos')}
                  </ListItem>
                  <ListItem>
                    {t('backlinksConcorrentes')}
                  </ListItem>
                  <ListItem>
                    {t('concorrenteOverview')}
                  </ListItem>
                  <ListItem>
                    {t('citacoesSociais')}
                  </ListItem>
                  <ListItem>
                    {t('trafegoEstimado')}
                  </ListItem>
                </List>
              </Card>
              <Card
                imagem={'/images/error.webp'}
                display={'none'}>
                <Text
                  fontSize={'lg'}
                  fontWeight='bold'>
                  {t('semCustoAdicional')}
                </Text>
                <List>
                  <ListItem>
                    Traffic Analyzer
                  </ListItem>
                  <ListItem>
                    Keywords by Traffic
                  </ListItem>
                  <ListItem>
                    Top Pages by Traffic
                  </ListItem>
                  <ListItem>
                    Similar Websites
                  </ListItem>
                </List>
              </Card>
            </Grids>
            <Line />
            <Grids
              titulo={t('demonstracaoInterativa')}
              subtitulo={t('tourGuiada')}>
              <Card
                bgSN={bgSN}
                shadowSN={'shadow'}
                imagem={'/images/right.webp'}
                display={'none'} />
              <Card
                imagem={'/images/error.webp'}
                display={'none'} />
            </Grids>
          </Flex>
        </Center>
      </Container>
      <Testemunho />
      <Midia />
      <Rodape />
    </Menu>
  );
}

function Grids({
  titulo,
  subtitulo,
  children
}) {
  return (
    <>
      <Box
        my='-10'>
        <Divider
          borderColor='primary'
          variant='dashed' />
      </Box>
      <Grid
        templateColumns={{
          lg: 'repeat(3, 1fr)',
        }}
        display={{
          lg: 'grid',
          sm: 'none'
        }}>
        <Flex
          textAlign={'initial'}
          flexDir='column'
          gap={'2'}>
          <Heading
            as='h4'
            variant={'h4'}
            mt='4'>
            {titulo}
          </Heading>
          <Text>
            {subtitulo}
          </Text>
        </Flex>
        {children}
      </Grid>

      <Box
        display={{
          lg: 'none',
          sm: 'inline-block'
        }}>
        <Heading
          as='h4'
          variant={'h4'}
          mt='4'>
          {titulo}
        </Heading>
        <Text>
          {subtitulo}
        </Text>
        <Grid
          templateColumns={{
            sm: 'repeat(3, 1fr)',
          }}>
          <Flex
            textAlign={'initial'}
            flexDir='column'
            gap={'2'}>
          </Flex>
          {children}
        </Grid>
      </Box>
    </>
  )
}

function Card({
  imagem,
  bgSN, shadowSN,
  titulo,
  conteudo,
  display,
  tituloPlano1,
  tituloPlano2,
  tituloPlano3,
  tituloPlano4,
  precoPlano1,
  precoPlano2,
  precoPlano3,
  precoPlano4,
  extraVerde,
  extraVermelho,
  extra,
  children
}) {
  return (
    <Flex
      textAlign={'initial'}
      flexDir='column'
      gap={'4'}
      bg={bgSN}
      boxShadow={shadowSN}
      p='6'
      minW={{
        lg: '80',
        sm: '52'
      }}>
      <Image
        src={imagem}
        w='auto'
        h='auto'
        alt=''
        loading='lazy'
        margin={'0 auto'} />
      <Heading
        as='h4'
        fontSize={'x-large'}
        textAlign='center'>
        {titulo}
      </Heading>
      {children}
      <Text fontSize={'lg'}>
        {conteudo}
      </Text>
      <Grid
        templateColumns={{
          lg: 'repeat(2, 1fr)'
        }}
        gap='2'
        display={display}>
        <GridItem
          fontWeight={'bold'}>
          <Text>
            {tituloPlano1}
          </Text>
          <Text>
            {tituloPlano2}
          </Text>
          <Text>
            {tituloPlano3}
          </Text>
          <Text>
            {tituloPlano4}
          </Text>
        </GridItem>
        <GridItem>
          <Text>
            {precoPlano1}
          </Text>
          <Text>
            {precoPlano2}
          </Text>
          <Text>
            {precoPlano3}
          </Text>
          <Text>
            {precoPlano4}
          </Text>
        </GridItem>
      </Grid>
      <Box
        display={display}
        flexDir='column'
        fontSize={'lg'}
        fontWeight={'bold'}>
        <Text
          color='green'
          variant='text'>
          {extraVerde}
        </Text>
        <Text
          color='red'
          fontWeight={'bold'}
          variant='text'>
          {extraVermelho}
        </Text>
        <Text variant='text'>
          {extra}
        </Text>
      </Box>
    </Flex>
  )
}

function Line() {
  const { t } = useTranslation("common");

  return (
    <Box
      w='full'
      bg='primary'
      p='4'
      mt='-10'
      mx='0'>
      <Text
        fontSize={'2xl'}
        color='white'>
        {t('funcionalidadesSEO')}
      </Text>
    </Box>
  )
}