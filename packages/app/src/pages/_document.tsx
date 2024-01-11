import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react'
import { Colors } from '@/constants'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body
                style={{
                    margin: 0,
                    backgroundColor: Colors.DARK_BLUE,
                    overflowX: 'hidden',
                }}
            >
                <Main />
                <NextScript />
                <Analytics />
            </body>
        </Html>
    )
}
