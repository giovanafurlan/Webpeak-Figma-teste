import {
    Button,
    Flex,
    Text,
    Container,
    Center,
    useColorModeValue,
    Box
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import style from 'styled-components';
import dynamic from 'next/dynamic'
const Menu = dynamic(() => import("./Menu"));
const Rodape = dynamic(() => import("./Rodape"));
const Sessao = dynamic(() => import("./Sessao"));
const BasicMeta = dynamic(() => import("./meta/BasicMeta"));
const JsonLdMeta = dynamic(() => import("./meta/JsonLdMeta"));
const TwitterCardMeta = dynamic(() => import("./meta/TwitterCardMeta"));
const OpenGraphMeta = dynamic(() => import("./meta/OpenGraphMeta"));

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

type Props = {
    imagem: string;
    title: string;
    intro: string;
    date: Date;
    slug: string;
    children: React.ReactNode;
};

export default function ParceirosLayout({
    title,
    intro,
    imagem,
    slug,
    date,
    children
}: Props) {

    const { t } = useTranslation("common");
    const bg = useColorModeValue('bgClear', 'bgDark');

    return (
        <>
            <BasicMeta
                url={`/parceiros/${slug}`}
                title={title}
                keywords={[]}
                description={intro}
            />
            <TwitterCardMeta
                url={`/parceiros/${slug}`}
                title={title}
                description={intro}
            />
            <OpenGraphMeta
                url={`/parceiros/${slug}`}
                title={title}
                description={intro}
            />
            <JsonLdMeta
                url={`/parceiros/${slug}`}
                title={title}
                keywords={[]}
                date={date}
                description={intro}
            />
            <Menu>
                <Container
                    bg={bg}
                    maxW='full'
                    py='16'>
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
                                link={'/parceiros'}
                                bgImg={'none'}
                                py='8'
                                width={'full'} />
                            <Flex
                                flexDir={'column'}
                                gap='10'>
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
                                gap='4'
                                w={{
                                    lg: 'auto',
                                    sm: '400px'
                                }}
                                margin={{
                                    lg: '0',
                                    sm: '0 auto'
                                }}>
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
                        </Flex>
                    </Center>
                </Container>
            </Menu>
            <Rodape recursosCompletos={undefined} ultimasPostagens={undefined} conteudoCategoria={undefined} principaisPlataformas={undefined} />
        </>
    )
}