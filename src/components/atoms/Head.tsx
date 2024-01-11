import { Head } from '@/types'
import NextHead from 'next/head'

export const HeadAtom = (props: Head) => {
    return (
        <NextHead>
            <title>{props.title || 'Adam IT - IT Dienstverlener'}</title>
            <meta name="description" content={props.description} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />

            <meta property="og:locale" content="nl_NL" />
            <meta property="og:title" content={props.opengraph.title} />
            <meta
                property="og:description"
                content={props.opengraph.description}
            />
            <meta property="og:url" content={props.opengraph.url} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Adam IT" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={props.twitter.title} />
            <meta
                name="twitter:description"
                content={props.twitter.description}
            />
            <meta name="twitter:url" content={props.twitter.url} />
        </NextHead>
    )
}