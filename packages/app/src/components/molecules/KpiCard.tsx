import { Colors } from '@/constants'
import { BoxAtom, TextAtom, IconButtonMolecule, IconShapedAtom } from '..'
import { IconName } from '@/types'
import { ReactNode } from 'react'
import { SxProps, Theme } from '@mui/material'

interface Props {
    icon: IconName
    children: ReactNode
    button?: boolean
    sx?: SxProps<Theme>
}

export const KpiCardMolecule = (props: Props) => {
    return (
        <BoxAtom
            direction="vertical"
            space={2}
            sx={{
                width: '100%',
                py: {
                    xs: 4,
                    md: 0,
                },
                borderBottom: {
                    xs: `1px solid ${Colors.LIGHT_GREY}`,
                    md: 'none',
                },
            }}
        >
            <BoxAtom direction="horizontal" alignment="center" space={4}>
                <BoxAtom
                    direction="horizontal"
                    space={3}
                    sx={{
                        width: '100%',
                        justifyContent: 'center',
                        ...props.sx,
                    }}
                >
                    <IconShapedAtom
                        color={Colors.WHITE}
                        iconName={props.icon}
                    />
                    {props.children}
                </BoxAtom>
            </BoxAtom>
            {props.button && (
                <BoxAtom alignment="end">
                    <IconButtonMolecule url="" />
                </BoxAtom>
            )}
        </BoxAtom>
    )
}
