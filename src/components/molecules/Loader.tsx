import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { LoaderPattern } from '@/components'
import { Colors } from '@/constants/colors'

export const LoaderMolecule = () => {
    return (
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
            style={{
                position: 'relative',
                zIndex: 10,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    height: '100vh',
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
                        src="/logo/logo-no-text.svg"
                        width={300}
                        height={300}
                        alt={'logo adam it'}
                    />
                </motion.div>
                <LoaderPattern />
            </Box>
        </motion.div>
    )
}
