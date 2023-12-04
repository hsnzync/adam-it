import { Colors } from '@/constants'
import { Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { BackgroundPattern, FlexBox, FlexButton, HeaderImage } from '..'

export const HeaderSection = () => {
    return (
        <FlexBox
            as="section"
            alignment="center"
            bgColor={Colors.DARK_BLUE}
            sx={{
                position: 'relative',
                height: 730,
                zIndex: 0,
            }}
        >
            <FlexBox
                direction="horizontal"
                sx={{
                    zIndex: 1,
                    width: '100%',
                    height: '100%',
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
                    style={{ width: '50%' }}
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
                    style={{ width: '50%' }}
                >
                    <HeaderImage />
                </motion.div>
            </FlexBox>
            <FlexBox
                alignment="center"
                direction="vertical"
                space={3}
                sx={{
                    height: '100%',
                    zIndex: 2,
                    position: 'absolute',
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
