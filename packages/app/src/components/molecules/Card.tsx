import Link from 'next/link'
import { Card, CardContent } from '@mui/material'
import { IconButtonMolecule, IconAtom, TextAtom, BoxAtom } from '@/components'
import { CARD_SHADOW, Colors } from '@/constants'

interface Props {
    title: string
    type: string
    location: string
    hours: number
    salary: string
    href: string
}

export const CardMolecule = (props: Props) => {
    return (
        <Card
            sx={{
                width: '100%',
                border: `1px solid ${Colors.BORDER_COLOR}`,
                boxShadow: 'none',
                ':hover': {
                    boxShadow: CARD_SHADOW,
                    h4: {
                        color: Colors.RED,
                        textDecoration: 'underline',
                    },
                },
            }}
        >
            <Link href={props.href} passHref style={{ textDecoration: 'none' }}>
                <CardContent
                    sx={{
                        p: {
                            xs: 2,
                            md: 3,
                        },
                    }}
                >
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
                            sx={{
                                width: '100%',
                                gap: {
                                    xs: 1,
                                    md: 2,
                                },
                            }}
                        >
                            <TextAtom variant="h4" color={Colors.ORANGE} header>
                                {props.title}
                            </TextAtom>
                            <BoxAtom
                                direction="horizontal"
                                sx={{
                                    gap: {
                                        xs: 1,
                                        md: 2,
                                    },
                                }}
                            >
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
