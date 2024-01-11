import { Colors } from '@/constants'
import { screenMaxWidth } from '@/style'
import {
    BoxAtom,
    TextAtom,
    KpiCardMolecule,
    LinkButtonAtom,
} from '@/components'
import { IconName } from '@/types'
import Link from 'next/link'

interface Props {
    tiles: Tile[]
    title?: string
    tileTitle?: string
    extended?: boolean
}

interface Tile {
    title: string
    description?: string
    icon: IconName
    button_url: string
    button_text: string
}

export const KpiSection = (props: Props) => {
    return (
        <BoxAtom
            as="section"
            alignment="center"
            space={4}
            bgColor={Colors.WHITE}
            sx={{
                position: 'relative',
                p: {
                    xs: 3,
                    md: 0,
                },
                py: {
                    md: 12,
                    lg: 20,
                },
            }}
        >
            <BoxAtom
                alignment="start"
                sx={{
                    width: '100%',
                    maxWidth: screenMaxWidth,
                    gap: {
                        xs: 0,
                        sm: 4,
                        lg: 10,
                    },
                }}
            >
                {props.title && (
                    <TextAtom
                        variant="h2"
                        header
                        sx={{
                            maxWidth: {
                                xs: '100%',
                                md: '50%',
                            },
                        }}
                    >
                        {props.title}
                    </TextAtom>
                )}
                <BoxAtom
                    alignment="start"
                    sx={{
                        width: '100%',
                        flexDirection: {
                            xs: 'column',
                            lg: 'row',
                        },
                    }}
                >
                    {props.tileTitle && (
                        <TextAtom
                            variant="h2"
                            header
                            sx={{
                                py: {
                                    xs: 4,
                                    lg: 3,
                                },
                                px: {
                                    lg: 3,
                                },
                                maxWidth: {
                                    xs: 'none',
                                    lg: 300,
                                },
                            }}
                        >
                            {props.tileTitle}
                        </TextAtom>
                    )}
                    {props.tiles.map((tile, index) => (
                        <KpiCardMolecule
                            key={index}
                            icon={tile.icon}
                            extended={props.extended}
                        >
                            <BoxAtom
                                direction="vertical"
                                sx={{ gap: tile.description ? 2 : 0 }}
                            >
                                <TextAtom variant="h4" header lineHeight={1.3}>
                                    {tile.title}
                                </TextAtom>
                                {tile.description && (
                                    <TextAtom
                                        variant="body1"
                                        sx={{
                                            minHeight: {
                                                lg: props.extended ? 140 : 130,
                                            },
                                        }}
                                    >
                                        {tile.description}
                                    </TextAtom>
                                )}
                                <LinkButtonAtom
                                    label={tile.button_text}
                                    variant="clear"
                                    href={tile.button_url}
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
                            </BoxAtom>
                        </KpiCardMolecule>
                    ))}
                </BoxAtom>
            </BoxAtom>
        </BoxAtom>
    )
}
