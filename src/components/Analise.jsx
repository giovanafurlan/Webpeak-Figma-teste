import {
    Button,
    Flex,
    Text
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

export default function Analise() {

    const { t } = useTranslation("common");
    
    return (
        <Flex
            bg='primary'
            p='10'
            textAlign={'center'}
            flexDir='column'
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
    )
}