import { Colors } from '@/constants'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    SxProps,
    Theme,
} from '@mui/material'
import {
    BoxAtom,
    ImageAtom,
    IconAtom,
    Background,
    TextAtom,
    LinkButtonAtom,
} from '..'
import { screenMaxWidth } from '@/style'
import LogoImage from 'next/image'
import { getAsset } from '@/utils'
import { Image, Button } from '@/types'

type Props = {
    sectionTitle?: string
    bgColor: string
    hasBgPattern?: boolean
    title: string
    subtitle?: string
    description: string
    perks?: string[]
    logoUrl?: string
    logoAlt?: string
    sx?: SxProps<Theme>
} & Button &
    Image

export const ImageTextSection = (props: Props) => {
    return (
        <Background
            as="section"
            hasPattern={props.hasBgPattern}
            alignment="center"
            sx={{
                backgroundColor: props.bgColor,
                backgroundSize: {
                    xs: '600% auto',
                    md: '250%',
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
                    <ImageAtom
                        imageUrl={getAsset(props.imageUrl)}
                        imageAlt={props.imageAlt}
                        sx={{
                            width: '100%',
                        }}
                    />
                    <BoxAtom
                        space={1}
                        sx={{
                            width: '100%',
                        }}
                    >
                        {props.logoUrl && (
                            <LogoImage
                                src={props.logoUrl}
                                alt={props.logoAlt ?? 'Officieel logo'}
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
                        <List dense sx={{ mt: 3 }}>
                            {props.perks?.map((perk, index) => (
                                <ListItem key={index} sx={{ p: 0, mb: 1 }}>
                                    <ListItemIcon sx={{ minWidth: 35 }}>
                                        <IconAtom
                                            iconName="checkCircleOutline"
                                            color={Colors.ORANGE}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <TextAtom header>{perk}</TextAtom>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                        {props.button && (
                            <LinkButtonAtom
                                label={props.buttonText}
                                href={props.buttonUrl}
                            />
                        )}
                    </BoxAtom>
                </BoxAtom>
            </BoxAtom>
        </Background>
    )
}
