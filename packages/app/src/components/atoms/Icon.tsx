import { SxProps, Theme } from '@mui/system'
import { Colors, IconsMapper } from '@/constants'
import { IconName } from '@/types'
import { BoxAtom } from './Box'

interface IconProps {
    iconName: IconName
    color?: string
    sx?: SxProps<Theme>
    size?: number
}

export function IconAtom(props: IconProps) {
    const iconName = props.iconName
    const Icon = IconsMapper[iconName]

    return (
        <BoxAtom
            className="icon-container"
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
        </BoxAtom>
    )
}

export const IconShapedAtom = (props: IconProps) => {
    const iconName = props.iconName
    const Icon = IconsMapper[iconName]

    return (
        <BoxAtom
            alignment="center"
            sx={{
                color: props.color,
                backgroundColor: Colors.DARK_BLUE,
                borderRadius: 1,
                minWidth: 50,
                width: 50,
                height: 50,
                rotate: '45deg',
                ...props.sx,
            }}
        >
            <BoxAtom
                sx={{
                    rotate: '-45deg',
                    p: '0px !important',
                    width: 'fit-content',
                    position: 'relative',
                }}
            >
                <Icon />
            </BoxAtom>
        </BoxAtom>
    )
}
