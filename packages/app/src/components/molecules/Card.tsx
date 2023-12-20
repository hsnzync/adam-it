import Link from 'next/link'
import { Card, CardContent } from '@mui/material'
import { IconButtonMolecule, IconAtom, TextAtom, BoxAtom } from '@/components'
import { CARD_SHADOW, Colors } from '@/constants'
import { JobSection } from '@/types'

interface Props {
    title: string
    type: string
    location: string
    hours: number
    salary: string
    sections: JobSection[]
    href: string
}

export const CardMolecule = (props: Props) => {
    return (
        <Card
            sx={{
                width: '100%',
                border: `1px solid ${Colors.LIGHT_GREY}`,
                ':hover': {
                    boxShadow: CARD_SHADOW,
                },
            }}
        >
            <Link href={props.href} passHref style={{ textDecoration: 'none' }}>
                <CardContent sx={{ p: 3 }}>
                    <BoxAtom
                        direction="horizontal"
                        alignment="center"
                        sx={{
                            justifyContent: 'space-between',
                            flexDirection: {
                                xs: 'row',
                            },
                        }}
                    >
                        <BoxAtom
                            direction="vertical"
                            space={1}
                            sx={{ width: '100%' }}
                        >
                            <TextAtom variant="h6" color={Colors.ORANGE} header>
                                {props.title}
                            </TextAtom>
                            <BoxAtom direction="horizontal" space={2}>
                                <BoxAtom
                                    direction="horizontal"
                                    alignment="start"
                                    space={1}
                                    sx={{
                                        flexDirection: {
                                            xs: 'row',
                                        },
                                    }}
                                >
                                    <IconAtom
                                        color={Colors.DARK_BLUE}
                                        iconName="wallet"
                                    />
                                    <TextAtom color={Colors.DARK_BLUE}>
                                        {props.salary}
                                    </TextAtom>
                                </BoxAtom>
                                <BoxAtom
                                    direction="horizontal"
                                    alignment="start"
                                    space={1}
                                    sx={{
                                        flexDirection: {
                                            xs: 'row',
                                        },
                                    }}
                                >
                                    <IconAtom
                                        color={Colors.DARK_BLUE}
                                        iconName="location"
                                    />
                                    <TextAtom color={Colors.DARK_BLUE}>
                                        {props.location}
                                    </TextAtom>
                                </BoxAtom>
                            </BoxAtom>
                        </BoxAtom>
                        <IconButtonMolecule link={false} />
                    </BoxAtom>
                </CardContent>
            </Link>
        </Card>
    )
}
