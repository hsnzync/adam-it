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

export const getStaticProps = async () => {
    // const data = await client.fetch(`*[_type == "job"]`)
    return {
        props: {
            jobs: [],
        },
    }
}

export default function JobsPage(data: { jobs: Job[] }) {
    const content = textContent.jobs
    const { jobs } = data

    const dummyJobs: Job[] = [
        {
            title: 'Software ontwikkelaar',
            type: 'Vast',
            location: 'Maassluis',
            hours: 40,
            minSalary: 3000,
            maxSalary: 5000,
            section: [],
        },
        {
            title: 'Test automation engineer',
            type: 'Freelance',
            location: 'Utrecht',
            hours: 32,
            minSalary: 4000,
            maxSalary: 5500,
            section: [],
        },
    ]

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
                    <SmallHeroSection
                        title={content.hero.title}
                        subtitle={content.hero.subtitle}
                    />
                    <BoxAtom
                        as="section"
                        bgColor={Colors.WHITE}
                        alignment="center"
                        direction="horizontal"
                        sx={{ width: '100%' }}
                    >
                        <BoxAtom
                            direction="horizontal"
                            sx={{ maxWidth: screenMaxWidth, width: '100%' }}
                        >
                            <JobsListSection
                                plain
                                text={content.filter}
                                jobs={dummyJobs}
                                sx={{
                                    width: {
                                        xs: undefined,
                                        md: '75%',
                                    },
                                    justifyContent: 'start',
                                }}
                                filterOptions={content.filter_options}
                            />
                            <ContactImageMolecule
                                contactName={content.contact.name}
                                contactPhone={content.contact.phone_number}
                                contactEmail={content.contact.email}
                                imageUrl={content.contact.image_url}
                                sx={{
                                    p: {
                                        xs: 3,
                                        md: 0,
                                    },
                                    py: {
                                        md: 10,
                                    },
                                }}
                            />
                        </BoxAtom>
                    </BoxAtom>
                    <TextImageSection
                        hasBgPattern
                        bgColor={Colors.LIGHT_BLUE}
                        title={content.connect_section.title}
                        subtitle={content.connect_section.subtitle}
                        description={content.connect_section.description}
                        imageUrl={content.connect_section.image_url}
                    />
                    <OneTextSection
                        bgColor={Colors.WHITE}
                        content={content.extra_section}
                    />
                </motion.div>
            </main>
            <FooterOrganism />
        </>
    )
}
