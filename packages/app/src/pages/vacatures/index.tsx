import { motion } from 'framer-motion'
import {
    FooterOrganism,
    NavigationOrganism,
    SmallHeroSection,
    TextImageSection,
    OneTextSection,
    BoxAtom,
    JobsListSection,
    ContactImageMolecule,
    HeadAtom,
} from '@/components'
import { Colors } from '@/constants'
import { textContent } from '@/content'
import { screenMaxWidth } from '@/style'
import client from '../../../client'
import { Job, JobFilters } from '@/types'

export const getStaticProps = async () => {
    const jobsData = await client.fetch(
        `*[_type == "job"] | order(_createdAt desc)`
    )
    const filterData = await client.fetch(`*[_type == "jobFilters"]`)
    return {
        props: {
            jobs: jobsData,
            filters: filterData,
        },
    }
}

export default function JobsPage(data: { jobs: Job[]; filters: JobFilters[] }) {
    const content = textContent.jobs
    const { jobs, filters } = data
    return (
        <>
            <HeadAtom
                title={content.seo_head.title}
                name={content.seo_head.name}
                description={content.seo_head.description}
                opengraph={content.seo_head.opengraph}
                twitter={content.seo_head.twitter}
            />
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
                                labels={content.filter}
                                jobs={jobs}
                                sx={{
                                    width: {
                                        xs: undefined,
                                        md: '75%',
                                    },
                                    justifyContent: 'start',
                                }}
                                filters={filters}
                                buttonLabel={content.pagination_button_text}
                            />
                            <BoxAtom>
                                <ContactImageMolecule
                                    contactName={content.contact.name}
                                    contactPhone={content.contact.phone_number}
                                    contactEmail={content.contact.email}
                                    imageUrl={content.contact.image_url}
                                    sx={{
                                        position: 'sticky',
                                        top: 100,
                                        width: '100%',
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
                    </BoxAtom>
                    <TextImageSection
                        hasBgPattern
                        bgColor={Colors.LIGHT_BLUE}
                        title={content.connect_section.title}
                        subtitle={content.connect_section.subtitle}
                        description={content.connect_section.description}
                        imageUrl={content.connect_section.image_url}
                        imageAlt={content.connect_section.image_alt}
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
