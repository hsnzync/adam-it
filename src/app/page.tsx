'use client'
import { useEffect, useState } from 'react'
import { LoadingScreen } from './components/LoadingPage'
import { motion } from 'framer-motion'
import {
    Card,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material'
import { FlexButton, Icon, Navigation, TwoColumnSection } from './components'
import { Colors } from '@/constants'
import { IconShaped, FlexBox } from './components'

export default function Home() {
    const [isLoading, setIsLoading] = useState(false)

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
            <FlexBox>
                <Navigation />
                {/* Header Section */}
                <FlexBox
                    as="section"
                    centered
                    sx={{
                        height: 600,
                        backgroundColor: Colors.DARK_BLUE,
                    }}
                >
                    <FlexBox
                        centered
                        direction="vertical"
                        space={4}
                        sx={{
                            height: '100%',
                        }}
                    >
                        <Typography variant="body2" color={Colors.LIGHT_GREY}>
                            Wij maken impact met IT
                        </Typography>
                        <Typography variant="h3" color={Colors.WHITE}>
                            Ik ben
                        </Typography>
                        <FlexBox centered direction="horizontal" space={4}>
                            <FlexButton label="Werkgevers" />
                            <FlexButton label="Kandidaten" />
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
                {/* KPI Section */}
                <FlexBox
                    direction="horizontal"
                    as="section"
                    space={4}
                    sx={{
                        height: 500,
                        backgroundColor: Colors.WHITE,
                        px: 5,
                    }}
                >
                    <FlexBox centered>
                        <Typography variant="h4">
                            Als IT’er organisaties verder helpen?
                        </Typography>
                    </FlexBox>
                    <FlexBox direction="horizontal" centered space={4}>
                        <IconShaped color={Colors.WHITE} iconName="computer" />
                        <FlexBox>
                            <Typography variant="h6">
                                Test Automation Engineering
                            </Typography>
                            <Typography variant="body2">
                                Geautomatiseerde systeem opstellen om (complexe
                                ) software te laten testen.
                            </Typography>
                        </FlexBox>
                    </FlexBox>
                    <FlexBox direction="horizontal" centered space={4}>
                        <IconShaped color={Colors.WHITE} iconName="pin" />
                        <FlexBox>
                            <Typography variant="h6">
                                Software testing op afstand
                            </Typography>
                            <Typography variant="body2">
                                The quick, brown fox jumps over a lazy dog. DJs
                                flock by when MTV ax quiz prog.
                            </Typography>
                        </FlexBox>
                    </FlexBox>
                    <FlexBox direction="horizontal" centered space={4}>
                        <IconShaped color={Colors.WHITE} iconName="person" />
                        <FlexBox>
                            <Typography variant="h6">
                                Interim een vaste tester inhuren
                            </Typography>
                            <Typography variant="body2">
                                Een eigen vaste IT Professional inhuren als test
                                automation engineer.{' '}
                            </Typography>
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
                {/* Voordelen Section */}
                <TwoColumnSection />
                {/* Quote section */}
                <FlexBox
                    as="section"
                    centered
                    direction="vertical"
                    sx={{
                        height: 500,
                        backgroundColor: Colors.WHITE,
                    }}
                >
                    <FlexBox sx={{ maxWidth: 600 }}>
                        <Typography
                            variant="h5"
                            marginBottom={3}
                            color={Colors.ORANGE}
                        >
                            “The quick, brown fox jumps over a lazy dog. DJs
                            flock by when MTV ax quiz prog. Junk MTV quiz graced
                            by fox whelps. Bawds jog, flick quartz, vex nymphs.
                            Waltz, bad nymph, for quick jigs vex! Fox nymphs
                            grab.
                        </Typography>
                        <Typography>- Jan Verstegen</Typography>
                    </FlexBox>
                </FlexBox>
                <FlexBox
                    as="section"
                    centered
                    direction="horizontal"
                    space={8}
                    sx={{
                        height: 600,
                        backgroundColor: Colors.LIGHT_BLUE,
                        px: 5,
                    }}
                >
                    <FlexBox>
                        <FlexBox sx={{ mb: 3 }}>
                            <Typography textTransform="capitalize">
                                Wij verbinden IT’ers met opdrachtgevers
                            </Typography>
                            <Typography>
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
                        <FlexBox>
                            <Typography>
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
                            <FlexButton label="Plaats een opdracht" />
                        </FlexBox>
                    </FlexBox>
                    <FlexBox>
                        <FlexBox sx={{ mb: 3 }}>
                            <Typography textTransform="capitalize">
                                Wij verbinden IT’ers met opdrachtgevers
                            </Typography>
                            <Typography>
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
                        <FlexBox>
                            <Typography>
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
                            <FlexButton label="Plaats een opdracht" />
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </motion.div>
    )

    return <main>{content}</main>
}
