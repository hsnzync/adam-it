import { Colors } from '@/constants'
import { screenMaxWidth } from '@/style'
import { BoxAtom, TextAtom, KpiCardMolecule } from '@/components'
import { IconName } from '@/types'

interface Props {
    title?: string
    tileTitle?: string
    tiles: Tile[]
}

interface Tile {
    title: string
    description: string
    icon: IconName
    button_url: string
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
                height: {
                    xs: 'auto',
                    md: 500,
                },
                p: {
                    xs: 3,
                    md: 0,
                },
            }}
        >
            <BoxAtom
                alignment="start"
                space={10}
                sx={{ maxWidth: screenMaxWidth }}
            >
                {props.title && (
                    <TextAtom
                        variant="h4"
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
                    direction="horizontal"
                    alignment="start"
                    sx={{
                        gap: {
                            xs: 0,
                            sm: 4,
                            lg: 10,
                        },
                    }}
                >
                    {props.tileTitle && (
                        <TextAtom
                            variant="h4"
                            header
                            sx={{
                                pr: {
                                    xs: 0,
                                    md: 3,
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
                            buttonUrl={tile.button_url}
                            button
                        >
                            <BoxAtom direction="vertical" space={2}>
                                <TextAtom variant="h6" header lineHeight={1.3}>
                                    {tile.title}
                                </TextAtom>
                                <TextAtom variant="body1">
                                    {tile.description}
                                </TextAtom>
                            </BoxAtom>
                        </KpiCardMolecule>
                    ))}
                </BoxAtom>
            </BoxAtom>
        </BoxAtom>
    )
}
