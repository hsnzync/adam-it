import client from '../../../client'

export default async function handler(req: any, res: any) {
    try {
        const response = await client.fetch('*[_type == "job"]')
        res.status(200).json({ response })
    } catch (error) {
        console.error('Error fetching job data:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
