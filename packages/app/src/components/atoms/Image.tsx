import { Box, SxProps, Theme } from '@mui/material'
import NextImage from 'next/image'
import { BoxAtom } from '@/components'
import { Image } from '@/types'

interface Props {
    sx?: SxProps<Theme>
}

export const ImageAtom = (props: Props & Image & { logo?: boolean }) => {
    return (
        <BoxAtom
            alignment="end"
            sx={{
                width: '100%',

                img: {
                    width: '100%',
                    height: {
                        xs: props.logo ? 200 : 400,
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
                    clipPath: 'polygon(0px 0px, 70% 0px, 200% 100%, 0px 100%)',
                    objectFit: 'cover',
                    borderRadius: 5,
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
                background: `url(${props.imageUrl}) no-repeat`,
                backgroundPosition: 'right',
                backgroundSize: 'cover',
                clipPath:
                    'polygon(360px 0%, 100% 0%, 100% 100%, 360px 100%, 0% 365px)',
                ...props.sx,
            }}
        />
    )
}
