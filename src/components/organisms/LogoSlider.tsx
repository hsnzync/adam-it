import { Colors } from '@/constants'
import { BoxAtom } from '@/components'
import NextImage from 'next/image'
import { SxProps, Theme } from '@mui/material'
import { screenMaxWidth } from '@/style'
import { useState } from 'react'
import { getAsset } from '@/utils'
import { Image } from '@/types'
import { textContent } from '@/content'
import Marquee from 'react-fast-marquee'

interface Props {
    divider?: boolean
    sx?: SxProps<Theme>
}

export const LogoSliderOrganism = (props: Props) => {
    const [logos, setLogos] = useState<Image[]>(textContent.logos)

    return (
        <BoxAtom
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
            <BoxAtom
                direction="horizontal"
                alignment="center"
                sx={{
                    py: 5,
                    width: '100%',
                    maxWidth: screenMaxWidth,
                    borderTop: props.divider
                        ? `1px solid ${Colors.GREY}`
                        : undefined,
                }}
            >
                <Marquee autoFill pauseOnHover speed={30}>
                    {logos.map((logo, index) => (
                        <BoxAtom key={index} sx={{ mx: { xs: 5, md: 10 } }}>
                            <NextImage
                                src={getAsset(logo.imageUrl, 'company-logos')}
                                alt={logo.imageAlt}
                                width={100}
                                height={100}
                                style={{
                                    objectFit: 'contain',
                                }}
                            />
                        </BoxAtom>
                    ))}
                </Marquee>
            </BoxAtom>
        </BoxAtom>
    )
}
