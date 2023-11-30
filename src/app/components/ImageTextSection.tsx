import { Colors } from '@/constants'
import {
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import { FlexBox, FlexImage, Icon, FlexButton } from '.'
import { screenMaxWidth } from '@/style'
import Image from 'next/image'

interface Props {
    sectionTitle?: string
    bgColor: string
    title: string
    description: string
    perks: string[]
    buttonText: string
    buttonUrl: string
    logo?: string
}

export const ImageTextSection = (props: Props) => {
    return (
        <FlexBox
            as="section"
            alignment="center"
            sx={{
                p: 5,
                backgroundColor: props.bgColor,
            }}
        >
            <FlexBox alignment="start" space={3}>
                {props.sectionTitle && (
                    <Typography variant="h4">{props.sectionTitle}</Typography>
                )}
                <FlexBox
                    direction="horizontal"
                    alignment="center"
                    space={5}
                    sx={{ maxWidth: screenMaxWidth }}
                >
                    <FlexImage
                        src="/meeting-image.jpg"
                        alt="perks of working at adam it"
                    />
                    <FlexBox space={1}>
                        {props.logo && (
                            <Image
                                src={props.logo}
                                alt="company logo"
                                width={80}
                                height={80}
                            />
                        )}
                        <Typography variant="h5">{props.title}</Typography>
                        <Typography>{props.description}</Typography>
                        <List dense sx={{ my: 3 }}>
                            {props.perks.map((perk, index) => (
                                <ListItem key={index} sx={{ p: 0, mb: 1 }}>
                                    <ListItemIcon sx={{ minWidth: 35 }}>
                                        <Icon
                                            iconName="checkCircleOutline"
                                            color={Colors.ORANGE}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={perk} />
                                </ListItem>
                            ))}
                        </List>
                        <FlexButton
                            label={props.buttonText}
                            url={props.buttonUrl}
                        />
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </FlexBox>
    )
}
