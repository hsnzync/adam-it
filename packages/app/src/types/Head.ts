interface Head {
    title: string
    name: string
    description: string
    opengraph: Opengraph
    twitter: Twitter
}

interface Opengraph {
    title: string
    description: string
    url: string
}

interface Twitter {
    title: string
    description: string
    url: string
}

export type { Head }
