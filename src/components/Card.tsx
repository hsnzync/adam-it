import { Card as MuiCard, CardContent, Typography } from '@mui/material'
import { FlexBox, FlexText, Icon, IconButton } from '.'
import { Colors } from '@/constants'
import Link from 'next/link'

interface Props {
    title: string
    salary: string
    location: string
    url: string
}

export const Card = (props: Props) => {
    return (
        <MuiCard
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
                    <FlexBox
                        direction="horizontal"
                        alignment="center"
                        sx={{
                            justifyContent: 'space-between',
                            flexDirection: {
                                xs: 'row',
                            },
                        }}
                    >
                        <FlexBox
                            direction="vertical"
                            space={1}
                            sx={{ width: '100%' }}
                        >
                            <FlexText
                                variant="h6"
                                color={Colors.ORANGE}
                                isHeader
                            >
                                {props.title}
                            </FlexText>
                            <FlexBox direction="horizontal" space={2}>
                                <FlexBox
                                    direction="horizontal"
                                    alignment="start"
                                    space={1}
                                    sx={{
                                        flexDirection: {
                                            xs: 'row',
                                        },
                                    }}
                                >
                                    <Icon
                                        color={Colors.DARK_BLUE}
                                        iconName="wallet"
                                    />
                                    <FlexText color={Colors.DARK_BLUE}>
                                        {props.salary}
                                    </FlexText>
                                </FlexBox>
                                <FlexBox
                                    direction="horizontal"
                                    alignment="start"
                                    space={1}
                                    sx={{
                                        flexDirection: {
                                            xs: 'row',
                                        },
                                    }}
                                >
                                    <Icon
                                        color={Colors.DARK_BLUE}
                                        iconName="location"
                                    />
                                    <FlexText color={Colors.DARK_BLUE}>
                                        {props.location}
                                    </FlexText>
                                </FlexBox>
                            </FlexBox>
                        </FlexBox>
                        <IconButton url={props.url} />
                    </FlexBox>
                </CardContent>
            </Link>
        </MuiCard>
    )
}
