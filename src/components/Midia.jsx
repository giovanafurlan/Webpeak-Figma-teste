import {
    Box,
    Center,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    Text,
    useColorModeValue,
    Image
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import style from 'styled-components';

const Arrow = style.div`
.swiper-button-next,
.swiper-button-prev {
    color: #5B1AB2;
    fill: black;
    stroke: black;
}
`

export default function Midia() {

    const { t } = useTranslation("common");

    const testemunhos = [
        {
            nome: 'Pequenas empresas e grandes negócios',
            imagem: '/images/testemunho.webp',
            alt: 'Pequenas Empresas e Grandes Negócios - Ferramenta de SEO WebPeak',
            texto: '“Plataforma que ajuda empreendedores a utilizarem SEO para melhorar o posicionamento dos seus negócios em sites de busca”'
        },
        {
            nome: 'Pequenas empresas e grandes negócios',
            imagem: '/images/testemunho.webp',
            alt: 'Pequenas Empresas e Grandes Negócios - Ferramenta de SEO WebPeak',
            texto: '“Plataforma que ajuda empreendedores a utilizarem SEO para melhorar o posicionamento dos seus negócios em sites de busca”'
        },
        {
            nome: 'Pequenas empresas e grandes negócios',
            imagem: '/images/testemunho.webp',
            alt: 'Pequenas Empresas e Grandes Negócios - Ferramenta de SEO WebPeak',
            texto: '“Plataforma que ajuda empreendedores a utilizarem SEO para melhorar o posicionamento dos seus negócios em sites de busca”'
        }
    ]

    return (
        <Container
            maxW={'full'}
            textAlign='center'
            py='16'>
            <Center>
                <Flex
                    maxW={'5xl'}
                    flexDir={'column'}
                    gap='10'>
                    <Heading
                        as={'h4'}
                        fontSize='3xl'
                        fontWeight='bold'>
                        {t("midia")}
                    </Heading>
                    <Grid
                        templateColumns={{
                            lg: 'repeat(3, 1fr)',
                            md: 'repeat(2, 1fr)',
                            sm: 'repeat(1, 1fr)'
                        }}
                        gap='10'
                        display={{
                            lg: 'flex',
                            sm: 'none'
                        }}>
                        {testemunhos.map((testemunho, idx) => (
                            <Info
                                key={idx}
                                imagem={testemunho.imagem}
                                texto={testemunho.texto}
                                alt={testemunho.nome} />
                        ))}
                    </Grid>
                    <Arrow>
                        <Box
                            display={{
                                lg: 'none',
                                sm: 'box'
                            }}
                            w={'100vw'}>
                            <Swiper
                                rewind={true}
                                navigation={true}
                                modules={[Navigation]}
                                style={{
                                    zIndex: '0'
                                }}>
                                {testemunhos.map((testemunho, idx) => (
                                    <SwiperSlide key={idx}>
                                        <Info
                                            imagem={testemunho.imagem}
                                            texto={testemunho.texto}
                                            alt={testemunho.nome} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>
                    </Arrow>
                </Flex>
            </Center>
        </Container>
    )
}

function Info({ imagem, texto, alt }) {
    const { t } = useTranslation("common");

    const color = useColorModeValue('gray.800', 'white');

    return (
        <GridItem
            color={color}
            bg={'bg'}
            rounded={'md'}
            px={{
                lg: '0',
                sm: '10'
            }}>
            <Center py='8'>
                <Image
                    src={imagem}
                    width='80%'
                    height='20%'
                    alt={alt}
                    loading='lazy' />
            </Center>
            <Text>
                {texto}
            </Text>
        </GridItem>
    );
}