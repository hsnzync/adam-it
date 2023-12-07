import { SxProps, Theme, Typography, TypographyProps } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'
import { ReactNode } from 'react'
import { Manrope, Source_Code_Pro } from 'next/font/google'

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
    isHeader?: boolean
    className?: string
    sx?: SxProps<Theme>
}

export function FlexText(props: Props) {
    return (
        <Typography
            sx={{ ...props.sx }}
            className={props.className}
            variant={props.variant}
            textAlign={props.alignment}
            fontWeight={props.fontWeight}
            fontFamily={
                props.isHeader
                    ? sourceCodePro.style.fontFamily
                    : manrope.style.fontFamily
            }
            lineHeight={props.lineHeight}
            textTransform={props.textTransform}
            color={props.color}
        >
            {props.children}
        </Typography>
    )
}
