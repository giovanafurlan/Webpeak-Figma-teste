import {
    Container,
    Flex,
    Text,
    Image,
    Box,
    Center,
    useColorModeValue
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import style from 'styled-components';

const Dot = style.div`
.swiper-pagination-bullet-active{
    background: #fff;
}
.swiper{
  padding-top: 20px;
  padding-bottom: 20px;
}

.swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
  bottom: -5px;
}
`

export default function Marcas({ marcas }) {
    const { t } = useTranslation("common");

    const color = useColorModeValue('black', 'white');

    return (
        <Container
            maxW='full'
            pt='16'
            pb='14'>
            <Center>
                <Box
                    w={'5xl'}
                    flexDir='column'>
                    <Text
                        fontSize={'2xl'}
                        color={color}
                        textAlign={'center'}>
                        {t("confiado")}
                    </Text>
                    <Box
                        display={{
                            lg: 'inline',
                            sm: 'none'
                        }}>
                        <Dot>
                            <Swiper
                                slidesPerView={5}
                                spaceBetween={60}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination, Autoplay]}
                                className="mySwiper"
                                style={{
                                    zIndex: '0'
                                }}>
                                {marcas.map((item, idx) => (
                                    <SwiperSlide
                                        key={idx}
                                        margin='0 auto'>
                                        <Image
                                            src={item.logo}
                                            alt={item.alt}
                                            width='auto'
                                            height={'auto'}
                                            loading='lazy' />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Dot>
                    </Box>

                    <Box
                        display={{
                            lg: 'none',
                            sm: 'inline-block'
                        }}
                        w='100vw'>
                        <Dot>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination, Autoplay]}
                                className="mySwiper"
                                style={{
                                    zIndex: '0'
                                }}>
                                {marcas.map((item, idx) => (
                                    <SwiperSlide
                                        key={idx}
                                        margin='0 auto'>
                                        <Image
                                            src={item.logo}
                                            alt={item.alt}
                                            width='40'
                                            height={'auto'}
                                            loading='lazy' />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Dot>
                    </Box>
                </Box>
            </Center>
        </Container>
    )
}
