import { Button, Container, SxProps, Theme } from '@mui/material'
import { IconAtom, TextAtom } from '@/components'
import { Colors } from '@/constants'
import { IconName } from '@/types'

interface Props {
    label: string
    additionalLabel?: string
    icon?: IconName
    variant?: 'outlined' | 'clear'
    url?: string
    sx?: SxProps<Theme>
    disabled?: boolean
    onClick?: (e?: any) => void
}

export const ButtonMolecule = (props: Props) => {
    const isOutlined = props.variant === 'outlined'
    const isClear = props.variant === 'clear'

    return (
        <Button
            type="button"
            aria-label={props.label}
            onClick={props.onClick}
            disabled={props.disabled}
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
                '&.Mui-disabled': {
                    backgroundColor: Colors.GREY,
                },
                ':hover': {
                    backgroundColor:
                        isOutlined || isClear ? 'transparent' : Colors.RED,
                },
                ...props.sx,
            }}
        >
            <TextAtom
                className="button-text"
                color={isClear ? Colors.ORANGE : Colors.WHITE}
            >
                {props.label}
            </TextAtom>
            <Container
                className="button-icon-container"
                sx={{
                    m: 0,
                    p: '0 !important',
                    border: !isClear ? '1px solid white' : undefined,
                    backgroundColor: isClear ? Colors.ORANGE : undefined,
                    borderRadius: 1,
                    rotate: '45deg',
                    width: 25,
                    height: 25,
                }}
            >
                <IconAtom
                    iconName={props.icon ?? 'chevronRight'}
                    color={Colors.WHITE}
                    sx={{
                        rotate: '-45deg',
                        position: 'relative',
                    }}
                />
            </Container>
        </Button>
    )
}
