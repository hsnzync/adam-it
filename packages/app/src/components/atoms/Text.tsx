'use client'
import { SxProps, Theme, Typography, TypographyProps } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'
import { ReactNode, useEffect, useState } from 'react'
import { Manrope, Source_Code_Pro } from 'next/font/google'
import { Colors } from '@/constants'
import { breakpoints } from '@/style'

const manrope = Manrope({ subsets: ['latin'] })
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] })

interface Props {
    children: ReactNode
    variant?: Variant
    alignment?: TypographyProps['textAlign']
    fontWeight?: TypographyProps['fontWeight']
    textTransform?: TypographyProps['textTransform']
    color?: string
    lineHeight?: number
    header?: boolean
    className?: string
    sx?: SxProps<Theme>
}

export function TextAtom(props: Props) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    })

    const handleResize = () => {
        setIsMobile(window.innerWidth < breakpoints.sm)
    }

    const colorMapper = props.header ? Colors.DARK_BLUE : Colors.DARK_GREY
    const sizeMapper = () => {
        const defaultValue = isMobile ? 14 : 18
        switch (props.variant) {
            case 'h1':
                return isMobile ? 34 : 56
            case 'h2':
                return isMobile ? 28 : 40
            case 'h3':
                return isMobile ? 24 : 32
            case 'h4':
                return isMobile ? 22 : 24
            case 'h5':
                return isMobile ? 18 : 32
            case 'body1':
                return isMobile ? 13 : 16
            case 'button':
                return 16
            case 'body2':
                return defaultValue
            default:
                return defaultValue
        }
    }
    const lineHeightHandler = (): string | number | undefined => {
        if (!props.header) {
            return '170%'
        }

        return props.lineHeight
    }

    return (
        <Typography
            sx={{ ...props.sx }}
            className={props.className}
            variant={props.variant}
            textAlign={props.alignment}
            fontWeight={props.fontWeight ?? 'normal'}
            fontSize={sizeMapper}
            fontFamily={
                props.header
                    ? sourceCodePro.style.fontFamily
                    : manrope.style.fontFamily
            }
            lineHeight={lineHeightHandler()}
            textTransform={props.textTransform}
            color={props.color ?? colorMapper}
        >
            {props.children}
        </Typography>
    )
}
