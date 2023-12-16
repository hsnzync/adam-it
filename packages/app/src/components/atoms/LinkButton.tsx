import Link from 'next/link'
import { Button } from '@/types'
import { ButtonMolecule } from '..'

export const LinkButtonAtom = (props: Button & { href: string }) => {
    return (
        <Link href={props.href} style={{ textDecoration: 'none' }}>
            <ButtonMolecule
                label={props.label}
                variant={props.variant}
                icon={props.icon}
                sx={{ ...props.sx }}
            />
        </Link>
    )
}
