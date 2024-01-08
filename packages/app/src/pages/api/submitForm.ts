import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import multiparty from 'multiparty'
import { applyTemplate } from '@/mail/template'

export const config = {
    api: {
        bodyParser: false, // Disable Next.js default bodyParser
    },
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).end() // Method Not Allowed
    }

    const form = new multiparty.Form()

    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ success: false, err })
        }

        const formFields = {
            name: fields.name[0] as string,
            email: fields.email[0] as string,
            phone: fields.phone ? (fields.phone[0] as string) : undefined,
            message: fields.message[0] as string,
            subject: fields.subject[0] as string,
        }

        const file = 'file' in files ? files.file : undefined

        const transporter = nodemailer.createTransport({
            host: 'mail.yourhosting.nl',
            port: 465,
            secure: true,
            logger: true,
            debug: true,
            auth: {
                user: process.env.NEXT_PUBLIC_MAIL_USER_MAIL_USER,
                pass: process.env.NEXT_PUBLIC_MAIL_USER_MAIL_PWD,
            },
        })

        const mailOptions = {
            from: formFields.email,
            to: process.env.NEXT_PUBLIC_MAIL_USER_MAIL_USER,
            subject: formFields.subject,
            text: `Naam: ${formFields.name}\nEmail: ${formFields.email}\Bericht: ${formFields.message}`,
            attachments: file ? (Array.isArray(file) ? [...file] : [file]) : [],
            html: applyTemplate(
                formFields.subject,
                formFields.name,
                formFields.email,
                formFields.message,
                formFields.phone
            ),
        }

        try {
            await transporter.sendMail(mailOptions)
            res.status(200).json({ success: true })
        } catch (error) {
            console.error(error)
            res.status(500).json({ success: false, error })
        }
    })
}
