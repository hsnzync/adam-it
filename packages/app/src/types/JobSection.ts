interface Job {
    title: string
    salary: string
    location: string
    url: string
}

interface Tile {
    title: string
    caption: string
    button_text: string
}

interface Information {
    title: string
    subtitle: string
    description: string
    title_2: string
    description_2: string
    button_text: string
}

export type { Information, Tile, Job }
