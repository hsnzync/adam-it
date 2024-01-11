import { SxProps, Theme } from '@mui/material'
import { IconName } from '.'

interface ButtonProps {
    label: string
    icon?: IconName
    href?: string
    variant?: 'outlined' | 'clear'
    sx?: SxProps<Theme>
    disabled?: boolean
    onClick?: (e: any) => void
}

type Button =
    | {
          button: true
          buttonText: string
          buttonUrl: string
      }
    | {
          button: false
      }

export type { ButtonProps, Button }
