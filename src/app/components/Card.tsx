import { Card as MuiCard, CardContent, Typography } from '@mui/material'
import { FlexBox, Icon, IconButton } from '.'
import { Colors } from '@/constants'

interface Props {
    title: string
    salary: string
    location: string
    url: string
}

export const Card = (props: Props) => {
    return (
        <MuiCard sx={{ px: 1 }}>
            <CardContent>
                <FlexBox
                    direction="horizontal"
                    alignment="center"
                    sx={{ justifyContent: 'space-between' }}
                >
                    <FlexBox direction="vertical" space={1}>
                        <Typography variant="h6" color={Colors.ORANGE}>
                            {props.title}
                        </Typography>
                        <FlexBox direction="horizontal" space={2}>
                            <FlexBox
                                direction="horizontal"
                                alignment="center"
                                space={1}
                            >
                                <Icon iconName="computer" />
                                <Typography>{props.salary}</Typography>
                            </FlexBox>
                            <FlexBox
                                direction="horizontal"
                                alignment="center"
                                space={1}
                            >
                                <Icon iconName="computer" />
                                <Typography>{props.location}</Typography>
                            </FlexBox>
                        </FlexBox>
                    </FlexBox>
                    <IconButton url={props.url} />
                </FlexBox>
            </CardContent>
        </MuiCard>
    )
}
