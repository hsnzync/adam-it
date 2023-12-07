import { Colors } from '@/constants'
import { screenMaxWidth } from '@/style'
import { BoxAtom, TextAtom, KpiCardMolecule } from '@/components'

interface Props {}

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
                    Als IT’er organisaties verder helpen?
                </TextAtom>
                <KpiCardMolecule
                    title="Test Automation Engineering"
                    description="Geautomatiseerde systeem opstellen om (complexe )
                            software te laten testen."
                    icon="computer"
                />
                <KpiCardMolecule
                    title="Software testing op afstand"
                    description="The quick, brown fox jumps over a lazy dog.
                            DJs flock by when MTV ax quiz prog."
                    icon="pin"
                />
                <KpiCardMolecule
                    title="Interim een vaste tester inhuren"
                    description="Een eigen vaste IT Professional inhuren als
                            test automation engineer."
                    icon="person"
                />
            </BoxAtom>
        </BoxAtom>
    )
}
