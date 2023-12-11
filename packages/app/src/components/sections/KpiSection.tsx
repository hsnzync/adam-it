import { Colors } from '@/constants'
import { screenMaxWidth } from '@/style'
import { BoxAtom, TextAtom, KpiCardMolecule } from '@/components'
import { IconName } from '@/types'

interface Props {
    tileTitle: string
    tiles: Tile[]
}

interface Tile {
    title: string
    description: string
    icon: IconName
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
                direction="horizontal"
                alignment="start"
                sx={{
                    maxWidth: screenMaxWidth,
                    gap: {
                        xs: 0,
                        sm: 4,
                        lg: 10,
                    },
                }}
            >
                <TextAtom variant="h4" header sx={{ pr: 3 }}>
                    {props.tileTitle}
                </TextAtom>
                {props.tiles.map((tile, index) => (
                    <KpiCardMolecule key={index} icon={tile.icon} button>
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
    )
}
