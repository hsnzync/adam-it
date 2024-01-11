import { createClient } from '@sanity/client'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export default createClient({
    projectId: publicRuntimeConfig.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: publicRuntimeConfig.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
    apiVersion: '2021-08-31',
})
