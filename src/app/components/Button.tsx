import { Button, Typography, Container } from '@mui/material'
import { Icon } from './Icon'
import { Colors } from '@/constants'

interface Props {
    label: string
    outlined?: boolean
}

export const FlexButton = (props: Props) => {
    return (
        <Button
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1.5,
                py: 1,
                px: 2,
                width: 'fit-content',
                textTransform: 'unset',
                border: props.outlined
                    ? `1px solid ${Colors.WHITE}`
                    : undefined,
                backgroundColor: props.outlined ? 'transparent' : Colors.ORANGE,
                ':hover': {
                    backgroundColor: !props.outlined ? Colors.RED : undefined,
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
                    color={props.outlined ? Colors.ORANGE : Colors.WHITE}
                    sx={{
                        rotate: '-45deg',
                        position: 'relative',
                        bottom: 2,
                    }}
                />
            </Container>
        </Button>
    )
}
