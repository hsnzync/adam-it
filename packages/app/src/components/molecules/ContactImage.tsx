import { Colors } from '@/constants'
import { getAsset } from '@/utils'
import Link from 'next/link'
import { BoxAtom, ImageAtom, TextAtom } from '@/components'

interface Props {
    title?: string
    contactName: string
    contactPhone: string
    contactEmail: string
    imageUrl: string
    basic?: boolean
}

export const ContactImageMolecule = (props: Props) => {
    return (
        <BoxAtom
            direction="vertical"
            space={2}
            sx={{
                width: {
                    xs: '100%',
                    md: props.basic ? '20%' : '30%',
                },
                alignItems: {
                    xs: 'flex-start',
                    md: 'flex-end',
                },
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
                <TextAtom variant="h5" header>
                    {props.title}
                </TextAtom>
                <TextAtom variant="body1" header>
                    {props.contactName}
                </TextAtom>
                <BoxAtom>
                    <Link
                        href=""
                        style={{ textDecorationColor: Colors.ORANGE }}
                    >
                        <TextAtom variant="body1" header color={Colors.ORANGE}>
                            {props.contactPhone}
                        </TextAtom>
                    </Link>
                    <Link
                        href=""
                        style={{ textDecorationColor: Colors.ORANGE }}
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
