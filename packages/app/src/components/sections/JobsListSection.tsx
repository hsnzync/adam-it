import { useEffect, useState } from 'react'
import { SxProps, Theme } from '@mui/material'
import {
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
    const [selectedTitleValue, setSelectedTitleValue] = useState<string[]>([])
    const [selectedTypeValue, setSelectedTypeValue] = useState<string[]>([])
    const [selectedLocationValue, setSelectedLocationValue] = useState<
        string[]
    >([])
    const [filteredJobs, setFilteredJobs] = useState<Job[]>(
        props.jobs.slice(0, itemsPerPage * (page + 1))
    )

    const handleFilterChange = (
        search: string,
        selectedTitles: string[],
        selectedTypes: string[],
        selectedLocations: string[]
    ) => {
        return props.jobs.filter((job) => {
            const titleMatch =
                selectedTitles.length === 0 ||
                selectedTitles.includes(job.title)
            const typeMatch =
                selectedTypes.length === 0 || selectedTypes.includes(job.type)
            const locationMatch =
                selectedLocations.length === 0 ||
                selectedLocations.includes(job.location)

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

        const filteredJobs = handleFilterChange(
            search,
            selectedTitleValue,
            selectedTypeValue,
            selectedLocationValue
        )
        setFilteredJobs(filteredJobs.slice(0, itemsPerPage * (page + 1)))
        setPage(page)
    }

    const handleSelectChange = (
        type: 'title' | 'type' | 'location',
        selectedValues: string[]
    ) => {
        switch (type) {
            case 'title':
                const jobs = handleFilterChange(
                    searchValue,
                    selectedValues,
                    selectedTypeValue,
                    selectedLocationValue
                )
                setSelectedTitleValue(selectedValues)

                setPage(page)
                return setFilteredJobs(jobs.slice(0, itemsPerPage * (page + 1)))
            case 'type':
                const type = handleFilterChange(
                    searchValue,
                    selectedTitleValue,
                    selectedValues,
                    selectedLocationValue
                )
                setSelectedTypeValue(selectedValues)

                setPage(page)
                return setFilteredJobs(type.slice(0, itemsPerPage * (page + 1)))
            case 'location':
                const location = handleFilterChange(
                    searchValue,
                    selectedTitleValue,
                    selectedTypeValue,
                    selectedValues
                )
                setSelectedLocationValue(selectedValues)

                setPage(page)
                return setFilteredJobs(
                    location.slice(0, itemsPerPage * (page + 1))
                )
            default:
                return
        }
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
            selectedTitleValue.length > 0 ||
            selectedTypeValue.length > 0 ||
            selectedLocationValue.length > 0
        )
    }

    const showLoadMoreButton =
        filteredJobs.length < props.jobs.length &&
        !searchValue &&
        !areFiltersSelected()

    // WILL DO LATER

    // const handleRemoveFilter = (value: string) => {
    //     const updatedTitleFilter = selectedTitleValue.filter(
    //         (filter) => filter !== value
    //     )
    //     const updatedLocationFilter = selectedLocationValue.filter(
    //         (filter) => filter !== value
    //     )
    //     const updatedTypeFilter = selectedTypeValue.filter(
    //         (filter) => filter !== value
    //     )

    //     const updatedFilteredJobs = handleFilterChange(
    //         searchValue,
    //         updatedTitleFilter,
    //         updatedLocationFilter,
    //         updatedTypeFilter
    //     )

    //     setFilteredJobs(updatedFilteredJobs)
    //     setSelectedTitleValue(updatedTitleFilter)
    //     setSelectedLocationValue(updatedLocationFilter)
    //     setSelectedTypeValue(updatedTypeFilter)
    // }

    // const activeFilterListMapper = (value: string): string[] => {
    //     switch (value) {
    //         case 'functie':
    //             return selectedTitleValue
    //         case 'type':
    //             return selectedTypeValue
    //         case 'locatie':
    //             return selectedLocationValue
    //         default:
    //             return []
    //     }
    // }

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
                    {props.filters.length > 0 &&
                        props.filters.map((filter, index) => (
                            <SelectMolecule
                                key={index}
                                label={filter.title}
                                options={filter.filterList}
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
                {/* <BoxAtom
                    direction="horizontal"
                    space={2}
                    sx={{
                        flexWrap: 'wrap',
                        flexDirection: {
                            xs: 'row',
                        },
                    }}
                >
                    {selectedLocationValue.map((filter, index) => (
                        <BadgeMolecule
                            key={index}
                            label={filter}
                            onClick={() => handleRemoveFilter(filter)}
                        />
                    ))}
                    {selectedTypeValue.map((filter, index) => (
                        <BadgeMolecule
                            key={index}
                            label={filter}
                            onClick={() => handleRemoveFilter(filter)}
                        />
                    ))}
                    {selectedTitleValue.map((filter, index) => (
                        <BadgeMolecule
                            key={index}
                            label={filter}
                            onClick={() => handleRemoveFilter(filter)}
                        />
                    ))}
                </BoxAtom> */}
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
