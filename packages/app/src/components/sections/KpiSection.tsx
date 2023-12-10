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
                        xs: 4,
                        md: 10,
                    },
                }}
            >
                <TextAtom variant="h4" header>
                    {props.tileTitle}
                </TextAtom>
                {props.tiles.map((tile, index) => (
                    <KpiCardMolecule
                        key={index}
                        title={tile.title}
                        description={tile.description}
                        icon={tile.icon}
                    />
                ))}
            </BoxAtom>
        </BoxAtom>
    )
}
