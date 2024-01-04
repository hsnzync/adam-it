import NextImage from 'next/image'
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
import { getAsset } from '@/utils'
import { Image } from '@/types'

type Props = {
    sectionTitle?: string
    bgColor: string
    hasBgPattern?: boolean
    title: string
    subtitle?: string
    description: string
    logo?: string
    perks?: string[]
    sx?: SxProps<Theme>
} & Image

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
                    <TextAtom variant="h2" header>
                        {props.sectionTitle}
                    </TextAtom>
                )}
                <BoxAtom
                    direction="horizontal"
                    alignment="center"
                    sx={{
                        position: 'relative',
                        maxWidth: screenMaxWidth,
                        gap: {
                            xs: 3,
                            md: 12,
                        },
                    }}
                >
                    <BoxAtom
                        space={3}
                        sx={{
                            width: {
                                xs: '100%',
                                md: '50%',
                            },
                        }}
                    >
                        {props.logo && (
                            <NextImage
                                src={props.logo}
                                alt="Officieel logo van het bedrijf. Representatief voor samenwerking en dienstverlening."
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
                        <TextAtom>{props.description}</TextAtom>
                        {props.perks && (
                            <List dense>
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
                </BoxAtom>
            </BoxAtom>
        </Background>
    )
}
