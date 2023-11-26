import { Button, Typography, Container } from '@mui/material'
import { Icon } from './Icon'
import { Colors } from '@/constants'

interface Props {
    label: string
    bgColor?: string
    hoverBgColor?: string
    borderColor?: string
    iconColor?: string
}

export const NavigationButton = (props: Props) => {
    return (
        <Button
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1.5,
                py: 1,
                px: 2,
                textTransform: 'unset',
                border: `1px solid ${props.borderColor}`,
                backgroundColor: props.bgColor,
                ':hover': {
                    backgroundColor: props.hoverBgColor,
                },
            }}
        >
            <Typography color={Colors.WHITE}>{props.label}</Typography>
            <Container
                sx={{
                    p: '0 !important',
                    border: '1px solid white',
                    borderRadius: 1,
                    rotate: '45deg',
                    width: 25,
                    height: 25,
                }}
            >
                <Icon
                    iconName="chevronRight"
                    color={props.iconColor}
                    sx={{
                        rotate: '-45deg',
                        position: 'relative',
                        left: 3,
                        bottom: 2,
                    }}
                />
            </Container>
        </Button>
    )
}
