import { Colors } from '@/constants'
import { Html, Head, Main, NextScript } from 'next/document'

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
