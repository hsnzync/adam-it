import { Job } from '@/types'
import client from '../../../client'

export default async function handler(req: any, res: any) {
    try {
        const response = await client.fetch('*[_type == "jobFilters"]')
        res.status(200).json({ response })
    } catch (error) {
        console.error('Error fetching job filter data:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
