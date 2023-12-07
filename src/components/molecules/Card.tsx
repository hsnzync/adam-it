import { Card, CardContent } from '@mui/material'
import { IconButtonMolecule, IconAtom, TextAtom, BoxAtom } from '@/components'
import { Colors } from '@/constants'
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
                a: {
                    textDecoration: 'none',
                },
                ':hover': {
                    boxShadow: '0px 0px 15px 0px rgba(0,0,0,.2)',
                },
            }}
        >
            <Link href={props.url}>
                <CardContent>
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
