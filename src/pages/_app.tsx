import { CookieBannerMolecule, LoaderMolecule, ToastAtom } from '@/components'
import { breakpoints } from '@/style'
import { handleFirstVisitOrExpired } from '@/utils'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import theme from '../theme/theme'

export default function App({ Component, pageProps }: AppProps) {
    const [showLoader, setShowLoader] = useState(false)
    const [showCookieBanner, setShowCookieBanner] = useState(true)
    const [showAfterDelay, setShowAfterDelay] = useState(false)

    useEffect(() => {
        const shouldShowLoadingScreen = handleFirstVisitOrExpired()
        const isMobile = window.innerWidth < breakpoints.sm

        if (shouldShowLoadingScreen && !isMobile) {
            setShowLoader(true)
        }
    }, [])

    useEffect(() => {
        const hasConsent = localStorage.getItem('cookie-consent')
        setShowCookieBanner(!hasConsent)

        const delayTimeoutId = setTimeout(() => {
            setShowAfterDelay(true)
        }, 100)

        const loaderTimeoutId = setTimeout(() => {
            setShowLoader(false)
        }, 2500)
        return () => {
            clearTimeout(delayTimeoutId)
            clearTimeout(loaderTimeoutId)
        }
    }, [])

    const handleConsent = () => {
        localStorage.setItem('cookie-consent', 'true')
        setShowCookieBanner(false)
    }

    return showLoader ? (
        <LoaderMolecule />
    ) : (
        <ThemeProvider theme={theme}>
            <ToastAtom />
            <Component {...pageProps} />
            {showCookieBanner && showAfterDelay && (
                <CookieBannerMolecule
                    onAccept={handleConsent}
                    onDismiss={() => setShowCookieBanner(false)}
                />
            )}
        </ThemeProvider>
    )
}
