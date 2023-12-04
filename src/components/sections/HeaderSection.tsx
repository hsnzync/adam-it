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
        <BackgroundPattern
            as="header"
            hasPattern
            position="center"
            alignment="center"
            bgColor={Colors.DARK_BLUE}
            sx={{
                position: 'relative',
                height: {
                    xs: 'auto',
                    md: 730,
                },
                backgroundImage: {
                    xs: 'url(/header/pattern.svg)',
                    md: 'none',
                },
                backgroundSize: {
                    xs: '600% auto',
                    md: '250% auto',
                },
            }}
        >
            <FlexBox
                direction="horizontal"
                sx={{
                    zIndex: 1,
                    width: '100%',
                    height: {
                        xs: 100,
                        md: '100%',
                    },
                    justifyContent: 'space-between',
                }}
            >
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: 1,
                        easeIn: [0, 0.71, 0.2, 1.01],
                    }}
                    style={{ height: '100%', width: '50%' }}
                >
                    <BackgroundPattern
                        position="right"
                        hasPattern
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'flex',
                            },
                        }}
                    />
                </motion.div>
                <motion.div
                    initial={{ x: 60 }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: 1,
                        easeIn: [0, 0.71, 0.2, 1.01],
                    }}
                    style={{ height: '100%', width: '50%' }}
                >
                    <HeaderImage
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'flex',
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
                    position: {
                        xs: 'relative',
                        md: 'absolute',
                    },
                    p: {
                        xs: 3,
                        md: 0,
                    },
                }}
            >
                <Typography
                    variant="body2"
                    color={Colors.BLUE}
                    textTransform="uppercase"
                    sx={{
                        fontSize: {
                            xs: 18,
                            md: 16,
                        },
                    }}
                >
                    In verbinding met IT&apos;ers & opdrachtgevers
                </Typography>
                <Typography variant="h3" color={Colors.WHITE}>
                    Wij maken impact met IT
                </Typography>
                <FlexBox
                    alignment="center"
                    direction="horizontal"
                    sx={{
                        gap: {
                            xs: 2,
                            md: 8,
                        },
                        width: {
                            xs: '100%',
                            md: 'auto',
                        },
                    }}
                >
                    <FlexButton
                        label="Werkgevers"
                        sx={{
                            width: {
                                xs: '100%',
                            },
                        }}
                    />
                    <FlexButton
                        label="Kandidaten"
                        sx={{
                            width: {
                                xs: '100%',
                            },
                        }}
                    />
                </FlexBox>
            </FlexBox>
            <SectionImage
                sx={{
                    display: {
                        xs: 'flex',
                        md: 'none',
                    },
                }}
                src="/header-image.jpg"
                alt="business meeting adam it"
            />
        </BackgroundPattern>
    )
}
