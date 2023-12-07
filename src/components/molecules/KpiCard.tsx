import { Colors } from '@/constants'
import { BoxAtom, TextAtom, IconButtonMolecule, IconShapedAtom } from '..'
import { IconName } from '@/types'

interface Props {
    title: string
    description: string
    icon: IconName
}

export const KpiCardMolecule = (props: Props) => {
    return (
        <BoxAtom direction="vertical" space={2}>
            <BoxAtom direction="horizontal" alignment="center" space={4}>
                <BoxAtom direction="horizontal" space={3}>
                    <IconShapedAtom
                        color={Colors.WHITE}
                        iconName={props.icon}
                    />
                    <BoxAtom direction="vertical" space={2}>
                        <TextAtom variant="h6" header lineHeight={1.3}>
                            {props.title}
                        </TextAtom>
                        <TextAtom variant="body1">{props.description}</TextAtom>
                    </BoxAtom>
                </BoxAtom>
            </BoxAtom>
            <BoxAtom alignment="end">
                <IconButtonMolecule url="" />
            </BoxAtom>
        </BoxAtom>
    )
}
