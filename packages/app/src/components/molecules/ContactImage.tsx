import { Colors } from '@/constants'
import { getAsset } from '@/utils'
import Link from 'next/link'
import { BoxAtom, ImageAtom, TextAtom } from '@/components'
import { SxProps, Theme } from '@mui/material'

interface Props {
    title?: string
    contactName: string
    contactPhone: string
    contactEmail: string
    imageUrl: string
    basic?: boolean
    sx?: SxProps<Theme>
}

export const ContactImageMolecule = (props: Props) => {
    return (
        <BoxAtom
            direction="vertical"
            alignment="start"
            space={2}
            sx={{
                width: {
                    md: props.basic ? '20%' : '30%',
                },
                display: {
                    sm: 'none',
                    md: 'initial',
                },
                ...props.sx,
            }}
        >
            <ImageAtom
                imageUrl={getAsset(props.imageUrl)}
                imageAlt="Adam IT recruiter, vertegenwoordiger van het human resources team van het bedrijf in een professionele setting."
                sx={{
                    img: {
                        height: {
                            xs: 400,
                            md: props.basic ? 150 : 500,
                        },
                        width: {
                            xs: '100%',
                            md: props.basic ? 150 : '100%',
                        },
                    },
                    mb: 3,
                }}
            />
            <BoxAtom alignment="start" space={2}>
                {props.title && (
                    <TextAtom variant="h5" header>
                        {props.title}
                    </TextAtom>
                )}
                <TextAtom variant="h6" header>
                    {props.contactName}
                </TextAtom>
                <BoxAtom>
                    <Link
                        href="tel:0102333923"
                        style={{ textDecoration: 'none' }}
                    >
                        <TextAtom variant="body1" header color={Colors.ORANGE}>
                            {props.contactPhone}
                        </TextAtom>
                    </Link>
                    <Link
                        href="mailto:info@adamit.nl"
                        style={{ textDecoration: 'none' }}
                    >
                        <TextAtom variant="body1" header color={Colors.ORANGE}>
                            {props.contactEmail}
                        </TextAtom>
                    </Link>
                </BoxAtom>
            </BoxAtom>
        </BoxAtom>
    )
}
