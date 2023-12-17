interface Job {
    title: string
    type: string
    location: string
    hours: string
    salary: string
    section: JobSection[]
}

interface JobSection {
    title: string
    description: any
}

interface Tile {
    title: string
    caption: string
    button_text?: string
    button_url?: string
}

interface Information {
    title: string
    subtitle: string
    description: string
    title_2?: string
    description_2?: string
    button_text?: string
    button_url?: string
}

export type { Information, Tile, Job, JobSection }
