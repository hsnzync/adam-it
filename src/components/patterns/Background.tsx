import { ReactNode } from 'react'
import { SxProps, Theme } from '@mui/material'
import { BoxAtom } from '@/components'
import { getAsset } from '@/utils'

interface Props {
    children?: ReactNode
    hasPattern?: boolean
    hero?: boolean
    bgColor?: string
    alignment?: 'center' | 'start' | 'end'
    position?: 'right' | 'left' | 'center' | string
    as?: string
    sx?: SxProps<Theme>
}
export const Background = (props: Props) => {
    return (
        <BoxAtom
            as={props.as}
            alignment={props.alignment}
            sx={{
                height: '100%',
                backgroundImage: props.hasPattern
                    ? props.hero
                        ? `url(${getAsset('pattern.svg', 'header')})`
                        : `url(${getAsset('pattern.svg', 'background')})`
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
