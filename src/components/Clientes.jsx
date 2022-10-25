import {
    Box,
    Center,
    Container,
    Flex,
    GridItem,
    Grid,
    Heading,
    Image
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

export default function Clientes() {
    
    const { t } = useTranslation("common");
    
    const clientes = [
        {
            alt: 'Tray - Ferramenta de SEO WebPeak',
            logo: '/images/logo-tray.webp'
        },
        {
            alt: 'Loja Integrada - Ferramenta de SEO WebPeak',
            logo: '/images/logo-loja-integrada.webp'
        },
        {
            alt: 'Woocommerce - Ferramenta de SEO WebPeak',
            logo: '/images/logo-woocommerce.webp'
        },
        {
            alt: 'Shopify - Ferramenta de SEO WebPeak',
            logo: '/images/logo-shopify.webp'
        },
        {
            alt: 'Nuvemshop - Ferramenta de SEO WebPeak',
            logo: '/images/logo-nuvemshop.webp'
        },
        {
            alt: 'Vtex - Ferramenta de SEO WebPeak',
            logo: '/images/logo-vtex.webp'
        },
    ]

    return (
        <Container
            bgGradient={'linear-gradient(180deg, #5B1AB2 0%, #300964 100%)'}
            maxW='full'
            textAlign={'center'}
            py='16'>
            <Center>
                <Flex
                    flexDir={'column'}
                    gap='10'
                    w={'5xl'}>
                    <Heading
                        as={'h2'}
                        fontSize='3xl'
                        color='white'
                        fontWeight={'normal'}
                        textAlign={'center'}
                        px={{
                          lg: '0',
                          sm: '2'
                        }}>
                        {t("plataformaMelhores")}
                    </Heading>
                    <Box
                        w={{
                            lg: 'auto',
                            sm: '100vw'
                        }}>
                        <Grid
                            templateColumns={{
                                lg: 'repeat(6, 1fr)',
                                sm: 'repeat(3, 1fr)'
                            }}
                            gap={3}
                            px={{
                                lg: '0',
                                sm: '4'
                              }}>
                            {clientes.map((cliente, idx) => (
                                <GridItem
                                    key={idx}>
                                    <Image
                                        src={cliente.logo}
                                        alt={cliente.alt}
                                        width={'auto'}
                                        height='auto'
                                        loading='lazy' />
                                </GridItem>
                            ))}
                        </Grid>
                    </Box>
                </Flex>
            </Center>
        </Container>
    )
}