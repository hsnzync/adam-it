import { SxProps, Theme } from '@mui/system'
import { Colors, IconsMapper } from '@/constants'
import { IconName } from '@/types'
import { Box } from '@mui/material'
import { FlexBox } from './FlexBox'

interface IconProps {
    iconName: IconName
    color?: string
    sx?: SxProps<Theme>
    size?: number
}

export function Icon(props: IconProps) {
    const iconName = props.iconName
    const Icon = IconsMapper[iconName]

    return (
        <FlexBox
            alignment="center"
            sx={{
                color: props.color,
                width: 'fit-content',
                ...props.sx,
                svg: {
                    fontSize: props.size,
                },
            }}
        >
            <Icon />
        </FlexBox>
    )
}

export const IconShaped = (props: IconProps) => {
    const iconName = props.iconName
    const Icon = IconsMapper[iconName]

    return (
        <FlexBox
            alignment="center"
            sx={{
                color: props.color,
                backgroundColor: Colors.DARK_BLUE,
                borderRadius: 1,
                height: 45,
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
