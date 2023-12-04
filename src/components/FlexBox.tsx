import { Box, SxProps, Theme } from '@mui/material'

interface Props {
    direction?: 'horizontal' | 'vertical'
    alignment?: 'center' | 'start' | 'end'
    children?: React.ReactNode
    bgColor?: string
    space?: number
    as?: any
    sx?: SxProps<Theme>
    className?: string
}

export const FlexBox = (props: Props) => {
    return (
        <Box
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
