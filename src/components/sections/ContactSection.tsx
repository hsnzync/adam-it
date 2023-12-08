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
import Link from 'next/link'
import { useState } from 'react'

export const ContactSection = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [file, setFile] = useState<File>()

    const disableSubmit = name === '' || email === '' || message === ''

    const handleSubmit = async () => {
        // e.preventDefault();

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
            }}
        >
            <BoxAtom
                sx={{ maxWidth: screenMaxWidth, width: '100%' }}
                direction="horizontal"
                alignment="center"
                space={10}
            >
                <BoxAtom
                    direction="vertical"
                    alignment="end"
                    space={2}
                    sx={{ width: 'min-content' }}
                >
                    <ImageAtom
                        src="/recruiter-image.jpg"
                        alt="recruiter apply contact image"
                        size={500}
                    />
                    <BoxAtom alignment="start" space={2}>
                        <TextAtom variant="h5" header>
                            Zit je droombaan er niet tussen? Bel met Adam.
                        </TextAtom>
                        <TextAtom variant="body1" header>
                            Adam El Hajjami
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
                                    06 39 32 92 92
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
                                    adam@adamit.nl
                                </TextAtom>
                            </Link>
                        </BoxAtom>
                    </BoxAtom>
                </BoxAtom>
                <BoxAtom direction="vertical" sx={{ width: '30%' }}>
                    <TextAtom header variant="h5">
                        Meer informatie? Neem dan contact op met Adam.
                    </TextAtom>
                    <BoxAtom as="form" space={2} sx={{ maxWidth: 500, mt: 4 }}>
                        <FormInputMolecule
                            name="name"
                            label="Naam"
                            onChange={setName}
                        />
                        <FormInputMolecule
                            name="email"
                            label="E-mailadres"
                            onChange={setEmail}
                        />
                        <FormInputMolecule
                            name="message"
                            label="Bericht"
                            textarea
                            onChange={setMessage}
                        />
                        <UploadMolecule
                            onUpload={setFile}
                            label="Sleep uw bijlages hier"
                            additionalLabel="klik om up te loaden"
                        />
                        <ButtonMolecule
                            onClick={handleSubmit}
                            label="Verzenden"
                            disabled={disableSubmit}
                        />
                    </BoxAtom>
                </BoxAtom>
            </BoxAtom>
        </BoxAtom>
    )
}
