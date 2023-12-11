import { Colors } from '@/constants'
import { BoxAtom, TextAtom, IconButtonMolecule, IconShapedAtom } from '..'
import { IconName } from '@/types'
import { ReactNode } from 'react'

interface Props {
    icon: IconName
    children: ReactNode
    button?: boolean
}

export const KpiCardMolecule = (props: Props) => {
    return (
        <BoxAtom direction="vertical" space={2} sx={{ width: '100%' }}>
            <BoxAtom direction="horizontal" alignment="center" space={4}>
                <BoxAtom
                    direction="horizontal"
                    space={3}
                    sx={{ width: '100%', justifyContent: 'center' }}
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
