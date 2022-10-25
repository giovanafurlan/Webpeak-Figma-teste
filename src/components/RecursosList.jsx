import {
    Container,
    useColorModeValue,
    Flex,
    Center,
    Box,
} from '@chakra-ui/react';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic'
const Menu = dynamic(() => import ("./Menu"));
const Rodape = dynamic(() => import ("./Rodape"));
const Sessao = dynamic(() => import ("./Sessao"));
const FiltroButton = dynamic(() => import ("./FiltroButton"));
const RecursosItem = dynamic(() => import ("./RecursosItem"));

export default function RecursosList({ recursos }) {

    const { t } = useTranslation("common");
    const bg = useColorModeValue('bgClear', 'bgDark');

    const [item, setItem] = useState(recursos);

    const menuItems = [...new Set(recursos.flatMap((Val) => Val.filtros))];

    const filterItem = (curcat) => {
        const newItem = recursos.filter((newVal) => {
            return newVal.filtros.toString() === curcat;
        });
        setItem(newItem);
    };

    return (
        <Menu>
            <Container
                maxW={'full'}
                bg={bg}
                py='16'
                textAlign={'center'}>
                <Center>
                    <Box
                        w={'5xl'}
                        flexDir='column'>
                        <Sessao
                            titulo={t('todosRecursos')}
                            texto={t('conhecaRecursos')}
                            alinhamento={'start'}
                            bgImg={'none'}
                            fundo={'none'}
                            fundoIMG={'none'}
                            imagem={'/images/recursos.webp'}
                            link={'/recursos'}
                            ordem={{
                                lg: '1',
                                sm: '0'
                            }}
                            py={'8'}
                            width={'full'} />
                        <FiltroButton
                            filterItem={filterItem}
                            menuItems={menuItems} />
                        <RecursosItem item={item} />
                    </Box>
                </Center>
            </Container>
            <Rodape />
        </Menu>
    );
}