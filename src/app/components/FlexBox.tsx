import { Box, SxProps, Theme } from '@mui/material'

interface Props {
    direction?: 'horizontal' | 'vertical'
    centered?: boolean
    children?: React.ReactNode
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
                alignItems: props.centered ? 'center' : 'unset',
                justifyContent: props.centered ? 'center' : 'unset',
                gap: props.space,
                ...props.sx,
            }}
        >
            {props.children}
        </Box>
    )
}
