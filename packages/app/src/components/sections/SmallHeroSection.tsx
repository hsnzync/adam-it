import { Colors } from '@/constants'
import { BoxAtom, TextAtom, Background, HeaderGlow } from '@/components'

interface Props {
    title: string
    subtitle: string
}

export const SmallHeroSection = (props: Props) => {
    return (
        <Background
            as="header"
            hasPattern
            hero
            alignment="center"
            position="50% 40%"
            bgColor={Colors.DARK_BLUE}
            sx={{
                height: {
                    xs: 250,
                    md: 350,
                },
                overflow: 'hidden',
                position: 'relative',
                backgroundSize: {
                    xs: '350% auto',
                    md: '200% auto',
                },
            }}
        >
            <BoxAtom
                direction="vertical"
                sx={{
                    height: '100%',
                    width: {
                        xs: '90%',
                        md: '100%',
                    },
                    px: {
                        xs: 3,
                        md: 0,
                    },
                    py: {
                        xs: 4,
                        md: 12,
                    },
                    justifyContent: 'end',
                    alignItems: {
                        xs: 'start',
                        md: 'center',
                    },
                    zIndex: 3,
                }}
            >
                <TextAtom
                    variant="body2"
                    color={Colors.BLUE}
                    textTransform="uppercase"
                    sx={{
                        fontSize: 16,
                    }}
                >
                    {props.subtitle}
                </TextAtom>
                <TextAtom
                    variant="h3"
                    color={Colors.WHITE}
                    header
                    sx={{
                        fontSize: {
                            xs: 35,
                            md: 45,
                        },
                    }}
                >
                    {props.title}
                </TextAtom>
            </BoxAtom>
            <HeaderGlow />
        </Background>
    )
}
