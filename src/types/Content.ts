interface RichContent {
    title: string
    description: [key: any]
}

interface PageRichContent {
    title: string
    subtitle: string
    sections: RichContent[]
}

export type { RichContent, PageRichContent }
