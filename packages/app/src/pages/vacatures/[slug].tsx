import Head from 'next/head'
import { motion } from 'framer-motion'
import {
    FooterOrganism,
    NavigationOrganism,
    SmallHeroSection,
    TextImageSection,
    OneTextSection,
    TwoTextSection,
    BoxAtom,
    JobsListSection,
    ContactImageMolecule,
} from '@/components'
import { Colors } from '@/constants'
import { textContent } from '@/content'
import { screenMaxWidth } from '@/style'
import client from '@/../client'
import { Job } from '@/types'
import { JobFilters } from '@/types/Job'

export const getStaticProps = async () => {
    // const jobData = await client.fetch(`*[_type == "job"]`)
    // const filterData = await client.fetch(`*[_type == "jobFilters"]`)
    // return {
    //     props: {
    //         jobs: jobData,
    //         filters: filterData,
    //     },
    // }
}

export default function JobsPage(data: { jobs: Job[]; filters: JobFilters[] }) {
    const content = textContent.jobs
    // const { jobs, filters } = data

    return (
        <>
            <Head>
                <title>{content.seo_head.title}</title>
                <meta
                    name={content.seo_head.meta_name}
                    content={content.seo_head.meta_content}
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavigationOrganism />
            <main>
                <motion.div
                    animate={{
                        opacity: 1,
                        transition: { duration: 0.5, ease: 'easeIn' },
                    }}
                    initial={{ opacity: 0 }}
                >
                    <h1>Vacature</h1>
                </motion.div>
            </main>
            <FooterOrganism />
        </>
    )
}
