import Link from 'next/link'
import { Button as MuiButton } from '@mui/material'
import { IconAtom } from '@/components'
import { Colors } from '@/constants'

type Props =
    | {
          href: string
          link: true
      }
    | {
          link: false
      }

const Button = (props: { link?: boolean }) => (
    <MuiButton
        onClick={(e) => !props.link && e.preventDefault()}
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
            }}
        />
    </MuiButton>
)

export const IconButtonMolecule = (props: Props) => {
    if (props.link) {
        return (
            <Link href={props.href}>
                <Button link />
            </Link>
        )
    } else {
        return <Button />
    }
}
