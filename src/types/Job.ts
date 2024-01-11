interface Job {
    slug: {
        current: string
    }
    title: string
    type: string
    location: string
    hours: number
    salary: number
    maxSalary?: number
    sections: JobSection[]
}

interface JobSection {
    title: string
    description: any
}

interface JobFilterOption {
    filterName: string
}

interface JobFilters {
    title: string
    filterList: JobFilterOption[]
}

interface Tile {
    title: string
    caption: string
    button_text?: string
    button_url?: string
}

interface InformationContent {
    title: string
    subtitle?: string
    description: string
}
interface Information {
    content: InformationContent[]
    button_text?: string
    button_url?: string
}

export type { Information, Tile, Job, JobSection, JobFilters, JobFilterOption }
