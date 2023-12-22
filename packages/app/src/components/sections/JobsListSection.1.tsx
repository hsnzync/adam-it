import {
    BoxAtom,
    CardMolecule,
    InputMolecule,
    SelectMolecule,
    TextAtom,
} from '@/components'
import { Colors } from '@/constants'
import { Job } from '@/types'
import { useState } from 'react'
import { Props } from './JobsListSection'

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
        return props.jobs.filter((job) => {
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
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const search = event.target.value
        setSearchValue(searchValue)

        const filteredJobs = handleFilterChange(
            search,
            selectedTitleValue,
            selectedTypeValue,
            selectedLocationValue
        )
        setFilteredJobs(filteredJobs)
    }

    const handleSelectChange = (
        type: 'title' | 'type' | 'location',
        selectedValues: string[]
    ) => {
        switch (type) {
            case 'title':
                const title = handleFilterChange(
                    searchValue,
                    selectedValues,
                    selectedTypeValue,
                    selectedLocationValue
                )
                setSelectedTitleValue(selectedValues)
                return setFilteredJobs(title)
            case 'type':
                const type = handleFilterChange(
                    searchValue,
                    selectedTitleValue,
                    selectedValues,
                    selectedLocationValue
                )
                setSelectedTypeValue(selectedValues)
                return setFilteredJobs(type)
            case 'location':
                const location = handleFilterChange(
                    searchValue,
                    selectedTitleValue,
                    selectedTypeValue,
                    selectedValues
                )
                setSelectedLocationValue(selectedValues)
                return setFilteredJobs(location)
            default:
                return
        }
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
                <TextAtom variant="h5">{props.labels.title}</TextAtom>
                <InputMolecule
                    label={props.labels.search}
                    type="text"
                    onChange={handleSearchChange}
                />
                <BoxAtom direction="horizontal" space={2}>
                    <SelectMolecule
                        label={props.labels.job_title}
                        options={props.filters.filterList}
                        onChange={(value) => handleSelectChange('title', value)}
                    />
                    <SelectMolecule
                        label={props.labels.job_type}
                        options={props.filters.filterList}
                        onChange={(value) => handleSelectChange('type', value)}
                    />

                    <SelectMolecule
                        label={props.labels.job_location}
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
