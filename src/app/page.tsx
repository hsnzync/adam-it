'use client'
import { useEffect, useRef, useState } from 'react'
import { LoadingScreen } from './components/LoadingPage'
import { motion } from 'framer-motion'
import { Container, Typography } from '@mui/material'
import { Navigation } from './components'

export default function Home() {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false)
        }, 2500)
        return () => clearTimeout(timeoutId)
    }, [])

    const content = isLoading ? (
        <motion.div
            animate={{
                opacity: 0,
                transition: {
                    delay: 2,
                    duration: 0.2,
                    ease: 'easeOut',
                },
            }}
            initial={{ opacity: 1 }}
        >
            <LoadingScreen />
        </motion.div>
    ) : (
        <motion.div
            animate={{
                opacity: 1,
                transition: { duration: 0.5, ease: 'easeIn' },
            }}
            initial={{ opacity: 0 }}
        >
            <Container sx={{ maxWidth: 'none !important', p: '0 !important' }}>
                <Navigation />
                <Container
                    maxWidth="xl"
                    sx={{ minHeight: 400, backgroundColor: '#eee' }}
                >
                    <Container
                        maxWidth="md"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="body2">
                            Wij maken impact met IT
                        </Typography>
                        <Typography variant="h3">Ik ben</Typography>
                    </Container>
                </Container>
            </Container>
        </motion.div>
    )

    return <main>{content}</main>
}
