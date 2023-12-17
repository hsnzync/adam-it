import { FormControl, InputLabel, TextField } from '@mui/material'
import { ChangeEvent } from 'react'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

interface Props {
    label: string
    type: string
    name?: string
    textarea?: boolean
    error?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputMolecule = (props: Props) => {
    return (
        <FormControl variant="standard">
            <InputLabel
                shrink
                htmlFor={`${props.name}-input`}
                sx={{
                    fontFamily: manrope.style.fontFamily,
                    fontSize: 14,
                    transform: 'none',
                }}
            >
                {props.label}
            </InputLabel>
            <TextField
                type={props.type}
                error={props.error}
                multiline={props.textarea}
                id={`${props.name}-input`}
                name={props.name}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    props.onChange(event)
                }
                sx={{
                    mt: 3,
                    input: {
                        p: 1,
                        height: 35,
                    },
                    textarea: {
                        minHeight: '50px !important',
                    },
                    fontFamily: manrope.style.fontFamily,
                    fontSize: 14,
                    '.MuiInputBase-root': { backgroundColor: '#fff' },
                }}
            />
        </FormControl>
    )
}
