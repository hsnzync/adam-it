import { ReactNode } from 'react'
import { SxProps, Theme } from '@mui/material'
import { Colors } from '@/constants'
import { BoxAtom, IconButtonMolecule, IconShapedAtom } from '..'
import { IconName } from '@/types'

type Button =
    | {
          button: true
          buttonUrl: string
      }
    | {
          button: false
      }

type Props = {
    icon: IconName
    children: ReactNode
    sx?: SxProps<Theme>
} & Button

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
                '&:not(:last-child)': {
                    borderBottom: {
                        xs: `1px solid ${Colors.LIGHT_GREY}`,
                        md: 'none',
                    },
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
                    <IconButtonMolecule link href={props.buttonUrl} />
                </BoxAtom>
            )}
        </BoxAtom>
    )
}
