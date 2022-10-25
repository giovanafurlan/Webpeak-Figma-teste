import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import style from 'styled-components';

const DotLabel = style.div`
  .dot-label{
    top: -50px;
  }
  .swiper-button-prev, .swiper-button-next {
    top: 25px;
}
`

const conteudo = [
  {
    data: "2019-12-05",
    title: "Onde tudo começou",
    content: 'Start 1st round',
    img: "https://s2.glbimg.com/dnYPXZl0LBf0NpL3AVzM9qA_e5Q=/940x523/e.glbimg.com/og/ed/f/original/2018/02/19/img_0117_1.jpg"
  },
  {
    data: "2020-01-21",
    title: "Onde tudo começou",
    content: "Start 1st round",
    img: "https://s2.glbimg.com/dnYPXZl0LBf0NpL3AVzM9qA_e5Q=/940x523/e.glbimg.com/og/ed/f/original/2018/02/19/img_0117_1.jpg"
  },
  {
    data: "2020-02-25",
    title: "Onde tudo começou",
    content: "Start 2nd round",
    img: "https://s2.glbimg.com/dnYPXZl0LBf0NpL3AVzM9qA_e5Q=/940x523/e.glbimg.com/og/ed/f/original/2018/02/19/img_0117_1.jpg"
  },
  {
    data: "2020-03-16",
    title: "Onde tudo começou",
    content: "Start 2nd round",
    img: "https://s2.glbimg.com/dnYPXZl0LBf0NpL3AVzM9qA_e5Q=/940x523/e.glbimg.com/og/ed/f/original/2018/02/19/img_0117_1.jpg"
  },
  {
    data: "2020-04-19",
    title: "Onde tudo começou",
    content: "Start 2nd round",
    img: "https://s2.glbimg.com/dnYPXZl0LBf0NpL3AVzM9qA_e5Q=/940x523/e.glbimg.com/og/ed/f/original/2018/02/19/img_0117_1.jpg"
  },
  {
    data: "2020-05-23",
    title: "Onde tudo começou",
    content: "Start 2nd round",
    img: "https://s2.glbimg.com/dnYPXZl0LBf0NpL3AVzM9qA_e5Q=/940x523/e.glbimg.com/og/ed/f/original/2018/02/19/img_0117_1.jpg"
  }
];

export default function Timeline() {

  return (
    <>
      <Box
        display={{
          lg: 'inline',
          sm: 'none'
        }}>
        <DotLabel>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            style={{
              zIndex: '0'
            }}>
            {conteudo.map((cont, idx) => (
              <SwiperSlide key={idx}>
                <Box
                  maxW={'5xl'}
                  margin="0 auto"
                  marginTop="20px"
                  fontSize="15px">
                  <Text
                    mt='6'
                    fontSize={'lg'}>
                    {cont.data}
                  </Text>
                  <Heading
                    as='h4'
                    color={'primary'}
                    variant={'h4'}
                    my='10'
                    fontWeight='bold'>
                    {cont.title}
                  </Heading>
                  <Flex>
                    <Image
                      src={cont.img}
                      alt={cont.title}
                      maxH='80'
                      pr='10'
                      pb='10' />
                    <Text
                      fontSize={'md'}>
                      {cont.content}
                    </Text>
                  </Flex>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </DotLabel>
      </Box>
      <Box
        display={{
          lg: 'none',
          sm: 'inline-block'
        }}
        w='100vw'>
        <DotLabel>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            style={{
              zIndex: '0'
            }}>
            {conteudo.map((cont, idx) => (
              <SwiperSlide key={idx}>
                <Box
                  margin="0 auto"
                  marginTop="20px"
                  fontSize="15px">
                  <Text mt='6'>
                    {cont.data}
                  </Text>
                  <Heading
                    as='h4'
                    color={'primary'}
                    variant={'h4'}
                    my='10'
                    fontWeight='bold'>
                    {cont.title}
                  </Heading>
                  <Flex>
                    <Image
                      src={cont.img}
                      alt={cont.title}
                      maxH='80'
                      pr='10'
                      pb='10' />
                    <Text
                      fontSize={'md'}>
                      {cont.content}
                    </Text>
                  </Flex>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </DotLabel>
      </Box>
    </>
  );
}