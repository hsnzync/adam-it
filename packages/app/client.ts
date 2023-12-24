import { createClient } from '@sanity/client'

export default createClient({
    projectId: 'wdzh4l4i', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    useCdn: false, // `false` if you want to ensure fresh data
    apiVersion: '2021-08-31', // use a UTC date string
})
