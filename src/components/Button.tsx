import { Button as MuiButton, Typography, Container } from '@mui/material'
import { Icon } from './Icon'
import { Colors } from '@/constants'
import { ReactNode } from 'react'

interface Props {
    label: string
    variant?: 'outlined' | 'clear'
    url?: string
}

export const FlexButton = (props: Props) => {
    const isOutlined = props.variant === 'outlined'
    const isClear = props.variant === 'clear'

    return (
        <MuiButton
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
            }}
        >
            <Typography color={isClear ? Colors.ORANGE : Colors.WHITE}>
                {props.label}
            </Typography>
            <Container
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
                    iconName="chevronRight"
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
