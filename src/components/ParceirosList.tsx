import {
    Container,
    useColorModeValue,
    Flex,
    Center,
    Grid,
    GridItem,
    Button
} from '@chakra-ui/react';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic'
import { ParceirosContent } from '../lib/parceiros';
const Menu = dynamic(() => import("./Menu"));
const Rodape = dynamic(() => import("./Rodape"));
const Sessao = dynamic(() => import("./Sessao"));
const ParceirosItem = dynamic(() => import("./ParceirosItem"));

type Props = {
    parceiros: ParceirosContent[];
};

export default function ParceirosList({ parceiros }: Props) {

    const { t } = useTranslation("common");
    const bg = useColorModeValue('bgClear', 'bgDark');

    const imagePerRow = 3;

    const [next, setNext] = useState(imagePerRow);

    const handleMoreImage = () => {
        setNext(next + imagePerRow);
    };

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
                        <Sessao
                            titulo={t('todosParceiros')}
                            texto={t('conhecaParceiros')}
                            alinhamento={'start'}
                            bgImg={'none'}
                            fundo={'none'}
                            fundoIMG={'none'}
                            imagem={'/images/sinais-sociais.webp'}
                            alt={'Parceiros'}
                            link={''}
                            ordem={{
                                lg: '1',
                                sm: '0'
                            }}
                            py={'8'}
                            width={'full'} />
                        <Grid
                            templateColumns={{
                                lg: 'repeat(3, 1fr)',
                                sm: 'repeat(2, 1fr)'
                            }}
                            gap={{
                                lg: '10',
                                sm: '4'
                            }}>
                            {parceiros?.slice(0, next).map((parceiro, idx) => (
                                <GridItem
                                    key={idx}>
                                    <ParceirosItem
                                        parceiros={parceiro} />
                                </GridItem>
                            ))}
                        </Grid>
                        {next < parceiros?.length && (
                            <Flex
                                justifyContent={'center'}
                                w='full'>
                                <Button
                                    onClick={handleMoreImage}
                                    variant='button'
                                    _hover={{
                                        bg: '#B69DF8'
                                    }}>
                                    {t('carrega')}
                                </Button>
                            </Flex>
                        )}
                    </Flex>
                </Center>
            </Container>
            <Rodape recursosCompletos={undefined} ultimasPostagens={undefined} conteudoCategoria={undefined} principaisPlataformas={undefined} />
        </Menu>
    );
}