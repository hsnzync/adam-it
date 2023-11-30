'use client'
import { Colors } from '@/constants'
import { FlexBox } from '.'
import Image from 'next/image'
import { SxProps, Theme } from '@mui/material'
import { screenMaxWidth } from '@/style'
import { useEffect, useState } from 'react'

interface Props {
    images: string[]
    divider?: boolean
    sx?: SxProps<Theme>
}

export const ImageSlider = (props: Props) => {
    const [isHovered, setIsHovered] = useState(false)
    const [images, setImages] = useState<string[]>(props.images)
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
                {props.images.map((image, index) => (
                    <FlexBox
                        key={index}
                        sx={{
                            position: 'relative',
                            animation: 'slide 20s linear infinite',
                            animationPlayState: isHovered
                                ? 'paused'
                                : 'running',
                            slideAnimation,
                        }}
                    >
                        <Image
                            src={image}
                            alt="company logo"
                            width={100}
                            height={100}
                            style={{
                                objectFit: 'contain',
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        />
                    </FlexBox>
                ))}
            </FlexBox>
        </FlexBox>
    )
}
