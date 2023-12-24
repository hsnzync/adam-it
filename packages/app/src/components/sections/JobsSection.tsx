// 'use client'
import { Colors } from '@/constants'
import { breakpoints, screenMaxWidth } from '@/style'
import {
    BoxAtom,
    CardMolecule,
    AccordionMolecule,
    TextAtom,
    LinkButtonAtom,
    LoaderAtom,
} from '@/components'
import { Information, Job, Tile } from '@/types'
import { useEffect, useState } from 'react'
import { formatSalary } from '@/utils'

interface Props {
    tiles: Tile
    information: Information
    jobs: Job[]
}

export const JobsSection = (props: Props) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(window.innerWidth < breakpoints.sm)
    }, [])

    return (
        <BoxAtom
            as="section"
            alignment="center"
            bgColor={Colors.LIGHT_BLUE}
            sx={{
                p: {
                    xs: 3,
                    md: 10,
                },
                py: {
                    md: 10,
                },
            }}
        >
            <BoxAtom
                direction="horizontal"
                alignment="start"
                space={8}
                sx={{ maxWidth: screenMaxWidth }}
            >
                {/* Job cards */}
                <BoxAtom
                    direction="vertical"
                    space={3}
                    sx={{ minWidth: '50%' }}
                >
                    <TextAtom variant="h4" header>
                        {props.tiles.title}
                    </TextAtom>
                    {props.jobs.length > 0 &&
                        props.jobs.map((job, index) => (
                            <CardMolecule
                                key={index}
                                title={job.title}
                                type={job.type}
                                location={job.location}
                                hours={job.hours}
                                salary={formatSalary(
                                    job.minSalary,
                                    job.maxSalary
                                )}
                                href={`/vacatures/${job.slug.current}`}
                            />
                        ))}
                    {props.jobs.length === 0 && <LoaderAtom />}
                    <TextAtom>{props.tiles.caption}</TextAtom>
                    {props.tiles.button_text && (
                        <LinkButtonAtom
                            label={props.tiles.button_text}
                            href={props.tiles.button_url ?? ''}
                        />
                    )}
                </BoxAtom>
                <BoxAtom
                    direction="vertical"
                    space={2}
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'flex',
                        },
                    }}
                >
                    <BoxAtom space={2} sx={{ mb: 3 }}>
                        <TextAtom textTransform="uppercase" color={Colors.BLUE}>
                            {props.information.subtitle}
                        </TextAtom>
                        <TextAtom variant="h4" header>
                            {props.information.title}
                        </TextAtom>
                        <TextAtom>{props.information.description}</TextAtom>
                    </BoxAtom>

                    {props.information.title_2 &&
                        props.information.description_2 && (
                            <BoxAtom space={2} sx={{ mb: 3 }}>
                                <TextAtom variant="h4" header>
                                    {props.information.title_2}
                                </TextAtom>
                                <TextAtom>
                                    {props.information.description_2}
                                </TextAtom>
                            </BoxAtom>
                        )}
                    {props.information.button_text && (
                        <LinkButtonAtom
                            label={props.information.button_text}
                            href={props.information.button_url ?? ''}
                        />
                    )}
                </BoxAtom>
                {isMobile && (
                    <BoxAtom
                        direction="horizontal"
                        alignment="start"
                        space={8}
                        sx={{ maxWidth: screenMaxWidth }}
                    >
                        <BoxAtom
                            direction="vertical"
                            sx={{
                                display: {
                                    xs: 'flex',
                                    md: 'none',
                                },
                            }}
                        >
                            <AccordionMolecule />
                        </BoxAtom>
                    </BoxAtom>
                )}
            </BoxAtom>
        </BoxAtom>
    )
}
