import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { z } from 'zod'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).end() // Method Not Allowed
    }

    // const schema = z.object({
    //     name: z.string(),
    //     email: z.string(),
    //     message: z.string(),
    //     file: z.any(),
    // })

    // const { name, email, message, file } = req.body

    // const parsed = schema.parse(req.body)

    const body = JSON.parse(req.body)

    console.log('data: ', body)
    // console.log('parsed: ', parsed)

    const transporter = nodemailer.createTransport({
        host: 'disco-yourhosting.prx.route25.eu',
        port: 465,
        secure: true,
        logger: true,
        debug: true,
        auth: {
            user: 'info@adamit.nl',
            pass: '@0E4a5i2f',
        },
    })

    const mailOptions = {
        from: body.email as string,
        to: 'test@adamit.nl',
        subject: 'New Form Submission',
        text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
    }

    try {
        await transporter.sendMail(mailOptions)
        res.status(200).json({ success: true })
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, error })
    }
}
