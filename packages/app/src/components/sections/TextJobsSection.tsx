'use client'
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

export const TextJobsSection = (props: Props) => {
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
                sx={{ maxWidth: screenMaxWidth, width: '100%' }}
            >
                <BoxAtom
                    direction="vertical"
                    space={3}
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'flex',
                        },
                    }}
                >
                    {props.information.content.map((item, index) => (
                        <BoxAtom key={index} space={2}>
                            {item.subtitle && (
                                <TextAtom
                                    textTransform="uppercase"
                                    variant="body2"
                                    color={Colors.BLUE}
                                >
                                    {item.subtitle}
                                </TextAtom>
                            )}
                            <TextAtom variant="h2" header>
                                {item.title}
                            </TextAtom>
                            <TextAtom variant="body2">
                                {item.description}
                            </TextAtom>
                        </BoxAtom>
                    ))}

                    {props.information.button_text && (
                        <LinkButtonAtom
                            label={props.information.button_text}
                            href={props.information.button_url ?? ''}
                        />
                    )}
                </BoxAtom>
                <BoxAtom
                    direction="vertical"
                    space={3}
                    sx={{ minWidth: '50%', width: '100%' }}
                >
                    <TextAtom variant="h2" header>
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
                    <TextAtom variant="body1">{props.tiles.caption}</TextAtom>
                    {props.tiles.button_text && (
                        <LinkButtonAtom
                            label={props.tiles.button_text}
                            href={props.tiles.button_url ?? ''}
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
                            {props.information.content.map((item, index) => (
                                <AccordionMolecule
                                    key={index}
                                    index={index + 1}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </BoxAtom>
                    </BoxAtom>
                )}
            </BoxAtom>
        </BoxAtom>
    )
}
