import { motion } from 'framer-motion'
import { Colors } from '@/constants'
import {
    Background,
    BoxAtom,
    ButtonMolecule,
    TextAtom,
    HeaderImageAtom,
    ImageAtom,
    HeaderGlow,
    LinkButtonAtom,
} from '@/components'
import { getAsset } from '@/utils'

interface Button {
    label: string
    href: string
}
interface Props {
    title: string
    subtitle: string
    imageUrl: string
    buttons: Button[]
}

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
                    {props.subtitle}
                </TextAtom>
                <TextAtom variant="h3" color={Colors.WHITE} header>
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
                    display: {
                        xs: 'flex',
                        md: 'none',
                    },
                }}
                src={getAsset(props.imageUrl)}
                alt="business meeting adam it"
            />
            <HeaderGlow />
        </Background>
    )
}
