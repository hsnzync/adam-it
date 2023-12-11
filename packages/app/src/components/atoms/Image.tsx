import { Box, SxProps, Theme } from '@mui/material'
import Image from 'next/image'
import { BoxAtom } from '@/components'
import { getAsset } from '@/utils'

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
                },

                ...props.sx,
            }}
        >
            <Image
                src={props.src}
                alt={props.alt}
                width={500}
                height={500}
                style={{
                    clipPath: 'polygon(0 0, 80% 0, 150% 100%, 0 100%)',
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
    console.log(props.imageUrl)
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
