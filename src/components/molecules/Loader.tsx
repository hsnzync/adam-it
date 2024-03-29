import { motion } from 'framer-motion'
import { ImageAtom, LoaderPattern } from '@/components'
import { Colors } from '@/constants/colors'
import { getAsset } from '@/utils'

export const LoaderMolecule = () => {
    return (
        <motion.div
            animate={{
                opacity: 0,
                transition: {
                    delay: 2,
                    duration: 200,
                    ease: 'easeOut',
                },
            }}
            initial={{ opacity: 1 }}
            style={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.DARK_BLUE,
                overflow: 'hidden',
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    easeIn: [0, 0.71, 0.2, 1.01],
                }}
                style={{ zIndex: 5, position: 'absolute' }}
            >
                <ImageAtom
                    imageUrl={getAsset('logo-no-text.svg', 'logo')}
                    imageAlt="Logo van ADAM IT, verbindt IT'ers en opdrachtgevers met deskundige dienstverlening."
                    logo
                />
            </motion.div>
            <LoaderPattern />
        </motion.div>
    )
}
