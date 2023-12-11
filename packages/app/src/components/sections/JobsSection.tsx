// 'use client'
import { Colors } from '@/constants'
import { breakspoints, screenMaxWidth } from '@/style'
import {
    BoxAtom,
    ButtonMolecule,
    CardMolecule,
    AccordionMolecule,
    TextAtom,
} from '@/components'
import { Information, Tile } from '@/types'
import { useEffect, useState } from 'react'

interface Props {
    tiles: Tile
    information: Information
}

export const JobsSection = (props: Props) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(window.innerWidth < breakspoints.sm)
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
                    <CardMolecule
                        title="Test Automation Engineer"
                        salary="€3.000 - €4.500"
                        location="Maassluis"
                        url=""
                    />
                    <CardMolecule
                        title="Software Ontwikkelaar"
                        salary="€3.000 - €4.500"
                        location="Den Haag"
                        url=""
                    />
                    <CardMolecule
                        title=".NET Test Automation Engineer"
                        salary="€3.000 - €4.500"
                        location="Rotterdam"
                        url=""
                    />
                    <TextAtom>{props.tiles.caption}</TextAtom>
                    <ButtonMolecule
                        label={props.tiles.button_text}
                        sx={{
                            width: {
                                xs: '100%',
                                md: 'fit-content',
                            },
                        }}
                    />
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
                    <BoxAtom space={2} sx={{ mb: 3 }}>
                        <TextAtom variant="h4" header>
                            {props.information.title_2}
                        </TextAtom>
                        <TextAtom>{props.information.description_2}</TextAtom>
                    </BoxAtom>
                    <ButtonMolecule label={props.information.button_text} />
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
