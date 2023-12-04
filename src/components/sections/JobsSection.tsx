import { Colors } from '@/constants'
import { screenMaxWidth } from '@/style'
import { Accordion, Typography } from '@mui/material'
import { FlexBox, FlexButton, Card, FlexAccordion } from '..'

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
                <FlexBox
                    direction="vertical"
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'flex',
                        },
                    }}
                >
                    <FlexBox space={1} sx={{ mb: 3 }}>
                        <Typography
                            textTransform="uppercase"
                            color={Colors.BLUE}
                        >
                            Wij verbinden IT’ers met opdrachtgevers
                        </Typography>
                        <Typography variant="h4">
                            IT Professionals voor elkaar
                        </Typography>
                        <Typography>
                            The quick, brown fox jumps over a lazy dog. DJs
                            flock by when MTV ax quiz prog. Junk MTV quiz graced
                            by fox whelps. Bawds jog, flick quartz, vex nymphs.
                            Waltz, bad nymph, for quick jigs vex! Fox nymphs
                            grab quick-jived waltz. Brick quiz whangs jumpy
                            veldt fox. Bright vixens jump; dozy fowl quack.
                            Quick wafting zephyrs vex bold Jim. Quick zephyrs
                            blow, vexing daft Jim.
                        </Typography>
                    </FlexBox>
                    <FlexBox sx={{ mb: 3 }}>
                        <Typography variant="h4">
                            Op zoek naar een Test engineer?
                        </Typography>
                        <Typography>
                            The quick, brown fox jumps over a lazy dog. DJs
                            flock by when MTV ax quiz prog. Junk MTV quiz graced
                            by fox whelps. Bawds jog, flick quartz, vex nymphs.
                            Waltz, bad nymph, for quick jigs vex! Fox nymphs
                            grab quick-jived waltz. Brick quiz whangs jumpy
                            veldt fox. Bright vixens jump; dozy fowl quack.
                            Quick wafting zephyrs vex bold Jim. Quick zephyrs
                            blow, vexing daft Jim.
                        </Typography>
                    </FlexBox>
                    <FlexButton label="Plaats een opdracht" />
                </FlexBox>
                {/* Job cards */}
                <FlexBox
                    direction="vertical"
                    space={3}
                    sx={{ minWidth: '50%' }}
                >
                    <Typography variant="h4">Vacatures</Typography>
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
                    <Typography>
                        The quick, brown fox jumps over a lazy dog. DJs flock by
                        when MTV ax quiz prog. Junk MTV quiz graced by fox
                        whelps. Bawds jog, flick quartz, vex nymphs.
                    </Typography>
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
