import { SxProps, Theme, Typography, TypographyProps } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'
import { ReactNode } from 'react'

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
            fontFamily={props.isHeader ? 'Source Code Pro' : 'Manrope'}
            lineHeight={props.lineHeight}
            textTransform={props.textTransform}
            color={props.color}
        >
            {props.children}
        </Typography>
    )
}
