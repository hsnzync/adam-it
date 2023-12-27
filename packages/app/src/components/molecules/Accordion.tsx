import * as React from 'react'
import { styled } from '@mui/material/styles'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'

import { TextAtom, IconAtom } from '@/components'
import { Colors } from '@/constants'

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}))

const AccordionSummary = (props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={
            <IconAtom iconName="expandMore" sx={{ color: Colors.ORANGE }} />
        }
        sx={{
            p: 0,
            backgroundColor: 'transparent',
            flexDirection: 'row-reverse',
            gap: 2,
            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                transform: 'rotate(90deg)',
            },
        }}
        {...props}
    />
)

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

interface Props {
    index: number
    title: string
    description: string
}

export const AccordionMolecule = (props: Props) => {
    const [expanded, setExpanded] = React.useState<string | false>(`panel1`)

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false)
        }

    return (
        <Accordion
            expanded={expanded === `panel${props.index}`}
            onChange={handleChange(`panel${props.index}`)}
            variant="outlined"
            sx={{
                background: 'transparent',
                border: 'none',
            }}
        >
            <AccordionSummary
                aria-controls={`panel${props.index}-content`}
                id={`panel${props.index}-header`}
            >
                <TextAtom>{props.title}</TextAtom>
            </AccordionSummary>
            <AccordionDetails>
                <TextAtom>{props.description}</TextAtom>
            </AccordionDetails>
        </Accordion>
    )
}
