import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { screenMaxWidth } from '@/style'
import {
    BoxAtom,
    ButtonMolecule,
    ContactImageMolecule,
    InputMolecule,
    TextAtom,
    UploadMolecule,
} from '@/components'
import { Colors } from '@/constants'
import { SxProps, Theme } from '@mui/material'
import toast from 'react-hot-toast'
import { validateEmail, validateName } from '@/utils'

type Props = {
    title?: string
    contactName: string
    contactPhone: string
    contactEmail: string
    formTitle: string
    buttonText: string
    imageUrl: string
    basic?: boolean
    alignment?: 'start' | 'center' | 'end'
    sx?: SxProps<Theme>
}

export const ContactFormSection = (props: Props) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [file, setFile] = useState<File | null>(null)
    const [status, setStatus] = useState(false)
    const [disableSubmit, setDisableSubmit] = useState(false)
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isValidPhone, setIsValidPhone] = useState(true)
    const [isValidName, setIsValidName] = useState(true)

    useEffect(() => {
        if (status) {
            toast.success(
                'Bedankt! We nemen zo spoedig mogelijk contact met je op.'
            )
        }
    }, [status])

    useEffect(() => {
        setDisableSubmit(
            form.name === '' || form.email === '' || form.message === ''
        )
    }, [form.name, form.email, form.message])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value,
        })
    }

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const emailIsValid = validateEmail(form.email)
        const nameIsValid = validateName(form.name)

        setIsValidEmail(emailIsValid)
        setIsValidName(nameIsValid)

        if (!emailIsValid && !nameIsValid) return

        setDisableSubmit(true)

        if (emailIsValid && nameIsValid) {
            try {
                const formData = new FormData()
                formData.set('name', form.name)
                formData.set('email', form.email)
                formData.set('message', form.message)
                formData.set('subject', 'Bericht ontvangen')
                if (file) {
                    formData.set('file', file)
                }

                try {
                    setDisableSubmit(true)

                    const response = await fetch('/api/submitForm', {
                        method: 'POST',
                        body: formData,
                    })

                    const data = await response.json()
                    setStatus(data)
                } catch (error) {
                    console.error(error)
                } finally {
                    setDisableSubmit(false)
                    setForm({
                        name: '',
                        email: '',
                        message: '',
                    })
                }
            } catch (err) {
                console.error(err)
            }
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
                    md: 0,
                },
                py: {
                    md: 10,
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
                <ContactImageMolecule
                    title={props.title}
                    contactName={props.contactName}
                    contactPhone={props.contactPhone}
                    contactEmail={props.contactEmail}
                    imageUrl={props.imageUrl}
                    sx={{
                        p: {
                            xs: 3,
                            md: 0,
                        },
                    }}
                />
                <BoxAtom
                    direction="vertical"
                    sx={{
                        width: {
                            xs: '100%',
                            md: '35%',
                        },
                    }}
                >
                    <TextAtom header variant="h3">
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
                            value={form.name}
                            error={!isValidName}
                            onChange={handleChange}
                        />
                        <InputMolecule
                            name="email"
                            error={!isValidEmail}
                            label="E-mailadres"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                        <InputMolecule
                            name="message"
                            label="Bericht"
                            type="text"
                            textarea
                            value={form.message}
                            onChange={handleChange}
                        />
                        <UploadMolecule
                            onUpload={setFile}
                            label="Voeg hier uw bestanden toe"
                        />
                        <ButtonMolecule
                            disabled={disableSubmit}
                            onClick={onSubmit}
                            label={props.buttonText}
                        />
                    </BoxAtom>
                </BoxAtom>
            </BoxAtom>
        </BoxAtom>
    )
}
