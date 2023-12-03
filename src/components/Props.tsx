import { SxProps, Theme } from '@mui/material'

export interface Props {
    label: string
    icon?
    IconName
    variant?: 'outlined' | 'clear'
    url?: string
    sx?: SxProps<Theme>
}
