import { Box, SxProps, Theme } from '@mui/material'
import Image from 'next/image'

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
        <Box
            sx={{
                width: '100%',
                img: {
                    width: '100%',
                    height: {
                        xs: 350,
                        md: 500,
                    },
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
        </Box>
    )
}

export const HeaderImageAtom = (props: Props) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                background: `url("/home-meeting-image.jpg") no-repeat`,
                backgroundPosition: 'right',
                backgroundSize: 'cover',
                clipPath:
                    'polygon(360px 0%, 100% 0%, 100% 100%, 360px 100%, 0% 365px)',
                ...props.sx,
            }}
        />
    )
}
