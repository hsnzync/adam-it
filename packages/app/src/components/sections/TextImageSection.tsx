import { Colors } from '@/constants'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    SxProps,
    Theme,
} from '@mui/material'
import { BoxAtom, ImageAtom, Background, TextAtom, IconAtom } from '..'
import { screenMaxWidth } from '@/style'
import Image from 'next/image'

interface Props {
    sectionTitle?: string
    bgColor: string
    hasBgPattern?: boolean
    title: string
    subtitle?: string
    description: string
    logo?: string
    perks?: string[]
    sx?: SxProps<Theme>
}

export const TextImageSection = (props: Props) => {
    return (
        <Background
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
                    md: '-15% 50%',
                },
                p: {
                    xs: 3,
                    md: 5,
                },
                py: {
                    md: 10,
                },
                overflow: 'hidden',
                ...props.sx,
            }}
        >
            <BoxAtom
                alignment="start"
                space={3}
                sx={{ maxWidth: screenMaxWidth, m: 'auto' }}
            >
                {props.sectionTitle && (
                    <TextAtom variant="h4" header>
                        {props.sectionTitle}
                    </TextAtom>
                )}
                <BoxAtom
                    direction="horizontal"
                    alignment="center"
                    space={5}
                    sx={{
                        position: 'relative',
                        maxWidth: screenMaxWidth,
                    }}
                >
                    <BoxAtom
                        space={1}
                        sx={{
                            width: '100%',
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
                        {props.subtitle && (
                            <TextAtom
                                textTransform="uppercase"
                                color={Colors.BLUE}
                            >
                                {props.subtitle}
                            </TextAtom>
                        )}
                        <TextAtom variant="h4" header>
                            {props.title}
                        </TextAtom>
                        <TextAtom>{props.description}</TextAtom>
                        {props.perks && (
                            <List dense sx={{ my: 3 }}>
                                {props.perks.map((perk, index) => (
                                    <ListItem key={index} sx={{ p: 0, mb: 1 }}>
                                        <ListItemIcon sx={{ minWidth: 35 }}>
                                            <IconAtom
                                                iconName="checkCircleOutline"
                                                color={Colors.ORANGE}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <TextAtom header>
                                                    {perk}
                                                </TextAtom>
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </BoxAtom>
                    <ImageAtom
                        src="/meeting-image.jpg"
                        alt="perks of working at adam it"
                        sx={{
                            width: '100%',
                        }}
                    />
                </BoxAtom>
            </BoxAtom>
        </Background>
    )
}
