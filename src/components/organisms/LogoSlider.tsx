import { Colors } from '@/constants'
import { BoxAtom } from '@/components'
import NextImage from 'next/image'
import { SxProps, Theme } from '@mui/material'
import { screenMaxWidth } from '@/style'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { getAsset } from '@/utils'
import { Image } from '@/types'
import { textContent } from '@/content'

interface Props {
    divider?: boolean
    sx?: SxProps<Theme>
}

export const LogoSliderOrganism = (props: Props) => {
    const companyLogos = textContent.logos
    const [isHovered, setIsHovered] = useState(false)
    const [logos, setLogos] = useState<Image[]>([
        ...companyLogos,
        ...companyLogos,
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

    return (
        <BoxAtom
            as="section"
            space={5}
            alignment="center"
            sx={{
                height: 200,
                backgroundColor: Colors.WHITE,
                overflow: 'hidden',

                display: {
                    xs: 'none',
                    md: 'flex',
                },

                ...props.sx,
            }}
        >
            <BoxAtom
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
                            <NextImage
                                src={getAsset(logo.imageUrl, 'company-logos')}
                                alt={logo.imageAlt}
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
            </BoxAtom>
        </BoxAtom>
    )
}
