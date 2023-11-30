import { Colors } from '@/constants'
import { Typography } from '@mui/material'
import { FlexBox, IconButton, IconShaped } from '.'
import { IconName } from '@/types'

interface Props {
    title: string
    description: string
    icon: IconName
}

export const KpiBlock = (props: Props) => {
    return (
        <FlexBox direction="vertical" space={2}>
            <FlexBox direction="horizontal" alignment="center" space={4}>
                <FlexBox direction="horizontal" space={3}>
                    <IconShaped color={Colors.WHITE} iconName={props.icon} />
                    <FlexBox direction="vertical">
                        <Typography variant="h5">{props.title}</Typography>
                        <Typography variant="body1">
                            {props.description}
                        </Typography>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
            <FlexBox alignment="end">
                <IconButton url="" />
            </FlexBox>
        </FlexBox>
    )
}
