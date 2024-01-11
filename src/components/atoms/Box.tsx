import { Box, SxProps, Theme } from '@mui/material'
import { ReactNode } from 'react'

interface Props {
    direction?: 'horizontal' | 'vertical'
    alignment?: 'center' | 'start' | 'end'
    children?: ReactNode
    bgColor?: string
    space?: number
    as?: any
    id?: string
    sx?: SxProps<Theme>
    className?: string
}

export const BoxAtom = (props: Props) => {
    return (
        <Box
            id={props.id}
            className={props.className}
            component={props.as}
            sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    md: props.direction === 'horizontal' ? 'row' : 'column',
                },

                alignItems: props.alignment ?? 'unset',
                justifyContent: props.alignment ?? 'unset',
                gap: props.space,
                backgroundColor: props.bgColor,
                ...props.sx,
            }}
        >
            {props.children}
        </Box>
    )
}
