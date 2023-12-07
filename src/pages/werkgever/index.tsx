import Head from 'next/head'
import { motion } from 'framer-motion'
import {
    FooterOrganism,
    LogoSliderOrganism,
    ImageTextSection,
    KpiSection,
    NavigationOrganism,
    QuoteSection,
    SmallHeroSection,
    TextImageSection,
} from '@/components'
import { Colors } from '@/constants'

export default function Home() {
    return (
        <>
            <Head>
                <title>Werkgever</title>
                <meta name="werkgever" content="abc werkgever" />
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
                    <SmallHeroSection />
                    <TextImageSection
                        bgColor={Colors.WHITE}
                        title="IT professionals inhuren als detachering."
                        subTitle="WIJ VERBINDEN IT'ERS MET OPDRACHTGEVERS"
                        description="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. "
                    />
                    <KpiSection
                        tileTitle="Wat kun je bij ons vinden?"
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
                        title="Waarom IT’er inhuren via Adam IT?"
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
                        content="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab."
                        name="Jan Verstegen"
                    />
                    <LogoSliderOrganism divider />
                </motion.div>
            </main>
            <FooterOrganism />
        </>
    )
}
