import { Colors } from '@/constants'
import { Typography } from '@mui/material'
import { motion } from 'framer-motion'
import {
    BackgroundPattern,
    FlexBox,
    FlexButton,
    FlexText,
    HeaderImage,
    SectionImage,
} from '..'

export const SmallHeroSection = () => {
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
                    md: 300,
                },
            }}
        >
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
                <FlexText
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
                </FlexText>
                <FlexText variant="h3" color={Colors.WHITE} isHeader>
                    Wij maken impact met IT
                </FlexText>
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
