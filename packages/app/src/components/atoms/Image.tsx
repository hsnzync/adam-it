import { Box, SxProps, Theme } from '@mui/material'
import NextImage from 'next/image'
import { BoxAtom } from '@/components'
import { Image } from '@/types'

interface Props {
    large?: boolean
    sx?: SxProps<Theme>
}

export const ImageAtom = (props: Props & Image & { logo?: boolean }) => {
    return (
        <BoxAtom
            alignment="end"
            sx={{
                img: {
                    width: '100%',
                    height: {
                        xs: props.logo ? 200 : 260,
                        sm: props.logo ? 250 : 450,
                        md: props.logo ? 300 : 500,
                    },
                },

                ...props.sx,
            }}
        >
            <NextImage
                loading="eager"
                src={props.imageUrl}
                alt={props.imageAlt}
                width={500}
                height={500}
                style={{
                    clipPath: `polygon(0px 0px, ${
                        props.large ? '80%' : '75%'
                    } 0px, ${props.large ? '150%' : '160%'} 100%, 0px 100%)`,
                    objectFit: 'cover',
                }}
            />
        </BoxAtom>
    )
}

export const HeaderImageAtom = (
    props: Props & {
        imageUrl: string
    }
) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                background: `linear-gradient(45deg, rgba(78, 163, 208, 0.30) 2.49%, rgba(1, 34, 52, 0.00) 18.31%), url(${props.imageUrl}), lightgray -4561.022px 2760.673px / 82.765% 62.054% no-repeat`,
                backgroundPosition: 'right',
                backgroundSize: 'cover',
                clipPath:
                    'polygon(360px 0%, 100% 0%, 100% 100%, 360px 100%, 0% 365px)',
                ...props.sx,
            }}
        />
    )
}
