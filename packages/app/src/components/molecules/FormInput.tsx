import { FormControl, InputLabel, TextField } from '@mui/material'
import { ChangeEvent, ChangeEventHandler } from 'react'

interface Props {
    name: string
    label: string
    type: string
    textarea?: boolean
    error?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const FormInputMolecule = (props: Props) => {
    return (
        <FormControl variant="standard">
            <InputLabel shrink htmlFor={`${props.name}-input`}>
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
                    },
                    textarea: {
                        minHeight: '50px !important',
                    },
                    '.MuiInputBase-root': { backgroundColor: '#fff' },
                }}
            />
        </FormControl>
    )
}
