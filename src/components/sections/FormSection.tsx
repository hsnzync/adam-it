import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
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
import { validateEmail, validateName, validatePhoneNumber } from '@/utils'
import toast from 'react-hot-toast'

type Props = {
    title?: string
    contactName: string
    contactPhone: string
    contactEmail: string
    formTitle: string
    buttonText: string
    emailSubject: string
    basic?: boolean
    alignment?: 'start' | 'center' | 'end'
    sx?: SxProps<Theme>
}

export const FormSection = (props: Props) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })
    const [file, setFile] = useState<File | null>(null)
    const [status, setStatus] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)

    const [disableSubmit, setDisableSubmit] = useState(false)
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isValidPhone, setIsValidPhone] = useState(true)
    const [isValidName, setIsValidName] = useState(true)

    useEffect(() => {
        if (status) {
            toast.success(
                'Sollicitatie ontvangen! We nemen zo spoedig mogelijk contact met je op.'
            )
        }
    }, [status])

    useEffect(() => {
        setDisableSubmit(
            form.name === '' ||
                form.phone === '' ||
                form.email === '' ||
                form.message === ''
        )
    }, [form.name, form.phone, form.email, form.message])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        // Ensure the phone number starts with a '+'
        const updatedValue =
            name === 'phone' ? value.replace(/[^0-9+]/g, '') : value

        setForm({
            ...form,
            [name]: updatedValue,
        })
    }

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const emailIsValid = validateEmail(form.email)
        const phoneIsValid = validatePhoneNumber(form.phone)
        const nameIsValid = validateName(form.name)

        setIsValidEmail(emailIsValid)
        setIsValidPhone(phoneIsValid)
        setIsValidName(nameIsValid)

        if (emailIsValid && phoneIsValid && nameIsValid) {
            setDisableSubmit(true)

            try {
                const formData = new FormData()
                formData.set('name', form.name)
                formData.set('email', form.email)
                formData.set('phone', form.phone)
                formData.set('message', form.message)
                formData.set('subject', props.emailSubject)
                if (file) {
                    formData.set('file', file)
                }

                setDisableSubmit(true)
                setIsProcessing(true)

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
                setIsProcessing(false)

                setForm({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                })
                setFile(null)
            }
        }
    }

    return (
        <BoxAtom
            alignment="center"
            bgColor={Colors.LIGHT_BLUE}
            id="apply-form"
            sx={{
                width: '100%',
                py: 8,

                ...props.sx,
            }}
        >
            <BoxAtom
                sx={{
                    maxWidth: screenMaxWidth,
                    width: '100%',
                    alignItems: {
                        xs: 'center',
                        md: 'start',
                    },
                }}
                direction="horizontal"
                alignment={props.alignment ?? 'center'}
                space={10}
            >
                <BoxAtom
                    direction="vertical"
                    sx={{
                        width: {
                            xs: '90%',
                            sm: '100%',
                            md: '70%',
                        },
                        py: {
                            xs: 3,
                            md: 10,
                        },
                    }}
                >
                    <TextAtom header variant="h2">
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
                        <BoxAtom direction="horizontal" space={2}>
                            <InputMolecule
                                name="email"
                                error={!isValidEmail}
                                label="E-mailadres"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                            />
                            <InputMolecule
                                name="phone"
                                error={!isValidPhone}
                                label="Telefoonnummer"
                                type="text"
                                value={form.phone}
                                onChange={handleChange}
                            />
                        </BoxAtom>
                        <InputMolecule
                            name="message"
                            label="Motivatie"
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
                            isLoading={isProcessing}
                            onClick={onSubmit}
                            label={props.buttonText}
                        />
                    </BoxAtom>
                </BoxAtom>
            </BoxAtom>
        </BoxAtom>
    )
}
