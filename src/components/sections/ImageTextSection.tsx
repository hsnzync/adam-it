import { Colors } from '@/constants'
import {
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    SxProps,
    Theme,
} from '@mui/material'
import { FlexBox, SectionImage, Icon, FlexButton, BackgroundPattern } from '..'
import { screenMaxWidth } from '@/style'
import Image from 'next/image'

interface Props {
    sectionTitle?: string
    bgColor: string
    hasBgPattern?: boolean
    title: string
    description: string
    perks: string[]
    buttonText: string
    buttonUrl: string
    logo?: string
    sx?: SxProps<Theme>
}

export const ImageTextSection = (props: Props) => {
    return (
        <BackgroundPattern
            as="section"
            hasPattern={props.hasBgPattern}
            alignment="center"
            sx={{
                backgroundColor: props.bgColor,
                backgroundSize: {
                    xs: '600% auto',
                    md: '250% auto',
                },
                backgroundPosition: {
                    xs: 'center',
                    md: '0% 30%',
                },
                p: {
                    xs: 3,
                    md: 5,
                },
                overflow: 'hidden',
                ...props.sx,
            }}
        >
            <FlexBox
                alignment="start"
                space={3}
                sx={{ maxWidth: screenMaxWidth, m: 'auto' }}
            >
                {props.sectionTitle && (
                    <Typography variant="h4">{props.sectionTitle}</Typography>
                )}
                <FlexBox
                    direction="horizontal"
                    alignment="center"
                    space={5}
                    sx={{
                        position: 'relative',
                        maxWidth: screenMaxWidth,
                    }}
                >
                    <SectionImage
                        src="/meeting-image.jpg"
                        alt="perks of working at adam it"
                        sx={{
                            width: '100%',
                        }}
                    />
                    <FlexBox
                        space={1}
                        sx={{
                            width: {
                                xs: '100%',
                                md: '50',
                            },
                        }}
                    >
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
        </BackgroundPattern>
    )
}
