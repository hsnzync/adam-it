import { Button as MuiButton, Container, CircularProgress } from '@mui/material'
import { IconAtom, TextAtom } from '@/components'
import { Colors } from '@/constants'
import { ButtonProps } from '@/types'

export const ButtonMolecule = (props: ButtonProps & { isLoading: boolean }) => {
    const isOutlined = props.variant === 'outlined'
    const isClear = props.variant === 'clear'

    const iconBorder = () => {
        if (props.isLoading) return 'none'

        if (!isClear) return `1px solid ${Colors.WHITE}`

        return undefined
    }

    return (
        <MuiButton
            type="button"
            href={props.href ?? undefined}
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
                variant="button"
                className="button-text"
                color={isClear ? Colors.ORANGE : Colors.WHITE}
                textTransform="unset"
            >
                {props.label}
            </TextAtom>
            <Container
                component="span"
                className="button-icon-container"
                sx={{
                    m: 0,
                    p: '0 !important',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: iconBorder(),
                    backgroundColor: isClear ? Colors.ORANGE : undefined,
                    borderRadius: 1,
                    rotate: !props.isLoading ? '45deg' : undefined,
                    width: 25,
                    height: 25,
                }}
            >
                {props.isLoading && (
                    <CircularProgress
                        sx={{
                            height: 'auto !important',
                            width: '30px !important',
                            color: `${Colors.WHITE}`,
                        }}
                    />
                )}
                {!props.isLoading && (
                    <IconAtom
                        iconName={props.icon ?? 'chevronRight'}
                        color={Colors.WHITE}
                        sx={{
                            rotate: '-45deg',
                            position: 'relative',
                        }}
                    />
                )}
            </Container>
        </MuiButton>
    )
}
