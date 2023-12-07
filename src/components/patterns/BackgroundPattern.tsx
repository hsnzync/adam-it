import { ReactNode } from 'react'
import { SxProps, Theme } from '@mui/material'
import { BoxAtom } from '@/components'

interface Props {
    children?: ReactNode
    hasPattern?: boolean
    bgColor?: string
    alignment?: 'center' | 'start' | 'end'
    position?: 'right' | 'left' | 'center' | string
    as?: string
    sx?: SxProps<Theme>
}

export const BackgroundPattern = (props: Props) => {
    return (
        <BoxAtom
            as={props.as}
            alignment={props.alignment}
            sx={{
                height: '100%',
                backgroundImage: props.hasPattern
                    ? `url("/header/pattern.svg")`
                    : undefined,
                backgroundPosition: props.position,
                backgroundRepeat: 'no-repeat',
                backgroundColor: props.bgColor,
                ...props.sx,
            }}
        >
            {props.children}
        </BoxAtom>
    )
}
