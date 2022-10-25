import {
    Button,
    Center,
    Container,
    Flex,
    Heading,
    Stack,
    Text,
    useColorModeValue,
    Image
} from "@chakra-ui/react";
import useTranslation from 'next-translate/useTranslation';
import Link from "next/link";

export default function Sessao({
    alt,
    titulo,
    texto,
    imagem,
    ordem,
    fundo,
    alinhamento,
    fundoIMG,
    link,
    py,
    bgImg,
    width }) {
    const { t } = useTranslation("common");
    const color = useColorModeValue('primary', 'white');

    return (
        <Container
            textAlign={{
                lg: alinhamento,
                sm: 'center'
            }}
            bg={fundo}
            maxW='full'
            py={py}
            px='0'>
            <Center>
                <Flex
                    bgImage={fundoIMG}
                    bgRepeat={'no-repeat'}
                    margin='0 auto'
                    w={width}
                    align='center'
                    justifyContent={'space-between'}
                    flexDir={{
                        lg: 'row',
                        sm: 'column'
                    }}>
                    <Flex
                        order={ordem}
                        bg={bgImg}>
                        <Image
                            src={imagem}
                            alt={alt}
                            width='auto'
                            height='auto'
                            style={{
                                margin: '0 auto'
                            }}
                            loading='lazy' />
                    </Flex>
                    <Flex
                        mt={{
                            lg: '0',
                            sm: '10'
                        }}>
                        <Stack
                            spacing={6}
                            maxW={{
                                lg: 'lg',
                                sm: 'sm'
                            }}>
                            <Heading
                                as='h4'
                                fontSize={{
                                    lg: '5xl',
                                    md: '5xl',
                                    sm: '3xl',
                                }}>
                                <Text
                                    color={color}
                                    as={'span'}>
                                    {titulo}
                                </Text>
                            </Heading>
                            <Text
                                fontSize={{
                                    lg: 'lg',
                                    md: 'md',
                                    sm: 'md'
                                }}>
                                {texto}
                            </Text>
                            <Stack align={{
                                lg: alinhamento,
                                sm: 'center'
                            }}>
                                <Button
                                    variant={'button-orange'}
                                    _hover={{
                                        bg: '#FFB596'
                                    }}>
                                    <Link href={link}>
                                        <a>
                                            {t("comeca")}
                                        </a>
                                    </Link>
                                </Button>
                            </Stack>
                        </Stack>
                    </Flex>
                </Flex>
            </Center>
        </Container>
    )
}