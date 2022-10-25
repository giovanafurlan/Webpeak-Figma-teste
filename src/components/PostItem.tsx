import {
  Box,
  Heading,
  Text,
  Stack,
  Image
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

export default function PostItem({ post }: Props) {

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
              <Box
                width={{
                  lg: '100%',
                  sm: '90vw'
                }}
                margin={{
                  lg: '0',
                  sm: '0 auto'
                }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={{
                    lg: '100%',
                    sm: '90vw'
                  }}
                  maxH={'180px'}
                  borderRadius='9px'
                  loading='lazy' />
                <Stack
                  py='4'
                  textAlign={'initial'}>
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
                </Stack>
              </Box>
            </a>
          </Link>
        );
      })}
    </>
  );
}
