import Head from 'next/head'

import { motion } from 'framer-motion'
import {
    HeroSection,
    JobsSection,
    ImageTextSection,
    LogoSliderOrganism,
    QuoteSection,
    KpiSection,
    FooterOrganism,
    NavigationOrganism,
} from '@/components'
import { Colors } from '@/constants'

export default function Home() {
    return (
        <>
            <Head>
                <title>Adam IT - Wij maken impact met IT</title>
                <meta
                    name="Adam IT - Wij maken impact met IT"
                    content="Wij maken impact met IT"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavigationOrganism />
            <main>
                <motion.div
                    animate={{
                        opacity: 1,
                        transition: { duration: 0.5, ease: 'easeIn' },
                    }}
                    initial={{ opacity: 0 }}
                >
                    <HeroSection />
                    <KpiSection
                        tileTitle="Als IT’er organisaties verder helpen?"
                        tiles={[
                            {
                                title: 'Test Automation Engineering',
                                description:
                                    'Geautomatiseerde systeem opstellen om (complexe) software te laten testen.',
                                icon: 'computer',
                            },
                            {
                                title: 'Software testing op afstand',
                                description:
                                    'The quick, brown fox jumps over a lazy dog, DJs flock by when MTV ax quiz prog.',
                                icon: 'pin',
                            },
                            {
                                title: 'Interim een vaste tester inhuren',
                                description:
                                    'Een eigen vaste IT Professional inhuren als test automation engineer.',
                                icon: 'person',
                            },
                        ]}
                    />
                    <ImageTextSection
                        hasBgPattern
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
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'flex',
                            },
                        }}
                    />
                    <QuoteSection
                        content="The quick, brown fox jumps over a lazy dog. DJs flock by
                  when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.
                  Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for
                  quick jigs vex! Fox nymphs grab."
                        name="Jan Verstegen"
                    />
                    <JobsSection />
                    <ImageTextSection
                        sectionTitle="Recente cases"
                        bgColor={Colors.WHITE}
                        logo="/company-logos/uwv-logo.svg"
                        title="Geautomatiseerde test applicatie voor het UWV"
                        description="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs."
                        perks={[
                            'Testomgeving opgezet',
                            'Support',
                            'Langdurig traject',
                        ]}
                        buttonText="Bekijk de cases"
                        buttonUrl=""
                    />

                    <LogoSliderOrganism divider />
                    <ImageTextSection
                        hasBgPattern
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
                        sx={{
                            display: {
                                xs: 'flex',
                                md: 'none',
                            },
                        }}
                    />
                </motion.div>
            </main>
            <FooterOrganism />
        </>
    )
}
