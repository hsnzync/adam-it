import { useEffect, useState } from 'react'
import { SxProps, Theme } from '@mui/material'
import {
    BadgeMolecule,
    BoxAtom,
    ButtonMolecule,
    CardMolecule,
    InputMolecule,
    LoaderAtom,
    SelectMolecule,
    TextAtom,
} from '@/components'
import { Colors } from '@/constants'
import { Job, JobFilters } from '@/types'
import { filterMapper, formatSalary } from '@/utils'
import client from '../../../client'

interface Filter {
    title: string
    search: string
    job_title: string
    job_type: string
    job_location: string
}
interface Props {
    labels: Filter
    jobs: Job[]
    filters: JobFilters[]
    buttonLabel: string
    plain?: boolean
    sx?: SxProps<Theme>
}

export const JobsListSection = (props: Props) => {
    const [page, setPage] = useState(0)
    const itemsPerPage = 10

    const [searchValue, setSearchValue] = useState('')
    const [selectedFilters, setSelectedFilters] = useState({
        title: [] as string[],
        type: [] as string[],
        location: [] as string[],
    })

    const [filteredJobs, setFilteredJobs] = useState<Job[]>(
        props.jobs.slice(0, itemsPerPage * (page + 1))
    )

    const handleFilterChange = (
        search: string,
        filters: Record<string, string[]>
    ) => {
        return props.jobs.filter((job) => {
            const titleMatch =
                filters.title.length === 0 || filters.title.includes(job.title)
            const typeMatch =
                filters.type.length === 0 || filters.type.includes(job.type)
            const locationMatch =
                filters.location.length === 0 ||
                filters.location.includes(job.location)

            const searchMatch =
                job.title.toLowerCase().includes(search.toLowerCase()) ||
                job.type.toLowerCase().includes(search.toLowerCase()) ||
                job.location.toLowerCase().includes(search.toLowerCase())

            return titleMatch && typeMatch && locationMatch && searchMatch
        })
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const search = event.target.value
        setSearchValue(search)

        const filteredJobs = handleFilterChange(search, selectedFilters)
        setFilteredJobs(filteredJobs.slice(0, itemsPerPage * (page + 1)))
        setPage(page)
    }

    const handleSelectChange = (
        type: 'title' | 'type' | 'location',
        selectedValues: string[]
    ) => {
        const updatedFilters = { ...selectedFilters, [type]: selectedValues }
        const jobs = handleFilterChange(searchValue, updatedFilters)

        setSelectedFilters(updatedFilters)
        setPage(page)
        setFilteredJobs(jobs.slice(0, itemsPerPage * (page + 1)))
    }

    const fetchMoreJobs = async () => {
        const nextPage = page + 1

        const startIndex = itemsPerPage * nextPage
        const endIndex = itemsPerPage * (nextPage + 1)

        const jobsSlice = props.jobs.slice(
            startIndex,
            Math.min(endIndex, props.jobs.length)
        )

        setPage(nextPage)
        setFilteredJobs([...filteredJobs, ...jobsSlice])
    }

    const areFiltersSelected = () => {
        return (
            selectedFilters.location.length > 0 ||
            selectedFilters.title.length > 0 ||
            selectedFilters.type.length > 0
        )
    }

    const showLoadMoreButton =
        filteredJobs.length < props.jobs.length &&
        !searchValue &&
        !areFiltersSelected()

    const handleRemoveFilter = (
        type: 'title' | 'type' | 'location',
        value: string
    ) => {
        const updatedFilters = {
            ...selectedFilters,
            [type]: selectedFilters[type].filter((filter) => filter !== value),
        }
        const jobs = handleFilterChange(searchValue, updatedFilters)

        setSelectedFilters(updatedFilters)
        setPage(page)
        setFilteredJobs(jobs.slice(0, itemsPerPage * (page + 1)))
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
                <TextAtom variant="h4" header>
                    {props.labels.title}
                </TextAtom>
                <InputMolecule
                    label={props.labels.search}
                    type="text"
                    onChange={handleSearchChange}
                    placeholder="Zoeken op termen..."
                />
                <BoxAtom direction="horizontal" space={2}>
                    {props.filters.length > 0 &&
                        props.filters.map((filter, index) => (
                            <SelectMolecule
                                key={index}
                                label={filter.title}
                                options={filter.filterList}
                                value={
                                    selectedFilters[
                                        filterMapper(filter.title.toLowerCase())
                                    ]
                                }
                                onChange={(value) =>
                                    handleSelectChange(
                                        filterMapper(
                                            filter.title.toLowerCase()
                                        ),
                                        value
                                    )
                                }
                            />
                        ))}
                </BoxAtom>
                <BoxAtom
                    direction="horizontal"
                    space={2}
                    sx={{
                        flexWrap: 'wrap',
                        flexDirection: {
                            xs: 'row',
                        },
                        display: areFiltersSelected() ? 'flex' : 'none',
                    }}
                >
                    {Object.entries(selectedFilters).map(([type, filters]) =>
                        filters.map((filter, index) => (
                            <BadgeMolecule
                                key={index}
                                label={filter}
                                onClick={() =>
                                    handleRemoveFilter(
                                        type as 'title' | 'type' | 'location',
                                        filter
                                    )
                                }
                            />
                        ))
                    )}
                </BoxAtom>
                {filteredJobs?.length > 0 &&
                    filteredJobs.map((job, index) => (
                        <CardMolecule
                            key={index}
                            title={job.title}
                            type={job.type}
                            location={job.location}
                            hours={job.hours}
                            salary={formatSalary(job.minSalary, job.maxSalary)}
                            href={`/vacatures/${job.slug?.current}`}
                        />
                    ))}
                {showLoadMoreButton && (
                    <ButtonMolecule
                        label={props.buttonLabel}
                        onClick={fetchMoreJobs}
                    />
                )}
                {filteredJobs?.length === 0 && (
                    <TextAtom
                        alignment="center"
                        color={Colors.BLUE}
                        sx={{ my: 5 }}
                    >
                        Geen resultaten gevonden
                    </TextAtom>
                )}

                {props.jobs?.length === 0 && <LoaderAtom />}
            </BoxAtom>
        </BoxAtom>
    )
}
