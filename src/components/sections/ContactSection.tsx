import Link from 'next/link'
import { useState } from 'react'
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

interface Props {
    title: string
    contactName: string
    contactPhone: string
    contactEmail: string
    formTitle: string
    buttonText: string
}

export const ContactSection = (props: Props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [file, setFile] = useState<File>()

    const disableSubmit = name === '' || email === '' || message === ''

    // const isEmail = email.includes('@') && email.includes('.')

    const handleSubmit = async () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('message', message)
        if (file) {
            formData.append('file', file)
        }

        try {
            const response = await fetch('/api/submitForm', {
                method: 'POST',
                body: formData,
            })

            if (response.ok) {
                // Form submitted successfully
                console.log('Form submitted successfully')
            } else {
                // Handle error
                console.error('Form submission failed')
            }
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
                    xs: 5,
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
                    alignment="end"
                    space={2}
                    sx={{
                        width: {
                            xs: '100%',
                            md: '40%',
                        },
                    }}
                >
                    <ImageAtom
                        src="/recruiter-image.jpg"
                        alt="recruiter apply contact image"
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
                            md: '30%',
                        },
                    }}
                >
                    <TextAtom header variant="h5">
                        {props.formTitle}
                    </TextAtom>
                    <BoxAtom
                        as="form"
                        space={2}
                        sx={{
                            maxWidth: {
                                xs: 'none',
                                md: 500,
                            },
                            mt: 4,
                        }}
                    >
                        <FormInputMolecule
                            name="name"
                            label="Naam"
                            type="text"
                            onChange={setName}
                        />
                        <FormInputMolecule
                            name="email"
                            label="E-mailadres"
                            type="email"
                            onChange={setEmail}
                        />
                        <FormInputMolecule
                            name="message"
                            label="Bericht"
                            type="text"
                            textarea
                            onChange={setMessage}
                        />
                        <UploadMolecule
                            onUpload={setFile}
                            label="Voeg hier uw bestanden toe"
                        />
                        <ButtonMolecule
                            onClick={handleSubmit}
                            label={props.buttonText}
                            disabled={disableSubmit}
                        />
                    </BoxAtom>
                </BoxAtom>
            </BoxAtom>
        </BoxAtom>
    )
}
