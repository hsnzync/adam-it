'use client'
import { useEffect, useState } from 'react'
import { HeaderSection, JobsSection, LoadingScreen } from '../components'
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
import { handleFirstVisitOrExpired } from '@/utils'

export default function Home() {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const shouldShowLoadingScreen = handleFirstVisitOrExpired()

        if (shouldShowLoadingScreen) {
            setIsLoading(true)
        }
    }, [isLoading])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false)
        }, 2500)
        return () => clearTimeout(timeoutId)
    }, [])

    const content = isLoading ? (
        <LoadingScreen />
    ) : (
        <motion.div
            animate={{
                opacity: 1,
                transition: { duration: 0.5, ease: 'easeIn' },
                overflow: 'hidden',
            }}
            initial={{ opacity: 0 }}
        >
            <Navigation />
            {/* Header Section */}
            <HeaderSection />
            {/* KPI Section */}
            <KpiSection />
            {/* Voordelen Section */}
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
            {/* Quote section */}
            <QuoteSection
                content="The quick, brown fox jumps over a lazy dog. DJs flock by
                    when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.
                    Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for
                    quick jigs vex! Fox nymphs grab."
                name="Jan Verstegen"
            />
            {/* Vacatures */}
            <JobsSection />
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

            {/* <ImageSlider
                divider
                images={[
                    '/company-logos/uwv-logo.svg',
                    '/company-logos/kadaster-logo.svg',
                    '/company-logos/stedin-logo.png',
                    '/company-logos/rfh-logo.svg',
                ]}
            /> */}
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
            <Footer />
        </motion.div>
    )

    return <main>{content}</main>
}
