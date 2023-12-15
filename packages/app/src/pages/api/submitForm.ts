// pages/api/submitForm.js
import nodemailer from 'nodemailer'

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).end() // Method Not Allowed
    }

    const { name, email, message, file } = req.body

    const transporter = nodemailer.createTransport({
        host: 'disco-yourhosting.prx.route25.eu', // Your SMTP server hostname
        port: 465, // Your SMTP server port (Gebruik poort 465 om berichten beveiligd via SMTP te versturen.)
        secure: true, // Set to true if your SMTP server uses SSL/TLS
        logger: true,
        debug: true,
        tls: {
            rejectUnauthorized: true,
        },
        auth: {
            user: process.env.NEXT_MAIL_USER,
            pass: process.env.NEXT_MAIL_PASS,
        },
    })

    const mailOptions = {
        from: email as string,
        to: 'test@adamit.nl',
        subject: 'New Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        file: file as File,
    }

    try {
        await transporter.sendMail(mailOptions)
        res.status(200).json({ success: true })
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, error: 'Internal Server Error' })
    }
}
