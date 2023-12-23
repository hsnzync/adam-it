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
            bgColor={Colors.WHITE}
            sx={{
                width: {
                    md: props.basic ? '20%' : '30%',
                },
                ...props.sx,
            }}
        >
            <ImageAtom
                src={getAsset(props.imageUrl)}
                alt="recruiter apply contact image"
                sx={{
                    img: {
                        height: {
                            xs: 350,
                            md: props.basic ? 150 : 500,
                        },
                        width: {
                            xs: '100%',
                            md: props.basic ? 150 : '100%',
                        },
                    },
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
                    <Link href="" style={{ textDecoration: 'none' }}>
                        <TextAtom variant="body1" header color={Colors.ORANGE}>
                            {props.contactPhone}
                        </TextAtom>
                    </Link>
                    <Link href="" style={{ textDecoration: 'none' }}>
                        <TextAtom variant="body1" header color={Colors.ORANGE}>
                            {props.contactEmail}
                        </TextAtom>
                    </Link>
                </BoxAtom>
            </BoxAtom>
        </BoxAtom>
    )
}
