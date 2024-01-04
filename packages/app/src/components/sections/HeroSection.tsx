import { motion } from 'framer-motion'
import { Colors } from '@/constants'
import {
    Background,
    BoxAtom,
    TextAtom,
    HeaderImageAtom,
    ImageAtom,
    HeaderGlow,
    LinkButtonAtom,
} from '@/components'
import { getAsset } from '@/utils'
import { screenMaxWidth } from '@/style'
import { Image } from '@/types'

interface Button {
    label: string
    href: string
}
type Props = {
    title: string
    subtitle: string
    buttons: Button[]
} & Image

export const HeroSection = (props: Props) => {
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
                    xs: `url(${getAsset('pattern.svg', 'background')})`,
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
                        imageUrl={getAsset(props.imageUrl)}
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
                    maxWidth: screenMaxWidth,
                    zIndex: 2,
                    width: {
                        xs: '90%',
                        md: '100%',
                    },
                    position: {
                        xs: 'relative',
                        md: 'absolute',
                    },
                    alignItems: {
                        xs: 'start',
                        md: 'center',
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
                >
                    {props.subtitle}
                </TextAtom>
                <TextAtom
                    variant="h3"
                    color={Colors.WHITE}
                    header
                    textTransform="uppercase"
                    sx={{
                        textAlign: {
                            xs: 'left',
                            md: 'center',
                        },
                        fontSize: { xs: 36, md: 72 },
                    }}
                >
                    {props.title}
                </TextAtom>
                <BoxAtom
                    alignment="center"
                    direction="horizontal"
                    sx={{
                        gap: {
                            xs: 2,
                            md: 4,
                        },
                        width: {
                            xs: '100%',
                            md: 'auto',
                        },
                    }}
                >
                    {props.buttons.map((button, index) => (
                        <LinkButtonAtom
                            key={index}
                            label={button.label}
                            href={button.href}
                            fullWidth
                            sx={{
                                width: {
                                    xs: '100%',
                                },
                            }}
                        />
                    ))}
                </BoxAtom>
            </BoxAtom>
            <ImageAtom
                sx={{
                    width: '100%',
                    display: {
                        xs: 'flex',
                        md: 'none',
                    },
                }}
                imageUrl={getAsset(props.imageUrl)}
                imageAlt={props.imageAlt}
            />
            <HeaderGlow />
        </Background>
    )
}
