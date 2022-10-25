import {
    Box,
    Flex,
    Grid,
    Heading,
    Icon,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation';
import { CgSearchFound } from 'react-icons/cg';
import Link from 'next/link';
import i18nConfig from '../../i18n.json';

export default function RecursosItem({ item }) {

    const { locales, defaultLocale } = i18nConfig;
    const { t, lang } = useTranslation('common');

    const bg = useColorModeValue('bgClearMedium', 'bgDarkMedium');
    const color = useColorModeValue('primary', 'white');

    return (
        <Grid
            templateColumns={{
                lg: 'repeat(3, 1fr)',
                sm: 'repeat(2, 1fr)'
            }}
            gap={{
                lg: '10',
                sm: '4'
            }}>
            {item.map((recurso, idx) => {
                return (
                    <Box key={idx}>
                        {locales.map(lng => {
                            if (lng === lang) return null;
                            return (
                                <Link
                                    key={lng}
                                    href={"/recursos/" + recurso.slug}
                                    locale={recurso.language}>
                                    <a>
                                        <Flex
                                            flexDir={'column'}
                                            gap='6'
                                            py='10'
                                            px='4'
                                            w={'auto'}
                                            h='auto'
                                            align='center'
                                            boxShadow={'0px 4px 15px rgba(0, 0, 0, 0.07)'}
                                            borderRadius='9px'
                                            backgroundColor={bg}
                                            cursor='pointer'
                                            _hover={{
                                                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.30)'
                                            }}>
                                            <Flex
                                                bgGradient={'linear-gradient(#5B1AB2, purple.700)'}
                                                margin='0 auto'
                                                w={'min'}
                                                p='4'
                                                borderRadius={'100%'}
                                                align='center'
                                                color={'white'}>
                                                <Icon
                                                    as={CgSearchFound}
                                                    h={'8'}
                                                    w={'8'}
                                                    alignSelf={'center'}
                                                    color='white' />
                                            </Flex>
                                            <Heading
                                                as={'h3'}
                                                variant='h3'>
                                                {recurso.title}
                                            </Heading>
                                            <Text>{recurso.intro}</Text>
                                            <Text
                                                width='full'
                                                color={color}>
                                                {t("vejaMais")}
                                            </Text>
                                        </Flex>
                                    </a>
                                </Link>
                            );
                        })}
                    </Box>
                );
            })}
        </Grid>
    )
}
