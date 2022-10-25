import {
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../../i18n.json';
import Link from 'next/link';
import { IoLanguage } from "react-icons/io5";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Language() {

    const color = useColorModeValue('black', 'white');

    const { locales, defaultLocale } = i18nConfig;
    const { t, lang } = useTranslation('common');

    function usePersistLocaleCookie() {
        const { locale, defaultLocale } = useRouter()

        useEffect(persistLocaleCookie, [locale, defaultLocale])
        function persistLocaleCookie() {
            if (locale !== defaultLocale) {
                const date = new Date()
                const expireMs = 100 * 24 * 60 * 60 * 1000 // 100 days
                date.setTime(date.getTime() + expireMs)
                document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`
            }
        }
    }

    return (
        <main onLoad={usePersistLocaleCookie} >
            <Menu >
                <MenuButton
                    aria-label='Idioma'
                    transition='all 0.2s'
                    mt='5px'>
                    <IoLanguage
                        fontSize='18px' />
                </MenuButton>
                <MenuList
                    fontSize={'15px'}
                    minW={'min-content'}
                    px='4'
                    color={color}>
                    {locales.map(lng => {
                        if (lng === lang) return null;
                        return (
                            <Link
                                key={lng}
                                href=""
                                locale={lng}>
                                {t("language-name")}
                            </Link>
                        );
                    })}
                </MenuList>
            </Menu>
        </main>
    );
};