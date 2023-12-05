'use client'
import { Colors } from '@/constants'
import { FlexBox } from '.'
import Image from 'next/image'
import { SxProps, Theme } from '@mui/material'
import { screenMaxWidth } from '@/style'
import { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'

interface Props {
    images: string[]
    divider?: boolean
    sx?: SxProps<Theme>
}

export const ImageSlider = (props: Props) => {
    const [isHovered, setIsHovered] = useState(false)
    const [logos, setLogos] = useState<string[]>([
        ...props.images,
        ...props.images,
    ])
    const slideAnimation = () => ({
        '@keyframes slide': {
            '0%': {
                left: 0,
            },
            '100%': {
                left: '100%',
            },
        },
    })

    // useEffect()

    return (
        <FlexBox
            as="section"
            space={5}
            alignment="center"
            sx={{
                height: 200,
                backgroundColor: Colors.WHITE,
                overflow: 'hidden',
                ...props.sx,
            }}
        >
            <FlexBox
                direction="horizontal"
                alignment="center"
                sx={{
                    py: 5,
                    width: '100%',
                    maxWidth: screenMaxWidth,
                    justifyContent: 'space-between',
                    borderTop: props.divider
                        ? `1px solid ${Colors.GREY}`
                        : undefined,
                }}
            >
                <Swiper
                    spaceBetween={10}
                    slidesPerView={4}
                    speed={10000}
                    autoplay={{
                        delay: 0,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false,
                        reverseDirection: true,
                    }}
                    modules={[Autoplay]}
                    onSlideChange={() => setIsHovered(false)}
                >
                    {logos.map((logo, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Image
                                src={logo}
                                alt="company logo"
                                width={100}
                                height={100}
                                style={{
                                    objectFit: 'contain',
                                }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </FlexBox>
        </FlexBox>
    )
}
