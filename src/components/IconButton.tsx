import { Button, Typography, Container } from '@mui/material'
import { Icon } from './Icon'
import { Colors } from '@/constants'
import { FlexBox, FlexButton } from '.'
import { IconName } from '@/types'

interface Props {
    url: string
}

export const IconButton = (props: Props) => {
    return (
        <Button
            href={props.url}
            sx={{
                p: '0 !important',
                border: '1px solid white',
                borderRadius: 1,
                rotate: '45deg',
                width: 25,
                height: 25,
                minWidth: 25,
                backgroundColor: Colors.ORANGE,
                ':hover': {
                    backgroundColor: Colors.RED,
                },
            }}
        >
            <Icon
                iconName="chevronRight"
                color={Colors.WHITE}
                sx={{
                    rotate: '-45deg',
                    position: 'relative',
                    bottom: 2,
                }}
            />
        </Button>
    )
}
