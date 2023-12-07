import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import BottomShape from '@/../public/background/shape-1.svg'
import RightShape from '@/../public/background/shape-2.svg'
import LeftShape from '@/../public/background/shape-3.svg'
import TopShape from '@/../public/background/shape-4.svg'
import { Glow } from '@/components'

export const LoaderPattern = () => {
    const [animationCount, setAnimationCount] = useState(0)
    const [screenSize, setScreenSize] = useState(0)
    const animationLength = 1

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAnimationCount((prevCount: number) => prevCount + 1)
        }, 200)

        if (animationCount === 20) {
            clearInterval(intervalId)
        }
    }, [animationCount])

    useEffect(() => {
        console.log(window.innerWidth)
        setScreenSize(window.innerWidth)
    }, [])

    return (
        <Box sx={{ position: 'relative', height: '100vh', width: '100%' }}>
            <motion.div
                initial={{ y: 200 }}
                animate={{ y: 150 }}
                transition={{
                    duration: animationLength,
                    easeIn: [0, 0.71, 0.2, 1.01],
                }}
                style={{
                    width: '100%',
                    position: 'absolute',
                    padding: '0 !important',
                    maxHeight: 'calc(100vh - 20px)',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bottom: 0,
                }}
            >
                <Image src={BottomShape} alt="bottom shape" />
            </motion.div>

            <motion.div
                initial={{ x: 100 }}
                animate={{ x: 50 }}
                transition={{
                    duration: animationLength,
                    easeIn: [0, 0.71, 0.2, 1.01],
                }}
                style={{
                    position: 'absolute',
                    padding: '0 !important',
                    maxHeight: 'calc(100vh - 20px)',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    right: 0,
                }}
            >
                <Image src={RightShape} alt="right shape" />
            </motion.div>
            <motion.div
                initial={{ x: -100 }}
                animate={{ x: -50 }}
                transition={{
                    duration: animationLength,
                    easeIn: [0, 0.71, 0.2, 1.01],
                }}
                style={{
                    position: 'absolute',
                    padding: '0 !important',
                    width: 'fit-content',
                    maxHeight: 'calc(100vh - 20px)',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    left: 0,
                }}
            >
                <Image src={LeftShape} alt="left shape" />
            </motion.div>
            <motion.div
                initial={{ y: -200 }}
                animate={{ y: -150 }}
                transition={{
                    duration: animationLength,
                    easeIn: [0, 0.71, 0.2, 1.01],
                }}
                style={{
                    width: '100%',
                    position: 'absolute',
                    padding: '0 !important',
                    maxHeight: 'calc(100vh - 20px)',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 0,
                }}
            >
                <Image src={TopShape} alt="top shape" />
            </motion.div>

            {/* Glowing effect */}
            <motion.div
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{
                    duration: animationLength,
                    easeIn: [0, 0.71, 0.2, 1.01],
                }}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}
            >
                <Glow />
            </motion.div>
        </Box>
    )
}
