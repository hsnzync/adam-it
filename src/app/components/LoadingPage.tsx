import { Colors } from '@/constants/colors'
import { Container } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { LoadingBackgroundPattern } from './LoadingBackground'

export const LoadingScreen = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                height: '100vh',
                maxWidth: 'unset !important',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.DARK_BLUE,
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    easeIn: [0, 0.71, 0.2, 1.01],
                }}
                style={{ zIndex: 5 }}
            >
                <Image
                    src="/logo.svg"
                    width={300}
                    height={300}
                    alt={'logo adam it'}
                />
            </motion.div>
            <LoadingBackgroundPattern />
        </Container>
    )
}
