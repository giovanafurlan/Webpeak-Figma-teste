import {
  Center,
  Container,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic'
const Menu = dynamic(() => import ("../../components/Menu"));
const Rodape = dynamic(() => import ("../../components/Rodape"));

export default function CompreAgora() {

  const { t } = useTranslation("common");
  const bg = useColorModeValue('bgClear', 'bgDark');

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
              {t('compre')}
            </Heading>
          </Flex>
        </Center>
      </Container>
      <Rodape recursosCompletos={undefined} ultimasPostagens={undefined} conteudoCategoria={undefined} principaisPlataformas={undefined} />
    </Menu>
  );
}
