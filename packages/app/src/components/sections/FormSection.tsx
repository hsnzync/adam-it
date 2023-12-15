import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { screenMaxWidth } from '@/style'
import {
    BoxAtom,
    ButtonMolecule,
    FormInputMolecule,
    ImageAtom,
    TextAtom,
    UploadMolecule,
} from '@/components'
import { Colors } from '@/constants'
import { getAsset } from '@/utils'

interface Props {
    title?: string
    contactName: string
    contactPhone: string
    contactEmail: string
    formTitle: string
    buttonText: string
    imageUrl: string
    basic?: boolean
}

export const FormSection = (props: Props) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [file, setFile] = useState<File>()

    const disableSubmit =
        form.name === '' || form.email === '' || form.message === ''

    // const isEmail = email.includes('@') && email.includes('.')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', form.name)
        formData.append('email', form.email)
        formData.append('message', form.message)
        if (file) {
            formData.append('file', file)
        }

        try {
            await fetch('/api/submitForm', {
                method: 'POST',
                body: formData,
            }).catch((error) => console.error(error))

            // if (response.ok) {
            //     // Form submitted successfully
            //     console.log('Form submitted successfully')
            // } else {
            //     // Handle error
            //     console.error('Form submission failed')
            // }
        } catch (error) {
            console.error('Error submitting form:', error)
        }
    }

    return (
        <BoxAtom
            as="section"
            alignment="center"
            bgColor={Colors.LIGHT_BLUE}
            sx={{
                p: {
                    xs: 3,
                    md: 10,
                },
                py: {
                    md: 10,
                },
            }}
        >
            <BoxAtom
                sx={{
                    maxWidth: screenMaxWidth,
                    width: '100%',
                    alignItems: 'start',
                }}
                direction="horizontal"
                alignment="center"
                space={10}
            >
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
                                <TextAtom
                                    variant="body1"
                                    header
                                    color={Colors.ORANGE}
                                >
                                    {props.contactPhone}
                                </TextAtom>
                            </Link>
                            <Link
                                href=""
                                style={{ textDecorationColor: Colors.ORANGE }}
                            >
                                <TextAtom
                                    variant="body1"
                                    header
                                    color={Colors.ORANGE}
                                >
                                    {props.contactEmail}
                                </TextAtom>
                            </Link>
                        </BoxAtom>
                    </BoxAtom>
                </BoxAtom>
                <BoxAtom
                    direction="vertical"
                    sx={{
                        width: {
                            xs: '100%',
                            md: '35%',
                        },
                    }}
                >
                    <TextAtom header variant="h5">
                        {props.formTitle}
                    </TextAtom>
                    <BoxAtom
                        space={2}
                        sx={{
                            mt: 4,
                        }}
                    >
                        <FormInputMolecule
                            name="name"
                            label="Naam"
                            type="text"
                            onChange={handleChange}
                        />
                        <FormInputMolecule
                            name="email"
                            label="E-mailadres"
                            type="email"
                            onChange={handleChange}
                        />
                        <FormInputMolecule
                            name="message"
                            label="Bericht"
                            type="text"
                            textarea
                            onChange={handleChange}
                        />
                        <UploadMolecule
                            onUpload={setFile}
                            label="Voeg hier uw bestanden toe"
                        />
                        <ButtonMolecule
                            onClick={(e: SubmitEvent) => handleSubmit(e)}
                            label={props.buttonText}
                        />
                    </BoxAtom>
                </BoxAtom>
            </BoxAtom>
        </BoxAtom>
    )
}
