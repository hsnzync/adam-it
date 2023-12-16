import { SxProps, Theme } from '@mui/material'
import { IconName } from '.'

interface Button {
    label: string
    icon?: IconName
    variant?: 'outlined' | 'clear'
    sx?: SxProps<Theme>
    disabled?: boolean
    onClick?: (e?: any) => void
}

export type { Button }
