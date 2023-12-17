import { TextField, MenuItem } from '@mui/material'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

interface Option {
    value: string
    label: string
}

interface Props {
    label: string
    defaultValue?: string
    options: Option[]
}

export const SelectMolecule = (props: Props) => {
    return (
        <TextField
            select
            label={props.label}
            defaultValue={props.defaultValue}
            onChange={(e) => console.log(e.target.value)}
            sx={{
                width: '100%',
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
            {props.options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    )
}
