import { Colors } from '@/constants'
import { BoxAtom, TextAtom, SectionImageAtom, Background } from '@/components'

export const SmallHeroSection = () => {
    return (
        <Background
            as="header"
            hasPattern
            hero
            alignment="center"
            position="50% 40%"
            bgColor={Colors.DARK_BLUE}
            sx={{
                height: 350,
                backgroundSize: '200% auto',
            }}
        >
            <BoxAtom
                alignment="center"
                direction="vertical"
                space={1}
                sx={{
                    height: '100%',
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
                    Voor opdrachtgevers
                </TextAtom>
                <TextAtom variant="h3" color={Colors.WHITE} header>
                    Werkgevers
                </TextAtom>
            </BoxAtom>
        </Background>
    )
}
