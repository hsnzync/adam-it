import { createClient } from '@sanity/client'

export default createClient({
    projectId: process.env.NEXT_SANITY_PROJECT_ID ?? 'wdzh4l4i',
    dataset: process.env.NEXT_SANITY_DATASET ?? 'production',
    useCdn: false,
    apiVersion: '2021-08-31',
})
