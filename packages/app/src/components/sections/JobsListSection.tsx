import {
    BoxAtom,
    CardMolecule,
    InputMolecule,
    SelectMolecule,
    TextAtom,
} from '@/components'
import { Colors } from '@/constants'
import { Job } from '@/types'
import { SxProps, Theme } from '@mui/material'
import { useState } from 'react'
import { Option } from '@/types'

interface Filter {
    title: string
    search: string
    job_title: string
    job_type: string
    job_location: string
}
interface Props {
    text: Filter
    jobs: Job[]
    filterOptions: {
        job_title: Option[]
        job_type: Option[]
        job_location: Option[]
    }
    plain?: boolean
    sx?: SxProps<Theme>
}

export const JobsListSection = (props: Props) => {
    const [searchValue, setSearchValue] = useState('')
    const [selectedTitleValue, setSelectedTitleValue] = useState<string[]>([])
    const [selectedTypeValue, setSelectedTypeValue] = useState<string[]>([])
    const [selectedLocationValue, setSelectedLocationValue] = useState<
        string[]
    >([])
    const [filteredJobs, setFilteredJobs] = useState<Job[]>(props.jobs)

    const handleFilterChange = (
        search: string,
        selectedTitles: string[],
        selectedTypes: string[],
        selectedLocations: string[]
    ) => {
        const filteredJobs = props.jobs?.filter((job) => {
            const titleMatch =
                selectedTitles.length === 0 ||
                selectedTitles.includes(job.title.toLowerCase())
            const typeMatch =
                selectedTypes.length === 0 ||
                selectedTypes.includes(job.type.toLowerCase())
            const locationMatch =
                selectedLocations.length === 0 ||
                selectedLocations.includes(job.location.toLowerCase())

            const searchMatch =
                job.title.toLowerCase().includes(search.toLowerCase()) ||
                job.type.toLowerCase().includes(search.toLowerCase()) ||
                job.location.toLowerCase().includes(search.toLowerCase())

            return titleMatch && typeMatch && locationMatch && searchMatch
        })

        return filteredJobs
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value
        setSearchValue(searchValue)

        const filteredJobs = handleFilterChange(
            searchValue,
            selectedTitleValue,
            selectedTypeValue,
            selectedLocationValue
        )
        setFilteredJobs(filteredJobs)
    }

    const handleSelectChange = (
        type: 'title' | 'type' | 'location',
        value: string[]
    ) => {
        switch (type) {
            case 'title':
                setSelectedTitleValue(value)
                break
            case 'type':
                setSelectedTypeValue(value)
                break
            case 'location':
                setSelectedLocationValue(value)
                break
            default:
                break
        }

        const filteredJobs = handleFilterChange(
            searchValue,
            selectedTitleValue,
            selectedTypeValue,
            selectedLocationValue
        )
        setFilteredJobs(filteredJobs)
    }

    return (
        <BoxAtom
            as={!props.plain ? 'section' : undefined}
            alignment="center"
            bgColor={Colors.WHITE}
            sx={{
                p: {
                    xs: 3,
                    md: 5,
                },
                py: {
                    md: 10,
                },
                overflow: 'hidden',
                ...props.sx,
            }}
        >
            <BoxAtom space={3} sx={{ width: '100%' }}>
                <TextAtom variant="h5">{props.text.title}</TextAtom>
                <InputMolecule
                    label={props.text.search}
                    type="text"
                    onChange={handleSearchChange}
                />
                <BoxAtom direction="horizontal" space={2}>
                    <SelectMolecule
                        label={props.text.job_title}
                        options={props.filterOptions.job_title}
                        onChange={(value) => handleSelectChange('title', value)}
                    />
                    <SelectMolecule
                        label={props.text.job_type}
                        options={props.filterOptions.job_type}
                        onChange={(value) => handleSelectChange('type', value)}
                    />

                    <SelectMolecule
                        label={props.text.job_location}
                        options={props.filterOptions.job_location}
                        onChange={(value) =>
                            handleSelectChange('location', value)
                        }
                    />
                </BoxAtom>
                {filteredJobs?.length > 0 &&
                    filteredJobs.map((job, index) => (
                        <CardMolecule
                            key={index}
                            title={job.title}
                            type={job.type}
                            location={job.location}
                            hours={job.hours}
                            salary={`€${job.minSalary} - €${job.maxSalary}`}
                            sections={job.section}
                            href=""
                        />
                    ))}

                {props.jobs?.length === 0 && <p>Aan het laden...</p>}
            </BoxAtom>
        </BoxAtom>
    )
}
