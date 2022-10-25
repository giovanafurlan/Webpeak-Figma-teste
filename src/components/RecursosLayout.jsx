import {
    Button,
    Flex,
    Heading,
    Text,
    Container,
    Center,
    useColorModeValue,
    Box
} from '@chakra-ui/react';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import style from 'styled-components';
import dynamic from 'next/dynamic'
const Menu = dynamic(() => import ("./Menu"));
const Rodape = dynamic(() => import ("./Rodape"));
const Sessao = dynamic(() => import ("./Sessao"));
const RecursosItem = dynamic(() => import ("./RecursosItem"));
const BasicMeta = dynamic(() => import ("./meta/BasicMeta"));
const JsonLdMeta = dynamic(() => import ("./meta/JsonLdMeta"));
const TwitterCardMeta = dynamic(() => import ("./meta/TwitterCardMeta"));
const OpenGraphMeta = dynamic(() => import ("./meta/OpenGraphMeta"));

const Format = style.div`
    * {
        all: revert;
    }

    p{
        margin: 0!important;
    }

    h1, h2, h3, h4, h5, h6, strong, span{
        color: #5B1AB2;
        margin-bottom: 10px;
        margin-top: 0;
    }

    ul {
        list-style: none
    }

    li::before {
        content: "•"; 
        color: #5B1AB2;
        display: inline-block; 
        width: 1em;
        margin-left: -1em
    }

    img{
        min-width: 500px;
        max-width: 500px;
    }
    
    column-count: 2;    

    @media(min-width: 320px) and (max-width: 1000px){
        column-count: 1;    
        max-width: 350px;
        margin: 0 auto;

        img{
            min-width: 320px;
            max-width: 320px;
        }
    }
`

export default function RecursosLayout({
    recurso,
    imagem,
    title,
    intro,
    slug,
    date,
    recursos,
    children
}) {

    const keywords = [{ keywords: 'keywords' }];

    const { t } = useTranslation("common");
    const bg = useColorModeValue('bgClear', 'bgDark');

    const [item, setItem] = useState(recurso);
    const [items, setItems] = useState(recursos);

    const filtro = item.filtros.toString();

    const filterItems = () => {
        const newItems = recursos.filter((newVal) => {
            return newVal.filtros.toString() === filtro;
        });
        setItems(newItems);
    };

    return (
        <>
            <BasicMeta
                url={`/recursos/${slug}`}
                title={title}
                keywords={keywords}
                description={intro}
            />
            <TwitterCardMeta
                url={`/recursos/${slug}`}
                title={title}
                description={intro}
            />
            <OpenGraphMeta
                url={`/recursos/${slug}`}
                title={title}
                description={intro}
            />
            <JsonLdMeta
                url={`/recursos/${slug}`}
                title={title}
                keywords={keywords}
                date={date}
                description={intro}
            />
            <Menu>
                <Container
                    bg={bg}
                    maxW='full'
                    py='16'
                    onLoad={filterItems}>
                    <Center>
                        <Flex
                            flexDir={'column'}
                            gap='10'
                            w={'5xl'}>
                            <Sessao
                                titulo={title}
                                texto={intro}
                                imagem={imagem}
                                alt={`${title} Ferramenta de SEO Webpeak`}
                                ordem={{
                                    lg: '1',
                                    sm: '0'
                                }}
                                fundo={'none'}
                                alinhamento={'start'}
                                fundoIMG={'none'}
                                bgImg={'none'}
                                link={'/parceiros'}
                                py='8' 
                                width={'full'}/>
                            <Flex
                                flexDir={'column'}
                                gap='10'
                                mt='10'>
                                {/* {filtros.map((it, i) => (
                                    <Box key={i}>
                                        <Filtro filtro={getFiltro(it)} />
                                    </Box>
                                ))} */}
                                {/* <Heading
                                    as='h2'
                                    variant={'h2'}
                                    my='2'>
                                    {title}
                                </Heading> */}
                                <Format>
                                    <Box>
                                        {children}
                                    </Box>
                                </Format>
                            </Flex>
                            <Flex
                                bg='primary'
                                borderRadius={'9px'}
                                p='10'
                                my='10'
                                textAlign={'center'}
                                flexDir='column'
                                maxW={{
                                    lg: 'full',
                                    sm: 'sm'
                                }}
                                margin={{
                                    lg: '0',
                                    sm: '0 auto'
                                }}
                                gap='4'>
                                <Text
                                    color='white'
                                    fontSize={'lg'}>
                                    {t('analise')}
                                </Text>
                                <Button
                                    variant={'button-orange'}
                                    margin={'0 auto'}
                                    _hover={{
                                        bg: '#FFB596'
                                    }}>
                                    {t('comeca')}
                                </Button>
                            </Flex>
                            <Flex
                                flexDir={'column'}
                                gap='10'
                                textAlign={'center'}
                                borderRadius='9px'
                                p='4'>
                                <Heading
                                as='h3'
                                variant={'h2'}>
                                    Recursos relacionados
                                </Heading>
                                <RecursosItem item={items} />
                            </Flex>
                        </Flex>
                    </Center>
                </Container>
                <Rodape />
            </Menu>
        </>
    )
}
