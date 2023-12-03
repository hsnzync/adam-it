import { Box, SxProps, Theme } from '@mui/material'
import Image from 'next/image'

interface Props {
    src: string
    alt: string
    height?: number
    sx?: SxProps<Theme>
}

export const SectionImage = (props: Props) => {
    return (
        <Box
            sx={{
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
                height={props.height ?? 500}
                style={{
                    clipPath: 'polygon(0 0, 80% 0, 150% 100%, 0 100%)',
                    objectFit: 'contain',
                }}
            />
        </Box>
    )
}

export const HeaderImage = (props: Props) => {
    return (
        <Box
            sx={{
                img: {
                    width: '100%',
                },
                ...props.sx,
            }}
        >
            <Image
                src={props.src}
                alt={props.alt}
                width={880}
                height={props.height ?? 500}
                style={{
                    clipPath:
                        'polygon(50% 0%, 100% 0%, 100% 100%, 40% 110%, 0% 63%)',
                    objectFit: 'cover',
                }}
            />
        </Box>
    )
}
