import {
  Box,
  Heading,
  Text,
  Flex
} from '@chakra-ui/react';
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";
import i18nConfig from '../../i18n.json';
import useTranslation from 'next-translate/useTranslation';
import { PostContent } from "../lib/blogs";

type Props = {
  post: PostContent;
};

export default function PostItemStatic({ post }: Props) {

  const { locales, defaultLocale } = i18nConfig;
  const { t, lang } = useTranslation('common');

  return (
    <>
      {locales.map(lng => {
        if (lng === lang) return null;
        return (
          <Link
            key={lng}
            href={"/blogs/" + post.slug}
            locale={post.language}>
            <a>
              <Flex
                pos={'relative'}
                height='260px'
                width={{
                  lg: '100%',
                  sm: '45%'
                }}
                margin={'0 auto'}
                alignItems='flex-end'
                p='4'
                backgroundImage={post.image}
                backgroundRepeat='no-repeat'
                backgroundPosition='center'
                borderRadius='9px'
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  bottom: '0',
                  left: '0',
                  opacity: '0.95',
                  backgroundColor: 'rgba(0, 0, 0, 0.50)',
                  borderRadius: '9px'
                }}>
                <Box
                  pos={'relative'}
                  textAlign='initial'
                  color='white'>
                  <Heading
                    as='h3'
                    fontWeight='normal'
                    fontSize={'2xl'}>
                    {post.title}
                  </Heading>
                  <Text
                    fontSize={'sm'}>
                    {post.intro}
                  </Text>
                  <Date date={parseISO(post.date)} color={undefined} />
                </Box>
              </Flex>
            </a>
          </Link>
        );
      })}
    </>
  );
}
