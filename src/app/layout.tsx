import { Colors } from '@/constants/colors'
import { manrope } from '@/style'
import { Footer, Navigation } from '../components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Adam IT - Wij maken impact met IT',
    description: 'Wij maken impact met IT',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body
                style={{ margin: 0, backgroundColor: Colors.DARK_BLUE }}
                className={manrope.className}
            >
                {children}
            </body>
        </html>
    )
}
