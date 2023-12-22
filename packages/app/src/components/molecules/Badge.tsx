import { List, ListItem, ListItemText, Button } from '@mui/material'
import { Colors } from '@/constants'
import { BoxAtom, TextAtom, IconAtom } from '@/components'

interface Props {
    label: string
    onClick: () => void
}

export const BadgeMolecule = (props: Props) => {
    return (
        <BoxAtom
            direction="horizontal"
            space={1}
            sx={{
                flexDirection: {
                    xs: 'row',
                },
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: Colors.MID_BLUE,
                maxWidth: 200,
                py: 1,
                px: 2,
                borderRadius: 2,
            }}
        >
            <TextAtom
                color={Colors.WHITE}
                sx={{
                    fontSize: 14,
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                }}
            >
                {props.label}
            </TextAtom>
            <Button sx={{ display: 'contents' }} onClick={props.onClick}>
                <IconAtom iconName="delete" color={Colors.WHITE} />
            </Button>
        </BoxAtom>
    )
}
