import { Colors } from '@/constants'
import { Box } from '@mui/material'

export const Glow = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: Colors.RED,
                filter: 'blur(100px)',
                width: '100vw',
                height: '100px',
            }}
        />
    )
}

export const HeaderGlow = () => {
    return (
        <Box
            sx={{
                position: 'absolute',

                bottom: -150,
                left: 0,
                right: 0,
                backgroundColor: Colors.RED,
                filter: 'blur(100px)',
                width: '50%',
                height: 180,
                margin: 'auto',
                zIndex: 1,
            }}
        />
    )
}
