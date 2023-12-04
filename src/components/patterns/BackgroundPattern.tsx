import { SxProps, Theme } from '@mui/material'
import { FlexBox } from '..'

interface Props {
    sx?: SxProps<Theme>
}

export const BackgroundPattern = (props: Props) => {
    return (
        <FlexBox
            sx={{
                width: '100%',
                height: '100%',
                background: `url("/header/pattern.svg") repeat`,
                backgroundPosition: 'right',
                backgroundSize: '250% auto',
                ...props.sx,
            }}
        />
    )
}
