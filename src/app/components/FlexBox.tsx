import { Box, SxProps, Theme } from '@mui/material'

interface Props {
    direction?: 'horizontal' | 'vertical'
    alignment?: 'center' | 'start' | 'end'
    children?: React.ReactNode
    bgColor?: string
    space?: number
    as?: any
    sx?: SxProps<Theme>
}

export const FlexBox = (props: Props) => {
    return (
        <Box
            component={props.as}
            sx={{
                display: 'flex',
                flexDirection:
                    props.direction === 'horizontal' ? 'row' : 'column',
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
