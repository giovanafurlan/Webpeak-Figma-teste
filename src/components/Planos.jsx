import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    List,
    ListItem,
    Stack,
    Text,
    useColorModeValue,
    Image
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export default function Planos() {

    const { t } = useTranslation("common");
    const bg = useColorModeValue('bgClear', 'bgDark');

    const ItensBasic = [
        {
            item: 'Analise de Palavra Chave',
            nivel: '/images/nivel1.webp',
            desativado: '',
            textoSN: 'none',
            imagemSN: 'block'
        },
        {
            item: 'Analise de Concorrentes',
            nivel: '/images/nivel1.webp',
            desativado: '',
            textoSN: 'none',
            imagemSN: 'block'
        },
        {
            item: 'Analise de Backlinks',
            nivel: '/images/nivel1.webp',
            desativado: '',
            textoSN: 'none',
            imagemSN: 'block'
        },
        {
            item: 'Otimização Interna',
            nivel: '/images/nivel1.webp',
            desativado: '',
            textoSN: 'none',
            imagemSN: 'block'
        },
        {
            item: 'Links Internos',
            nivel: '/images/nivel1.webp',
            desativado: '',
            textoSN: 'none',
            imagemSN: 'block'
        },
        {
            item: 'Sinais Sociais',
            nivel: '/images/nivel1.webp',
            desativado: '',
            textoSN: 'none',
            imagemSN: 'block'
        },
    ];

    const ItensFit = [
        {
            item: 'Analise de Palavra Chave',
            nivel: '/images/nivel3.webp',
            desativado: '',
            textoSN: 'none',
            imagemSN: 'block'
        },
        {
            item: 'Analise de Concorrentes',
            nivel: '/images/nivel3.webp',
            desativado: '',
            textoSN: 'none',
            imagemSN: 'block'
        },
        {
            item: 'Analise de Backlinks',
            nivel: '/images/nivel3.webp',
            desativado: '',
            textoSN: 'none',
            imagemSN: 'block'
        },
        {
            item: 'Otimização Interna',
            nivel: '/images/nivel3.webp',
            desativado: '',
            textoSN: 'none',
            imagemSN: 'block'
        },
        {
            item: 'Links Internos',
            nivel: '/images/nivel3.webp',
            desativado: '',
            textoSN: 'none',
            imagemSN: 'block'
        },
        {
            item: 'Sinais Sociais',
            nivel: '/images/nivel3.webp',
            desativado: '',
            textoSN: 'none',
            imagemSN: 'block'
        },
    ];

    const ItensUltra = [
        {
            item: 'Analise de Palavra Chave',
            nivel: '/images/nivel5.webp',
            desativado: '',
            textoSN: 'none',
            imagemSN: 'block'
        },
        {
            item: 'Analise de Concorrentes',
            nivel: '/images/nivel5.webp',
            desativado: '',
            textoSN: 'none',
            imagemSN: 'block'
        },
        {
            item: 'Analise de Backlinks',
            nivel: '/images/nivel5.webp',
            desativado: '',
            textoSN: 'none',
            imagemSN: 'block'
        },
        {
            item: 'Otimização Interna',
            nivel: '/images/nivel5.webp',
            desativado: '',
            textoSN: 'none',
            imagemSN: 'block'
        },
        {
            item: 'Links Internos',
            nivel: '/images/nivel5.webp',
            desativado: '',
            textoSN: 'none',
            imagemSN: 'block'
        },
        {
            item: 'Sinais Sociais',
            nivel: '/images/nivel5.webp',
            desativado: '',
            textoSN: 'none',
            imagemSN: 'block'
        },
    ];

    return (
        <Container
            maxW={'full'}
            bg={bg}
            textAlign='center'
            py='16'>
            <Flex
                flexDir={'column'}
                gap='10'>
                <Heading
                    as={'h2'}
                    variant={'h2'}>
                    {t("plataformaSEO")}
                </Heading>
                <Heading
                    as={'h3'}
                    variant={'h3'}
                    textAlign={'center'}
                    mb='10'>
                    {t("conhecaPlanos")}
                </Heading>
            </Flex>
            <Center>
                <Grid
                    templateColumns={{
                        lg: 'repeat(3, 1fr)',
                        md: 'repeat(2, 1fr)',
                        sm: 'repeat(1, 1fr)'
                    }}
                    gap='10'>
                    <Plano
                        titulo={'SEO Basic'}
                        imagem={'/images/basic.webp'}
                        texto={t('planoTexto')}
                        preco={'598,00'}
                        tipo={t('valorTrimestral')}
                        corBorda={'#E9DDFF'}
                        link={'/planos'}>
                        {ItensBasic.map((item, idx) => (
                            <ItemPlano
                                key={idx}
                                item={item.item}
                                nivel={item.nivel}
                                desativado={item.desativado}
                                textoSN={item.textoSN}
                                imagemSN={item.imagemSN} />
                        ))}
                    </Plano>
                    <Plano
                        titulo={'SEO Fit'}
                        imagem={'/images/fit.webp'}
                        texto={t('planoTexto')}
                        preco={'930,82'}
                        tipo={t('valorSemestral')}
                        corBorda={'secondary'}
                        link={'/planos'}>
                        {ItensFit.map((item, idx) => (
                            <ItemPlano
                                key={idx}
                                item={item.item}
                                nivel={item.nivel}
                                textoSN={item.textoSN}
                                imagemSN={item.imagemSN} />
                        ))}
                    </Plano>
                    <Plano
                        titulo={'SEO Ultra'}
                        imagem={'/images/ultra.webp'}
                        texto={t('planoTexto')}
                        preco={'1.565,18'}
                        tipo={t('valorAnual')}
                        corBorda={'primary'}
                        link={'/planos'}>
                        {ItensUltra.map((item, idx) => (
                            <ItemPlano
                                key={idx}
                                item={item.item}
                                nivel={item.nivel}
                                desativado={item.desativado}
                                textoSN={item.textoSN}
                                imagemSN={item.imagemSN} />
                        ))}
                    </Plano>
                </Grid>
            </Center>
        </Container>
    )
}

