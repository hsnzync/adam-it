import { Box, SxProps, Theme } from '@mui/material'
import Image from 'next/image'
import { BoxAtom } from '@/components'

interface Props {
    sx?: SxProps<Theme>
}

export const ImageAtom = (
    props: Props & {
        src: string
        alt: string
    }
) => {
    return (
        <BoxAtom
            alignment="end"
            sx={{
                width: '100%',

                img: {
                    width: '100%',
                    height: {
                        xs: 400,
                        sm: 450,
                        md: 500,
                    },
                },

                ...props.sx,
            }}
        >
            <Image
                loading="eager"
                src={props.src}
                alt={props.alt}
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
