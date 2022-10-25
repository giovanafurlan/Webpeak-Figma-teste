import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image
} from '@chakra-ui/react';
import { GrClose } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic'
import Link from 'next/link';
const DarkLight = dynamic(() => import ("./DarkLight"));
const Language = dynamic(() => import ("./Language"));

export default function Menu({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logos = useColorModeValue('/images/logo-preto.png', '/images/logo-branco.webp');
  const cor2 = useColorModeValue('white', 'gray.900');

  const { t } = useTranslation("common");

  const Links = [
    {
      caminho: '/recursos',
      titulo: t("recursos")
    },
    {
      caminho: '/planos',
      titulo: t("planos")
    },
    {
      caminho: '/parceiros',
      titulo: t("parceiros")
    },
    {
      caminho: '/webpeak',
      titulo: t("aWebpeak")
    },
    {
      caminho: '/blogs',
      titulo: 'Blog'
    },
    {
      caminho: '/comparativo',
      titulo: 'Comparativo'
    }
  ];

  const bg = useColorModeValue('white', 'gray.900');
  const color = useColorModeValue('gray.700', 'white');

  return (
    <Box>
      <Box
        pos='fixed'
        zIndex={1}
        w={'full'}
        background={cor2}
        height='70px'>
        <Flex
          h={16}
          margin='0 auto'
          w={{
            lg: '5xl',
            sm: 'auto'
          }}
          px={{
            lg: '0',
            sm: '2'
          }}
          align='center'
          justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <GrClose style={{marginLeft: 12}}/> : <FiMenu style={{marginLeft: 12}}/>}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Link href={'/'}>
            <a>
              <Image
                src={logos}
                alt="Ferramenta de SEO WebPeak"
                width={'36'}
                height={'10'}
                loading='lazy' />
            </a>
          </Link>
          <HStack
            as={'nav'}
            spacing={6}
            display={{ base: 'none', md: 'flex' }}>
            {Links.map((link, idx) => (
              <NavLink
                key={idx}
                caminho={link.caminho}>
                <a>{link.titulo}</a>
              </NavLink>
            ))}
            <NavLink caminho={'/compre'}>
              <Button
                variant={'button-orange'}
                _hover={{
                  bg: '#FFB596'
                }}>
                {t("compre")}
              </Button>
            </NavLink>
          </HStack>
          <Flex
            gap={'5'}
            justifyContent={'center'}>
            <Language />
            <DarkLight />
          </Flex>
        </Flex>
        {isOpen ? (
          <Box
            pos='fixed'
            display={{
              lg: 'none',
              md: 'none',
              sm: 'flex'
            }}
            bg={bg}
            color={color}
            w='full'
            px='4'
            pb='6'
            borderRadius={'lg'}
            zIndex={1}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link, idx) => (
                <NavLink
                  key={idx}
                  caminho={link.caminho}>
                  {link.titulo}
                </NavLink>
              ))}
              <NavLink caminho={'/compre'}>
                <Button
                  variant={'button-orange'}
                  _hover={{
                    bg: '#FFB596'
                  }}>
                  {t("compre")}
                </Button>
              </NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box pt={'60px'}>{children}</Box>
    </Box>
  );
}

function NavLink({ children, caminho }) {
  const cor = useColorModeValue('gray.400', 'gray.600');

  return (
    <Box
      fontWeight={'500'}
      fontSize='14px'
      _hover={{
        textDecoration: 'none',
        color: cor
      }}
      cursor='pointer'>
      <Link
        href={caminho}>
        {children}
      </Link>
    </Box>
  )
}