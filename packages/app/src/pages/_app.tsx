import { LoaderMolecule } from '@/components'
import { breakpoints } from '@/style'
import { handleFirstVisitOrExpired } from '@/utils'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import theme from '../theme/theme'

export default function App({ Component, pageProps }: AppProps) {
    const [showLoader, setShowLoader] = useState(false)

    useEffect(() => {
        const shouldShowLoadingScreen = handleFirstVisitOrExpired()
        const isMobile = window.innerWidth < breakpoints.sm

        if (shouldShowLoadingScreen && !isMobile) {
            setShowLoader(true)
        }
    }, [])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowLoader(false)
        }, 2500)
        return () => clearTimeout(timeoutId)
    }, [])

    return showLoader ? (
        <LoaderMolecule />
    ) : (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
