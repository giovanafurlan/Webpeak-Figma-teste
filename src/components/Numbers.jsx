import {
    Box,
    Center,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    Text
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

export default function Numbers() {
    const { t } = useTranslation("common");

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
                        as={'h3'}
                        variant={'h3'}
                        color='white'
                        mb='30px'>
                        Big Numbers
                    </Heading>
                    <Grid
                        templateColumns={{
                            lg: 'repeat(5, 1fr)',
                            md: 'repeat(2, 1fr)',
                            sm: 'repeat(2, 1fr)'
                        }}
                        gap='16'>
                        <Info
                            icone={''}
                            titulo={'100'}
                            texto={t('numeroTexto')} />
                        <Info
                            icone={''}
                            titulo={'100'}
                            texto={t('numeroTexto')} />
                        <Info
                            icone={''}
                            titulo={'100'}
                            texto={t('numeroTexto')} />
                        <Info
                            icone={''}
                            titulo={'100'}
                            texto={t('numeroTexto')} />
                        <Info
                            icone={''}
                            titulo={'100'}
                            texto={t('numeroTexto')} />
                    </Grid>
                </Flex>
            </Center>
        </Container>
    )
}

function Info({ icone, titulo, texto }) {

    return (
        <GridItem >
            <Box maxW={'5xl'}>
                <Box
                    bgGradient={'linear(purple.400, purple.700)'}
                    margin='0 auto'
                    borderRadius={'50%'}
                    w='32'
                    h='32'
                    display={'inline-flex'}>
                </Box>
                <Box
                    color={'white'}
                    textAlign='center'>
                    <Text
                        fontSize={'4xl'}>
                        {titulo}
                    </Text>
                    <Text
                        fontSize={'lg'}>
                        {texto}
                    </Text>
                </Box>
            </Box>
        </GridItem>
    )
}