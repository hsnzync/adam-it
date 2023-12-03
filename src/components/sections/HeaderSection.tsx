import { Colors } from '@/constants'
import { Typography } from '@mui/material'
import { motion } from 'framer-motion'
import {
    BackgroundPattern,
    FlexBox,
    FlexButton,
    HeaderImage,
    SectionImage,
} from '..'

export const HeaderSection = () => {
    return (
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
                    position: {
                        xs: 'relative',
                        md: 'absolute',
                    },
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
                    <SectionImage
                        src="/header-image.jpg"
                        alt="introduction image adam it"
                        sx={{
                            display: {
                                xs: 'block',
                                md: 'none',
                            },
                        }}
                    />
                    <HeaderImage
                        height={730}
                        src="/header-image.jpg"
                        alt="introduction image adam it"
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'block',
                            },
                        }}
                    />
                </motion.div>
            </FlexBox>
            <FlexBox
                alignment="center"
                direction="vertical"
                space={3}
                sx={{
                    height: '100%',
                    zIndex: 2,
                }}
            >
                <Typography
                    variant="body2"
                    color={Colors.BLUE}
                    textTransform="uppercase"
                >
                    In verbinding met IT&apos;ers & opdrachtgevers
                </Typography>
                <Typography variant="h2" color={Colors.WHITE}>
                    Wij maken impact met IT
                </Typography>
                <FlexBox alignment="center" direction="horizontal" space={8}>
                    <FlexButton label="Werkgevers" />
                    <FlexButton label="Kandidaten" />
                </FlexBox>
            </FlexBox>
        </FlexBox>
    )
}
