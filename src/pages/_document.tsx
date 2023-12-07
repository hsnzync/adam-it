import { Navigation } from '@/components'
import { Colors } from '@/constants'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body style={{ margin: 0, backgroundColor: Colors.DARK_BLUE }}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
