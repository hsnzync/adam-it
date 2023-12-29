import {
    TextField,
    MenuItem,
    FormControlLabel,
    Checkbox,
    Select,
    InputLabel,
    SelectChangeEvent,
    OutlinedInput,
    ListItemText,
} from '@mui/material'
import { Manrope } from 'next/font/google'
import { useEffect, useState } from 'react'
import { BoxAtom } from '..'
import { JobFilterOption } from '@/types'

const manrope = Manrope({ subsets: ['latin'] })

interface Props {
    label: string
    defaultValue?: string
    options: JobFilterOption[]
    value: string[]
    onChange: (value: string[]) => void
}

export const SelectMolecule = (props: Props) => {
    const [checkedValues, setCheckedValues] = useState<string[]>([])

    const handleChange = (event: SelectChangeEvent<typeof checkedValues>) => {
        const value = event.target.value as string[]
        setCheckedValues(value)
        props.onChange(value)
    }

    return (
        <BoxAtom direction="vertical" sx={{ width: '100%' }}>
            <InputLabel id="filter-list">{props.label}</InputLabel>

            <Select
                multiple
                displayEmpty
                labelId="filter-list"
                label={props.label}
                value={props.value}
                onChange={handleChange}
                renderValue={(selected) => `${selected.length} Selectie`}
                sx={{
                    ul: {
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 10,
                    },
                    label: {
                        fontFamily: manrope.style.fontFamily,
                        fontSize: 14,
                        transform: 'none',
                        position: 'relative',
                    },
                    fieldset: {
                        top: 0,
                        legend: {
                            display: 'none',
                        },
                    },
                }}
            >
                {props.options.map((option, index) => (
                    <MenuItem key={index} value={option.filterName}>
                        <Checkbox
                            checked={props.value.includes(option.filterName)}
                        />
                        <ListItemText primary={option.filterName} />
                    </MenuItem>
                ))}
            </Select>
        </BoxAtom>
    )
}
