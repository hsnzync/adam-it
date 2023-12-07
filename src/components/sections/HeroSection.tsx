import { motion } from 'framer-motion'
import { Colors } from '@/constants'
import {
    Background,
    BoxAtom,
    ButtonMolecule,
    TextAtom,
    HeaderImageAtom,
    SectionImageAtom,
    HeaderGlow,
} from '@/components'

export const HeroSection = () => {
    return (
        <Background
            as="header"
            hasPattern
            position="center"
            alignment="center"
            bgColor={Colors.DARK_BLUE}
            sx={{
                overflow: 'hidden',
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
            <BoxAtom
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
                    <Background
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
                    <HeaderImageAtom
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'flex',
                            },
                        }}
                    />
                </motion.div>
            </BoxAtom>
            <BoxAtom
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
                    bottom: {
                        xs: 'auto',
                        md: 30,
                    },
                    p: {
                        xs: 3,
                        md: 0,
                    },
                }}
            >
                <TextAtom
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
                </TextAtom>
                <TextAtom variant="h3" color={Colors.WHITE} header>
                    Wij maken impact met IT
                </TextAtom>
                <BoxAtom
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
                        mt: {
                            xs: 0,
                            md: 5,
                        },
                    }}
                >
                    <ButtonMolecule
                        label="Werkgevers"
                        sx={{
                            width: {
                                xs: '100%',
                            },
                        }}
                    />
                    <ButtonMolecule
                        label="Kandidaten"
                        sx={{
                            width: {
                                xs: '100%',
                            },
                        }}
                    />
                </BoxAtom>
            </BoxAtom>
            <SectionImageAtom
                sx={{
                    display: {
                        xs: 'flex',
                        md: 'none',
                    },
                }}
                src="/header-image.jpg"
                alt="business meeting adam it"
            />
            <HeaderGlow />
        </Background>
    )
}
