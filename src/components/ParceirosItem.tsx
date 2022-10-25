import {
  Flex,
  GridItem,
  Heading,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaUsers } from "react-icons/fa";
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import i18nConfig from '../../i18n.json';
import { ParceirosContent } from '../lib/parceiros';

type Props = {
  parceiros: ParceirosContent;
};

export default function ParceirosItem({ parceiros }: Props) {

  const { t, lang } = useTranslation("common");
  const { locales, defaultLocale } = i18nConfig;

  const bg = useColorModeValue('bgClearMedium', 'bgDarkMedium');
  const color = useColorModeValue('primary', 'white');

  return (
    <GridItem
      maxW={{
        sm: 'sm'
      }}
      margin='0 auto'>
      {locales.map(lng => {
        if (lng === lang) return null;
        return (
          <Link
            key={lng}
            href={"/parceiros/" + parceiros.slug}
            locale={parceiros.language}>
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
                    as={FaUsers}
                    h={'8'}
                    w={'8'}
                    alignSelf={'center'}
                    color='white' />
                </Flex>
                <Heading
                  as={'h3'}
                  variant='h3'>
                  {parceiros.title}
                </Heading>
                <Text>{parceiros.intro}</Text>
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
    </GridItem>
  );
}