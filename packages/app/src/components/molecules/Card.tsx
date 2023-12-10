import { Card, CardContent } from '@mui/material'
import { IconButtonMolecule, IconAtom, TextAtom, BoxAtom } from '@/components'
import { CARD_SHADOW, Colors } from '@/constants'
import Link from 'next/link'

interface Props {
    title: string
    salary: string
    location: string
    url: string
}

export const CardMolecule = (props: Props) => {
    return (
        <Card
            sx={{
                ':hover': {
                    boxShadow: CARD_SHADOW,
                },
            }}
        >
            <Link href={props.url} style={{ textDecoration: 'none' }}>
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
                        <IconButtonMolecule url={props.url} />
                    </BoxAtom>
                </CardContent>
            </Link>
        </Card>
    )
}
