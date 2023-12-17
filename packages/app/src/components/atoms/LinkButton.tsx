import Link from 'next/link'
import { Button } from '@/types'
import { ButtonMolecule } from '..'

export const LinkButtonAtom = (
    props: Button & { fullWidth?: boolean; href: string }
) => {
    return (
        <Link
            href={props.href}
            style={{
                textDecoration: 'none',
                width: props.fullWidth ? '100%' : undefined,
            }}
        >
            <ButtonMolecule
                label={props.label}
                variant={props.variant}
                icon={props.icon}
                sx={{ ...props.sx }}
            />
        </Link>
    )
}
