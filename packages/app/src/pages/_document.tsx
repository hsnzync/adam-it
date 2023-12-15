import { Html, Head, Main, NextScript } from 'next/document'
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
            </body>
        </Html>
    )
}
