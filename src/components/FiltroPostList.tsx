import {
    Container,
    useColorModeValue,
    Flex,
    Center,
    Grid,
    GridItem,
    Button
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import dynamic from 'next/dynamic'
const Menu = dynamic(() => import("./Menu"));
const Rodape = dynamic(() => import("./Rodape"));
const RecursosItem = dynamic(() => import("./RecursosItem"));
const Sessao = dynamic(() => import("./Sessao"));

export default function FiltroPostList({ recursos }) {

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
                            titulo={t('todosRecursos')}
                            texto={t('conhecaRecursos')}
                            alinhamento={'start'}
                            bgImg={'none'}
                            fundo={'none'}
                            fundoIMG={'none'}
                            imagem={'/images/recursos.webp'}
                            alt={'Recursos'}
                            link={'/recursos'}
                            ordem={{
                                lg: '1',
                                sm: '0'
                            }}
                            py={'8'}
                            width={undefined} />
                        {/* <Flex
                            align={'center'}
                            gap='4'>
                            {filtros.map((it, i) => (
                                <FiltroButton key={i} filtro={it} />
                            ))}
                        </Flex> */}
                        <Grid
                            templateColumns='repeat(3, 1fr)'
                            gap={16}>
                            {recursos?.slice(0, next).map((recurso, idx) => (
                                <GridItem
                                    key={idx}>
                                    <RecursosItem
                                        item={recurso} />
                                </GridItem>
                            ))}
                        </Grid>
                        {next < recursos?.length && (
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