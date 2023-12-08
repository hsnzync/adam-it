// pages/api/submitForm.js
import nodemailer from 'nodemailer'

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).end() // Method Not Allowed
    }

    const { name, email, message, file } = req.body

    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com', // Your SMTP server hostname
        port: 587, // Your SMTP server port (587 is a common TLS/STARTTLS port)
        secure: false, // Set to true if your SMTP server uses SSL/TLS
        auth: {
            user: process.env.NEXT_MAIL_USER,
            pass: process.env.NEXT_MAIL_PASS,
        },
    })

    const mailOptions = {
        from: email,
        to: 'hasan.ozaynaci@gmail.com',
        subject: 'New Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    }

    try {
        await transporter.sendMail(mailOptions)
        res.status(200).json({ success: true })
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, error: 'Internal Server Error' })
    }
}
