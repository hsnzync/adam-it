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
import { useEffect, useState } from 'react'

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
    plain?: boolean
    sx?: SxProps<Theme>
}

export const JobsListSection = (props: Props) => {
    const [jobs, setJobs] = useState<Job[]>([])

    useEffect(() => {
        setJobs(props.jobs)
        console.log(jobs)
    }, [props.jobs])

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
                    onChange={() => {}}
                />
                <BoxAtom direction="horizontal" space={2}>
                    <SelectMolecule label={props.text.job_title} options={[]} />
                    <SelectMolecule label={props.text.job_type} options={[]} />

                    <SelectMolecule
                        label={props.text.job_location}
                        options={[]}
                    />
                </BoxAtom>
                {Array.isArray(jobs) ? (
                    jobs.map((job, index) => (
                        <CardMolecule
                            key={index}
                            title={job.title}
                            type={job.type}
                            location={job.location}
                            hours={job.hours}
                            salary={job.salary}
                            sections={job.section}
                            href=""
                        />
                    ))
                ) : (
                    // Render a loading state or handle the case where jobs are not yet available
                    <p>Loading...</p>
                )}
            </BoxAtom>
        </BoxAtom>
    )
}
