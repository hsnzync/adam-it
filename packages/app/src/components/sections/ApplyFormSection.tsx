import { ChangeEvent, useState } from 'react'
import { screenMaxWidth } from '@/style'
import {
    BoxAtom,
    ButtonMolecule,
    InputMolecule,
    TextAtom,
    UploadMolecule,
} from '@/components'
import { Colors } from '@/constants'
import { SxProps, Theme } from '@mui/material'

type Props = {
    title?: string
    contactName: string
    contactPhone: string
    contactEmail: string
    formTitle: string
    buttonText: string
    basic?: boolean
    alignment?: 'start' | 'center' | 'end'
    sx?: SxProps<Theme>
}

export const ApplyFormSection = (props: Props) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
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
            alignment="center"
            bgColor={Colors.LIGHT_BLUE}
            id="apply-form"
            sx={{
                p: {
                    xs: 3,
                    md: 10,
                },
                py: {
                    md: 15,
                },
                ...props.sx,
            }}
        >
            <BoxAtom
                sx={{
                    maxWidth: screenMaxWidth,
                    width: '100%',
                    alignItems: 'start',
                }}
                direction="horizontal"
                alignment={props.alignment ?? 'center'}
                space={10}
            >
                <BoxAtom
                    direction="vertical"
                    sx={{
                        width: {
                            xs: '100%',
                            md: '50%',
                        },
                    }}
                >
                    <TextAtom header variant="h4">
                        {props.formTitle}
                    </TextAtom>
                    <BoxAtom
                        space={2}
                        sx={{
                            mt: 4,
                        }}
                    >
                        <InputMolecule
                            name="name"
                            label="Naam"
                            type="text"
                            onChange={handleChange}
                        />
                        <BoxAtom direction="horizontal" space={2}>
                            <InputMolecule
                                name="email"
                                label="E-mailadres"
                                type="email"
                                onChange={handleChange}
                            />
                            <InputMolecule
                                name="phone"
                                label="Telefoonnummer"
                                type="email"
                                onChange={handleChange}
                            />
                        </BoxAtom>
                        <InputMolecule
                            name="message"
                            label="Motivatie"
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
