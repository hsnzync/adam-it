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
                sx={{ width: '100%', maxWidth: screenMaxWidth, m: 'auto' }}
            >
                {props.sectionTitle && (
                    <TextAtom variant="h2" header>
                        {props.sectionTitle}
                    </TextAtom>
                )}
                <BoxAtom
                    direction="horizontal"
                    alignment="center"
                    sx={{
                        width: '100%',
                        position: 'relative',
                        gap: {
                            xs: 3,
                            md: 12,
                        },
                    }}
                >
                    <ImageAtom
                        large
                        imageUrl={getAsset(props.imageUrl)}
                        imageAlt={props.imageAlt}
                        sx={{
                            width: {
                                xs: '100%',
                                md: '50%',
                            },
                        }}
                    />
                    <BoxAtom
                        space={3}
                        sx={{
                            width: {
                                xs: '100%',
                                md: '50%',
                            },
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
                                variant="body2"
                                textTransform="uppercase"
                                color={Colors.BLUE}
                            >
                                {props.subtitle}
                            </TextAtom>
                        )}
                        <TextAtom variant="h2" header>
                            {props.title}
                        </TextAtom>
                        <TextAtom sx={{ whiteSpace: 'pre-wrap' }}>
                            {props.description}
                        </TextAtom>
                        <List dense>
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
                                            <TextAtom variant="body1" header>
                                                {perk}
                                            </TextAtom>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>

                        {props.button &&
                            (props.logoUrl ? (
                                <LinkButtonAtom
                                    label={props.buttonText}
                                    href={props.buttonUrl}
                                    variant="clear"
                                    sx={{
                                        '.button-text': {
                                            textAlign: 'left',
                                            transition: '.3s',
                                        },
                                        '.button-icon-container': {
                                            transition: '.3s',
                                        },
                                        ':hover': {
                                            background: 'none',
                                            '.button-text': {
                                                color: Colors.RED,
                                            },
                                            '.button-icon-container': {
                                                background: Colors.RED,
                                            },
                                        },
                                    }}
                                />
                            ) : (
                                <LinkButtonAtom
                                    label={props.buttonText}
                                    href={props.buttonUrl}
                                />
                            ))}
                    </BoxAtom>
                </BoxAtom>
            </BoxAtom>
        </Background>
    )
}
