import { SxProps, Theme } from '@mui/system'
import { Colors, IconsMapper } from '@/constants'
import { IconName } from '@/types'
import { Container } from '@mui/material'

interface IconProps {
    iconName: IconName
    color?: string
    sx?: SxProps<Theme>
    onClick?: () => void
}

export function Icon(props: IconProps) {
    const iconName = props.iconName
    const Icon = IconsMapper[iconName]

    return (
        <Container
            sx={{
                color: props.color,
                justifyContent: 'center',
                p: '0 !important',
                ...props.sx,
            }}
        >
            <Icon />
        </Container>
    )
}
