import { Button } from '@mui/material'
import { IconAtom } from '@/components'
import { Colors } from '@/constants'

interface Props {
    url: string
}

export const IconButtonMolecule = (props: Props) => {
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
            <IconAtom
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
