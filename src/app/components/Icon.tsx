import { SxProps, Theme } from '@mui/system'
import { Colors, IconsMapper } from '@/constants'
import { IconName } from '@/types'
import { Box } from '@mui/material'
import { FlexBox } from './FlexBox'

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
        <FlexBox
            centered
            sx={{
                color: props.color,
                width: 'fit-content',
                ...props.sx,
            }}
        >
            <Icon />
        </FlexBox>
    )
}

export function IconShaped(props: IconProps) {
    const iconName = props.iconName
    const Icon = IconsMapper[iconName]

    return (
        <FlexBox
            centered
            sx={{
                color: props.color,
                backgroundColor: Colors.DARK_BLUE,
                height: 60,
                width: 90,
                rotate: '45deg',
                ...props.sx,
            }}
        >
            <FlexBox
                sx={{
                    rotate: '-45deg',
                    p: '0px !important',
                    width: 'fit-content',
                    position: 'relative',
                }}
            >
                <Icon />
            </FlexBox>
        </FlexBox>
    )
}
