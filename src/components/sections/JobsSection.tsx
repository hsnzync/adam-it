import { Colors } from '@/constants'
import { screenMaxWidth } from '@/style'
import { Accordion, Typography } from '@mui/material'
import { FlexBox, FlexButton, Card, FlexAccordion, FlexText } from '..'

export const JobsSection = () => {
    return (
        <FlexBox
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
            <FlexBox
                direction="horizontal"
                alignment="start"
                space={8}
                sx={{ maxWidth: screenMaxWidth }}
            >
                {/* Job cards */}
                <FlexBox
                    direction="vertical"
                    space={3}
                    sx={{ minWidth: '50%' }}
                >
                    <FlexText variant="h4" isHeader>
                        Vacatures
                    </FlexText>
                    <Card
                        title="Test Automation Engineer"
                        salary="€3.000 - €4.500"
                        location="Maassluis"
                        url=""
                    />
                    <Card
                        title="Software Ontwikkelaar"
                        salary="€3.000 - €4.500"
                        location="Den Haag"
                        url=""
                    />
                    <Card
                        title=".NET Test Automation Engineer"
                        salary="€3.000 - €4.500"
                        location="Rotterdam"
                        url=""
                    />
                    <FlexText>
                        The quick, brown fox jumps over a lazy dog. DJs flock by
                        when MTV ax quiz prog. Junk MTV quiz graced by fox
                        whelps. Bawds jog, flick quartz, vex nymphs.
                    </FlexText>
                    <FlexButton
                        label="Alle vacatures"
                        sx={{
                            width: {
                                xs: '100%',
                                md: 'fit-content',
                            },
                        }}
                    />
                </FlexBox>
                <FlexBox
                    direction="vertical"
                    space={2}
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'flex',
                        },
                    }}
                >
                    <FlexBox space={2} sx={{ mb: 3 }}>
                        <FlexText textTransform="uppercase" color={Colors.BLUE}>
                            Wij verbinden IT’ers met opdrachtgevers
                        </FlexText>
                        <FlexText variant="h4" isHeader>
                            IT Professionals voor elkaar
                        </FlexText>
                        <FlexText>
                            The quick, brown fox jumps over a lazy dog. DJs
                            flock by when MTV ax quiz prog. Junk MTV quiz graced
                            by fox whelps. Bawds jog, flick quartz, vex nymphs.
                            Waltz, bad nymph, for quick jigs vex! Fox nymphs
                            grab quick-jived waltz. Brick quiz whangs jumpy
                            veldt fox. Bright vixens jump; dozy fowl quack.
                            Quick wafting zephyrs vex bold Jim. Quick zephyrs
                            blow, vexing daft Jim.
                        </FlexText>
                    </FlexBox>
                    <FlexBox space={2} sx={{ mb: 3 }}>
                        <FlexText variant="h4">
                            Op zoek naar een Test engineer?
                        </FlexText>
                        <FlexText>
                            The quick, brown fox jumps over a lazy dog. DJs
                            flock by when MTV ax quiz prog. Junk MTV quiz graced
                            by fox whelps. Bawds jog, flick quartz, vex nymphs.
                            Waltz, bad nymph, for quick jigs vex! Fox nymphs
                            grab quick-jived waltz. Brick quiz whangs jumpy
                            veldt fox. Bright vixens jump; dozy fowl quack.
                            Quick wafting zephyrs vex bold Jim. Quick zephyrs
                            blow, vexing daft Jim.
                        </FlexText>
                    </FlexBox>
                    <FlexButton label="Plaats een opdracht" />
                </FlexBox>
                <FlexBox
                    direction="horizontal"
                    alignment="start"
                    space={8}
                    sx={{ maxWidth: screenMaxWidth }}
                >
                    <FlexBox
                        direction="vertical"
                        sx={{
                            display: {
                                xs: 'flex',
                                md: 'none',
                            },
                        }}
                    >
                        <FlexAccordion />
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </FlexBox>
    )
}
