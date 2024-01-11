import {
    FormControl,
    IconButton,
    InputLabel,
    TextField,
    Tooltip,
} from '@mui/material'
import { ChangeEvent } from 'react'
import { Manrope } from 'next/font/google'
import { Colors } from '@/constants'
import { BoxAtom, IconAtom } from '..'
import { validationTextMapper } from '@/utils'

const manrope = Manrope({ subsets: ['latin'] })

interface Props {
    label: string
    type: string
    name?: string
    value?: string
    textarea?: boolean
    error?: boolean
    placeholder?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputMolecule = (props: Props) => {
    return (
        <FormControl variant="standard" sx={{ width: '100%' }}>
            <BoxAtom
                sx={{
                    height: 20,
                    mb: 1,
                    flexDirection: {
                        xs: 'row',
                    },
                }}
            >
                <InputLabel
                    shrink
                    htmlFor={`${props.name}-input`}
                    sx={{
                        position: 'relative',
                        fontFamily: manrope.style.fontFamily,
                        fontSize: 14,
                        transform: 'none',
                    }}
                >
                    {props.label}
                </InputLabel>
                {props.error && (
                    <Tooltip
                        title={validationTextMapper(props.name ?? '')}
                        sx={{ width: 'fit-content' }}
                    >
                        <IconButton>
                            <IconAtom
                                iconName="info"
                                color={Colors.ERROR_RED}
                                size={22}
                            />
                        </IconButton>
                    </Tooltip>
                )}
            </BoxAtom>
            <TextField
                required
                type={props.type}
                error={props.error}
                multiline={props.textarea}
                id={`${props.name}-input`}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    props.onChange(event)
                }
                sx={{
                    input: {
                        p: 1,
                        px: 2,
                        height: 35,
                    },
                    textarea: {
                        minHeight: '80px !important',
                    },
                    backgroundColor: props.error
                        ? Colors.ERROR_PINK
                        : Colors.WHITE,
                    fontFamily: manrope.style.fontFamily,
                    fontSize: 14,
                }}
            />
        </FormControl>
    )
}
