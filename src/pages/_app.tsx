import { LoadingScreen } from '@/components'
import { breakspoints } from '@/style'
import { handleFirstVisitOrExpired } from '@/utils'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
    const [showLoader, setShowLoader] = useState(false)

    useEffect(() => {
        const shouldShowLoadingScreen = handleFirstVisitOrExpired()
        const isMobile = window.innerWidth < breakspoints.sm

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

    return showLoader ? <LoadingScreen /> : <Component {...pageProps} />
}
