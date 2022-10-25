import {
  Box,
  Container,
  Divider,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  Heading,
  Image
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

const ListHeader = ({ children }) => {
  return (
    <Heading
      as='h5'
      fontWeight={'500'}
      fontSize={'lg'}>
      {children}
    </Heading>
  );
};

export default function Rodape({
  recursosCompletos,
  ultimasPostagens,
  conteudoCategoria,
  principaisPlataformas }) {
  const { t } = useTranslation("common");

  const linkSobre = [
    {
      nome: t('cases'),
      link: '/'
    },
    {
      nome: 'Webinar',
      link: '/'
    },
    {
      nome: t('trabalheConosco'),
      link: 'https://webpeak.zohorecruit.com/jobs/Careers'
    },
    {
      nome: t('forum'),
      link: 'https://forum.webpeak.com.br/'
    },
    {
      nome: t('consultoria'),
      link: '/'
    },
    {
      nome: t('treinamento'),
      link: '/'
    },
    {
      nome: t('politica'),
      link: 'https://kb.webpeak.com.br/portal/pt/kb/articles/pol%C3%ADtica-de-privacidade-para-webpeak'
    },
    {
      nome: t('termos'),
      link: 'https://kb.webpeak.com.br/portal/pt/kb/articles/termos-e-condi%C3%A7%C3%B5es'
    },
    {
      nome: t('sla'),
      link: 'https://kb.webpeak.com.br/portal/pt/kb/articles/sla-da-webpeak-service-level-agreement-em-quanto-tempo-a-webpeak-vai-me-atender'
    }
  ];

  const linkRedesSociais = [
    {
      nome: 'LinkedIn',
      link: 'https://www.linkedin.com/company/webpeak-brasil'
    },
    {
      nome: 'Facebook',
      link: 'https://www.facebook.com/webpeakbr/'
    },
    {
      nome: 'Twitter',
      link: 'https://twitter.com/webpeakbrasil'
    },
    {
      nome: 'Instagram',
      link: 'https://www.instagram.com/webpeakbrasil/'
    }
  ];

  const linkComparativos = [
    {
      nome: 'Semrush',
      link: '/'
    },
    {
      nome: 'Rankingcoach',
      link: '/'
    },
    {
      nome: 'Ubersuggest',
      link: '/'
    }
  ];

  const linkFerramentas = [
    {
      nome: 'Gerador de Robots',
      link: '/'
    },
    {
      nome: 'Gerador de Title',
      link: '/'
    },
    {
      nome: 'Auditor de Textos',
      link: '/'
    },
    {
      nome: 'Compressor de imagens',
      link: '/'
    },
    {
      nome: 'Conversor de imagens',
      link: '/'
    },
    {
      nome: 'Gerador UTM',
      link: '/'
    }
  ];

  return (
    <Box
      bg='gray.900'
      color='white'
      px={{
        lg: '0',
        sm: '4'
      }}>

      {/* Primeira Sessao */}
      <Container
        as={Stack}
        maxW={'5xl'}
        py={10}
        px='0'>
        <Flex
          flexDir={{
            lg: 'row',
            sm: 'column'
          }}>
          <SimpleGrid
            templateColumns={{
              lg: '1fr 1fr 1fr',
              sm: '1fr',
              md: '1fr 1fr'
            }}
            spacing={8}
            mb={8}
            mr={8}>
            <Stack align={'flex-start'}>
              <ListHeader>{t('recursosCompletos')}</ListHeader>
              {recursosCompletos}
            </Stack>
          </SimpleGrid>
          <SimpleGrid
            templateColumns={{
              lg: '1fr',
              sm: '1fr',
              md: '1fr 1fr'
            }}
            spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>{t('ultimasPostagens')}</ListHeader>
              {ultimasPostagens}
            </Stack>
          </SimpleGrid>
        </Flex>
        <br />
        <SimpleGrid
          templateColumns={{
            lg: 'repeat(3,1fr)',
            sm: '1fr',
            md: '1fr 1fr'
          }}
          spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>{t('conteudoCategoria')}</ListHeader>
            {conteudoCategoria}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{t('principaisPlataformas')}</ListHeader>
            {principaisPlataformas}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{t('principaisFerramentas')}</ListHeader>
            {linkFerramentas.map((link, idx) => (
              <Box key={idx}>
                <a
                  target={'_blank'}
                  rel='noreferrer'
                  href={link.link}>
                  {link.nome}
                </a>
              </Box>
            ))}
          </Stack>
        </SimpleGrid>
      </Container>

      {/* Primeiro Divisor */}
      <Container
        maxW='full'>
        <Divider />
      </Container>

      {/* Segunda Sessão */}
      <Container
        as={Stack}
        maxW={'5xl'}
        py={10}
        px='0'>
        <SimpleGrid
          templateColumns={{
            lg: '2fr 1fr 1fr 1fr',
            sm: '1fr',
            md: '2fr 1fr 1fr 1fr'
          }}
          spacing={8}>
          <Flex
            flexDir={'column'}
            gap='6'>
            <Link
              href='/'
              target='_blank'
              rel='noreferrer'>
              <Image
                src='/images/logo-branco.webp'
                alt='Logo Webpeak'
                width={'min-content'}
                height={'min-content'}
                loading='lazy' />
            </Link>
            <Heading
              fontSize={'md'}
              fontWeight='normal'>
              {t('ferramentaSEO')}<br />
              {t('melhoreOrganica')}
            </Heading>
            <a href='tel:+551136453623'>
              <Text>
                (11) 3645-3623
              </Text>
            </a>
            <a href="mailto:contato@webpeak.com.br?subject=Contato%20Footer%20Site">
              <Text>
                contato@webpeak.com.br
              </Text>
            </a>
            <a href="mailto:dpo@webpeak.com.br?subject=Contato%20LGPD">
              <Text>
                dpo@webpeak.com.br
              </Text>
            </a>
          </Flex>
          <Stack align={'flex-start'}>
            <ListHeader>{t('sobre')}</ListHeader>
            {linkSobre.map((link, idx) => (
              <Box key={idx}>
                <a
                  target={'_blank'}
                  rel='noreferrer'
                  href={link.link}>
                  {link.nome}
                </a>
              </Box>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{t('redesSociais')}</ListHeader>
            {linkRedesSociais.map((link, idx) => (
              <Box key={idx}>
                <a
                  target={'_blank'}
                  rel='noreferrer'
                  href={link.link}>
                  {link.nome}
                </a>
              </Box>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{t('comparativos')}</ListHeader>
            {linkComparativos.map((link, idx) => (
              <Box key={idx}>
                <a
                  target={'_blank'}
                  rel='noreferrer'
                  href={link.link}>
                  {link.nome}
                </a>
              </Box>
            ))}
          </Stack>
        </SimpleGrid>
      </Container>

      {/* Segundo Divisor */}
      <Container
        maxW='full'>
        <Divider />
      </Container>

      {/* Terceira Sessao */}
      <Container
        as={Stack}
        maxW={'5xl'}
        py={10}
        px='0'>
        <Flex
          justifyContent={'space-between'}
          flexDir={{
            lg: 'row',
            sm: 'column'
          }}
          margin={{
            lg: '0',
            sm: '0 auto'
          }}
          align='center'>
          <Link
            href='https://certificacao.gptw.info/certificated-company/22268271000165'
            target={'_blank'}>
            <Image
              src='https://global-uploads.webflow.com/5e94a806d55af47725f53001/5fb422bf9814867593d53cdd_selo-gptw.png'
              alt='Great pleace to work'
              width={'60'}
              height='auto'
              loading='lazy' />
          </Link>
          <br />
          <Link
            href='https://certificacao.gptw.info/certificated-company/22268271000165'
            target={'_blank'}
            rel='noreferrer'>
            <Image
              src='https://global-uploads.webflow.com/5e94a806d55af47725f53001/6123f301f49c958905bd9d3e_Selo%20Melhores%20GPTW%20-%20Pequenas%20Empresas%20-%202021.png'
              alt='Melhores empresas para trabalhar'
              width='48'
              height='auto'
              loading='lazy' />
          </Link>
        </Flex>
      </Container>

      {/* Terceiro Divisor */}
      <Container
        maxW='full'>
        <Divider />
      </Container>

      {/* Quarta Sessao */}
      <Container
        as={Stack}
        maxW={'5xl'}
        py={10}
        px='0'>
        <Flex
          margin={'0 auto'}
          gap='2'>
          <Text>22.268.271/0001-65 WCB SOLUCOES DE INTERNET LTDA  | </Text>
          <Link href='/'>
            <Text>{t('ferramenta')}</Text>
          </Link>
          <Text> | Brasil - {t('direitos')} </Text>
        </Flex>
      </Container>
    </Box>
  );
}