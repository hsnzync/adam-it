'use client'
import { useEffect, useState } from 'react'
import { LoadingScreen } from '../components/LoadingPage'
import { motion } from 'framer-motion'
import { Typography } from '@mui/material'
import {
    FlexButton,
    ImageTextSection,
    ImageSlider,
    HeaderImage,
    BackgroundPattern,
    QuoteSection,
    KpiSection,
    Navigation,
    Footer,
} from '../components'
import { Colors } from '@/constants'
import { FlexBox, Card } from '../components'
import { screenMaxWidth } from '@/style'

export default function Home() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false)
        }, 2500)
        return () => clearTimeout(timeoutId)
    }, [])

    const content = isLoading ? (
        <motion.div
            animate={{
                opacity: 0,
                transition: {
                    delay: 2,
                    duration: 0.2,
                    ease: 'easeOut',
                },
            }}
            initial={{ opacity: 1 }}
        >
            <LoadingScreen />
        </motion.div>
    ) : (
        <motion.div
            animate={{
                opacity: 1,
                transition: { duration: 0.5, ease: 'easeIn' },
            }}
            initial={{ opacity: 0 }}
        >
            <Navigation />
            {/* Header Section */}
            <FlexBox
                as="section"
                alignment="center"
                bgColor={Colors.DARK_BLUE}
                sx={{
                    height: 730,
                    zIndex: 2,
                }}
            >
                <FlexBox
                    direction="horizontal"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                    <motion.div
                        initial={{ x: -150 }}
                        animate={{ x: -100 }}
                        transition={{
                            duration: 1,
                            easeIn: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        <BackgroundPattern />
                    </motion.div>
                    <motion.div
                        initial={{ x: 60 }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: 1,
                            easeIn: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        <HeaderImage
                            height={730}
                            src="/header-image.jpg"
                            alt="introduction image adam it"
                        />
                    </motion.div>
                </FlexBox>
                <FlexBox
                    alignment="center"
                    direction="vertical"
                    space={4}
                    sx={{
                        height: '100%',
                        zIndex: 2,
                    }}
                >
                    <Typography
                        variant="body2"
                        color={Colors.LIGHT_GREY}
                        textTransform="uppercase"
                    >
                        Wij maken impact met IT
                    </Typography>
                    <Typography variant="h2" color={Colors.WHITE}>
                        Ik ben
                    </Typography>
                    <FlexBox
                        alignment="center"
                        direction="horizontal"
                        space={8}
                    >
                        <FlexButton label="Werkgevers" />
                        <FlexButton label="Kandidaten" />
                    </FlexBox>
                </FlexBox>
            </FlexBox>
            {/* KPI Section */}
            <KpiSection />
            {/* Voordelen Section */}
            <ImageTextSection
                bgPattern
                bgColor={Colors.LIGHT_BLUE}
                title="De voordelen van werken via Adam IT?"
                description="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs."
                perks={[
                    'Goed salaris, markt conform',
                    'Altijd opdrachten genoeg',
                    'Bawds jog, flick quartz, vex nymphs.',
                ]}
                buttonText="Meer over kandidaten"
                buttonUrl=""
            />
            {/* Quote section */}
            <QuoteSection
                content="The quick, brown fox jumps over a lazy dog. DJs flock by
                    when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.
                    Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for
                    quick jigs vex! Fox nymphs grab."
                name="Jan Verstegen"
            />
            {/* Vacatures */}
            <FlexBox
                as="section"
                alignment="center"
                bgColor={Colors.LIGHT_BLUE}
                sx={{
                    p: 10,
                }}
            >
                <FlexBox
                    direction="horizontal"
                    alignment="start"
                    space={8}
                    sx={{ maxWidth: screenMaxWidth }}
                >
                    <FlexBox direction="vertical">
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
                                flock by when MTV ax quiz prog. Junk MTV quiz
                                graced by fox whelps. Bawds jog, flick quartz,
                                vex nymphs. Waltz, bad nymph, for quick jigs
                                vex! Fox nymphs grab quick-jived waltz. Brick
                                quiz whangs jumpy veldt fox. Bright vixens jump;
                                dozy fowl quack. Quick wafting zephyrs vex bold
                                Jim. Quick zephyrs blow, vexing daft Jim.
                            </Typography>
                        </FlexBox>
                        <FlexBox sx={{ mb: 3 }}>
                            <Typography variant="h4">
                                Op zoek naar een Test engineer?
                            </Typography>
                            <Typography>
                                The quick, brown fox jumps over a lazy dog. DJs
                                flock by when MTV ax quiz prog. Junk MTV quiz
                                graced by fox whelps. Bawds jog, flick quartz,
                                vex nymphs. Waltz, bad nymph, for quick jigs
                                vex! Fox nymphs grab quick-jived waltz. Brick
                                quiz whangs jumpy veldt fox. Bright vixens jump;
                                dozy fowl quack. Quick wafting zephyrs vex bold
                                Jim. Quick zephyrs blow, vexing daft Jim.
                            </Typography>
                        </FlexBox>
                        <FlexButton label="Plaats een opdracht" />
                    </FlexBox>
                    <FlexBox
                        direction="vertical"
                        space={3}
                        sx={{ minWidth: '50%' }}
                    >
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
                            The quick, brown fox jumps over a lazy dog. DJs
                            flock by when MTV ax quiz prog. Junk MTV quiz graced
                            by fox whelps. Bawds jog, flick quartz, vex nymphs.
                        </Typography>
                        <FlexButton label="Alle vacatures" variant="clear" />
                    </FlexBox>
                </FlexBox>
            </FlexBox>
            {/* Recente cases */}
            <ImageTextSection
                sectionTitle="Recente cases"
                bgColor={Colors.WHITE}
                logo="/company-logos/uwv-logo.svg"
                title="Geautomatiseerde test applicatie voor het UWV"
                description="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs."
                perks={['Testomgeving opgezet', 'Support', 'Langdurig traject']}
                buttonText="Bekijk de cases"
                buttonUrl=""
            />

            <ImageSlider
                divider
                images={[
                    '/company-logos/uwv-logo.svg',
                    '/company-logos/kadaster-logo.svg',
                    '/company-logos/stedin-logo.png',
                    '/company-logos/rfh-logo.svg',
                ]}
            />
            <Footer />
        </motion.div>
    )

    return <main>{content}</main>
}
