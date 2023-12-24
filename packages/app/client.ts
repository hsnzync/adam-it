import { createClient } from '@sanity/client'

export default createClient({
    projectId: process.env.NEXT_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_SANITY_DATASET,
    useCdn: false,
    apiVersion: '2021-08-31',
})