function ItemPlano({ item, nivel, desativado, numero, textoSN, imagemSN }) {
    return (
        <ListItem
            my='4'>
            <Flex
                align={'center'}
                justifyContent='space-between'
                mb='5px'
                gap='10'>
                <Text
                    fontSize={'sm'}
                    color={desativado}>
                    {item}
                </Text>
                <Text
                    display={textoSN}>
                    {numero}
                </Text>
                <Image
                    src={nivel}
                    style={{
                        display: imagemSN
                    }}
                    alt='Nível dos recursos do plano'
                    loading='lazy' />
            </Flex>
        </ListItem>
    )
}

function Plano({ imagem, titulo, texto, preco, tipo, corBorda, link, children }) {
    const { t } = useTranslation("common");
    const bg = useColorModeValue('white', 'blackAlpha.200');
    const color = useColorModeValue('primary', 'white');

    return (
        <GridItem
            p={4}
            bg={bg}
            maxW={'320px'}
            height='min-content'
            pb='8'
            w={'full'}
            boxShadow={'0px 4px 15px rgba(0, 0, 0, 0.07)'}
            borderRadius='3px'
            borderTop='8px'
            borderColor={corBorda}>
            <Stack
                textAlign={'center'}
                pb={6}
                align={'center'}
                gap='4'>
                <HStack spacing={'5'}>
                    <Image
                        src={imagem}
                        alt='Logo do plano'
                        width={'auto'}
                        height='auto'
                        loading='lazy' />
                    <Heading
                        as='h4'
                        fontSize={'3xl'}
                        fontWeight={'bold'}>
                        {titulo}
                    </Heading>
                </HStack>
                <Text>
                    {texto}
                </Text>
            </Stack>
            <Flex
                flexDir={'column'}
                gap='4'>
                <List
                    textAlign='initial'>
                    {children}
                </List>
                <Text
                    fontSize={'4xl'}
                    fontWeight={'bold'}
                    color={color}>
                    R$ {preco}
                </Text>
                <Text>
                    {tipo}
                </Text>
                <Button
                    w={'full'}
                    variant='button'
                    _hover={{
                        bg: '#B69DF8'
                    }}>
                    <Link href={link}>
                        <a>
                            {t("saibaMais")}
                        </a>
                    </Link>
                </Button>
            </Flex>
        </GridItem>
    );
}