import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Icon,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

export default function Card({ link, icone, cor, titulo, texto }) {

    const { t } = useTranslation("common");

    const color = useColorModeValue('primary', 'white');
    const bg = useColorModeValue('bgClearMedium', 'bgDarkMedium');

    return (
        <Link
            href={link}
            style={{
                cursor: 'pointer'
            }}>
            <a>
                <Box
                    maxW={'250px'}
                    w={'full'}
                    bg={bg}
                    boxShadow={'0px 4px 15px rgba(0, 0, 0, 0.07)'}
                    borderRadius='5px'
                    overflow={'hidden'}
                    py='4'
                    _hover={{
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.30)'
                    }}>
                    <Flex
                        flexDir={'column'}
                        gap='6'>
                        <Flex
                            bgGradient={cor}
                            margin='0 auto'
                            w={'min'}
                            p='4'
                            borderRadius={'100%'}
                            align='center'>
                            <Icon
                                as={icone}
                                h={'8'}
                                w={'8'}
                                alignSelf={'center'}
                                color='white' />
                        </Flex>
                        <Heading
                            as='h4'
                            minH={{
                                lg: '0',
                                sm: '80px'
                            }}
                            variant={'text'}
                            fontSize={'2xl'}>
                            {titulo}
                        </Heading>
                        <Text
                            minH={{
                                lg: '120px',
                                sm: '160px'
                            }}
                            px='4'>
                            {texto}
                        </Text>
                        <Text
                            width='full'
                            color={color}>
                            {t("saibaMais")}
                        </Text>
                    </Flex>
                </Box>
            </a>
        </Link>
    )
}
