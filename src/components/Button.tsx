import {
    Button as MuiButton,
    Typography,
    Container,
    SxProps,
    Theme,
} from '@mui/material'
import { Icon } from './Icon'
import { Colors } from '@/constants'
import { IconName } from '@/types'

interface Props {
    label: string
    icon?: IconName
    variant?: 'outlined' | 'clear'
    url?: string
    sx?: SxProps<Theme>
    onClick?: () => void
}

export const FlexButton = (props: Props) => {
    const isOutlined = props.variant === 'outlined'
    const isClear = props.variant === 'clear'

    return (
        <MuiButton
            onClick={props.onClick}
            sx={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'row',
                gap: 1.5,
                py: 1,
                px: isClear ? 0 : 2,
                width: 'fit-content',
                textTransform: 'unset',
                border: isOutlined ? `1px solid ${Colors.WHITE}` : undefined,
                backgroundColor:
                    isOutlined || isClear ? 'transparent' : Colors.ORANGE,
                ':hover': {
                    backgroundColor:
                        isOutlined || isClear ? 'transparent' : Colors.RED,
                },
                ...props.sx,
            }}
        >
            <Typography
                className="button-text"
                color={isClear ? Colors.ORANGE : Colors.WHITE}
                sx={{
                    fontSize: {
                        xs: 25,
                        md: 16,
                    },
                }}
            >
                {props.label}
            </Typography>
            <Container
                className="button-icon-container"
                sx={{
                    p: '0 !important',
                    border: !isClear ? '1px solid white' : undefined,
                    backgroundColor: isClear ? Colors.ORANGE : undefined,
                    borderRadius: 1,
                    rotate: '45deg',
                    width: 25,
                    height: 25,
                }}
            >
                <Icon
                    iconName={props.icon ?? 'chevronRight'}
                    color={Colors.WHITE}
                    sx={{
                        rotate: '-45deg',
                        position: 'relative',
                    }}
                />
            </Container>
        </MuiButton>
    )
}
