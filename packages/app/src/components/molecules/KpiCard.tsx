import { ReactNode } from 'react'
import { SxProps, Theme } from '@mui/material'
import { Colors } from '@/constants'
import { BoxAtom, IconShapedAtom } from '@/components'
import { IconName } from '@/types'

type Props = {
    icon: IconName
    children: ReactNode
    extended?: boolean
    plain?: boolean
    sx?: SxProps<Theme>
}

export const KpiCardMolecule = (props: Props) => {
    return (
        <BoxAtom
            direction="vertical"
            space={2}
            sx={{
                width: '100%',
                justifyContent: {
                    lg: 'space-between',
                },

                py: {
                    xs: 4,
                    lg: 3,
                },
                px: {
                    lg: 3,
                },
                transition: '.3s',
                '&:not(:last-child)': {
                    borderBottom: {
                        xs: `1px solid ${Colors.LIGHT_GREY}`,
                        lg: 'none',
                    },
                },
                ':hover': {
                    cursor: !props.plain ? 'pointer' : undefined,
                    backgroundColor: !props.plain
                        ? { md: Colors.LIGHT_BLUE }
                        : undefined,
                },
            }}
        >
            <BoxAtom direction="horizontal" alignment="center" space={4}>
                <BoxAtom
                    direction="horizontal"
                    space={4}
                    sx={{
                        width: '100%',
                        justifyContent: 'start',
                        ...props.sx,
                    }}
                >
                    <IconShapedAtom
                        color={Colors.WHITE}
                        iconName={props.icon}
                        sx={{
                            position: 'relative',
                            left: 10,
                            top: 10,
                        }}
                    />
                    {props.children}
                </BoxAtom>
            </BoxAtom>
        </BoxAtom>
    )
}
