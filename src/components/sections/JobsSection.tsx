import { Colors } from '@/constants'
import { screenMaxWidth } from '@/style'
import {
    BoxAtom,
    ButtonMolecule,
    CardMolecule,
    AccordionMolecule,
    TextAtom,
} from '@/components'

export const JobsSection = () => {
    return (
        <BoxAtom
            as="section"
            alignment="center"
            bgColor={Colors.LIGHT_BLUE}
            sx={{
                p: {
                    xs: 3,
                    md: 10,
                },
            }}
        >
            <BoxAtom
                direction="horizontal"
                alignment="start"
                space={8}
                sx={{ maxWidth: screenMaxWidth }}
            >
                {/* Job cards */}
                <BoxAtom
                    direction="vertical"
                    space={3}
                    sx={{ minWidth: '50%' }}
                >
                    <TextAtom variant="h4" header>
                        Vacatures
                    </TextAtom>
                    <CardMolecule
                        title="Test Automation Engineer"
                        salary="€3.000 - €4.500"
                        location="Maassluis"
                        url=""
                    />
                    <CardMolecule
                        title="Software Ontwikkelaar"
                        salary="€3.000 - €4.500"
                        location="Den Haag"
                        url=""
                    />
                    <CardMolecule
                        title=".NET Test Automation Engineer"
                        salary="€3.000 - €4.500"
                        location="Rotterdam"
                        url=""
                    />
                    <TextAtom>
                        The quick, brown fox jumps over a lazy dog. DJs flock by
                        when MTV ax quiz prog. Junk MTV quiz graced by fox
                        whelps. Bawds jog, flick quartz, vex nymphs.
                    </TextAtom>
                    <ButtonMolecule
                        label="Alle vacatures"
                        sx={{
                            width: {
                                xs: '100%',
                                md: 'fit-content',
                            },
                        }}
                    />
                </BoxAtom>
                <BoxAtom
                    direction="vertical"
                    space={2}
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'flex',
                        },
                    }}
                >
                    <BoxAtom space={2} sx={{ mb: 3 }}>
                        <TextAtom textTransform="uppercase" color={Colors.BLUE}>
                            Wij verbinden IT’ers met opdrachtgevers
                        </TextAtom>
                        <TextAtom variant="h4" header>
                            IT Professionals voor elkaar
                        </TextAtom>
                        <TextAtom>
                            The quick, brown fox jumps over a lazy dog. DJs
                            flock by when MTV ax quiz prog. Junk MTV quiz graced
                            by fox whelps. Bawds jog, flick quartz, vex nymphs.
                            Waltz, bad nymph, for quick jigs vex! Fox nymphs
                            grab quick-jived waltz. Brick quiz whangs jumpy
                            veldt fox. Bright vixens jump; dozy fowl quack.
                            Quick wafting zephyrs vex bold Jim. Quick zephyrs
                            blow, vexing daft Jim.
                        </TextAtom>
                    </BoxAtom>
                    <BoxAtom space={2} sx={{ mb: 3 }}>
                        <TextAtom variant="h4" header>
                            Op zoek naar een Test engineer?
                        </TextAtom>
                        <TextAtom>
                            The quick, brown fox jumps over a lazy dog. DJs
                            flock by when MTV ax quiz prog. Junk MTV quiz graced
                            by fox whelps. Bawds jog, flick quartz, vex nymphs.
                            Waltz, bad nymph, for quick jigs vex! Fox nymphs
                            grab quick-jived waltz. Brick quiz whangs jumpy
                            veldt fox. Bright vixens jump; dozy fowl quack.
                            Quick wafting zephyrs vex bold Jim. Quick zephyrs
                            blow, vexing daft Jim.
                        </TextAtom>
                    </BoxAtom>
                    <ButtonMolecule label="Plaats een opdracht" />
                </BoxAtom>
                <BoxAtom
                    direction="horizontal"
                    alignment="start"
                    space={8}
                    sx={{ maxWidth: screenMaxWidth }}
                >
                    <BoxAtom
                        direction="vertical"
                        sx={{
                            display: {
                                xs: 'flex',
                                md: 'none',
                            },
                        }}
                    >
                        <AccordionMolecule />
                    </BoxAtom>
                </BoxAtom>
            </BoxAtom>
        </BoxAtom>
    )
}
