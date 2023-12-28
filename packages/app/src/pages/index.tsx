import { motion } from 'framer-motion'
import {
    HeroSection,
    JobsSection,
    ImageTextSection,
    LogoSliderOrganism,
    QuoteSection,
    KpiSection,
    FooterOrganism,
    NavigationOrganism,
    HeadAtom,
} from '@/components'
import { Colors } from '@/constants'
import { textContent } from '@/content'
import { getAsset } from '@/utils'
import client from '../../client'
import { Job } from '@/types'

export const getStaticProps = async () => {
    const jobData = await client.fetch(
        '*[_type == "job"] | order(_createdAt desc)[0..2]'
    )
    return {
        props: {
            jobs: jobData,
        },
    }
}

export default function HomePage(data: { jobs: Job[] }) {
    const content = textContent.home
    const { jobs } = data

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
                    <HeroSection
                        title={content.hero.title}
                        subtitle={content.hero.subtitle}
                        imageUrl={content.hero.image_url}
                        imageAlt={content.hero.image_alt}
                        buttons={content.hero.buttons}
                    />
                    <KpiSection
                        tileTitle={content.kpi_section.tileTitle}
                        tiles={content.kpi_section.tiles}
                    />
                    <ImageTextSection
                        hasBgPattern
                        bgColor={Colors.LIGHT_BLUE}
                        title={content.perks_section.title}
                        description={content.perks_section.description}
                        perks={content.perks_section.perks}
                        button
                        buttonText={content.perks_section.button_text}
                        buttonUrl={content.perks_section.button_url}
                        imageUrl={content.perks_section.image_url}
                        imageAlt={content.perks_section.image_alt}
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'flex',
                            },
                        }}
                    />
                    <QuoteSection
                        content={content.quote_section.content}
                        name={content.quote_section.name}
                    />
                    <JobsSection
                        tiles={content.jobs_section.tiles}
                        information={content.jobs_section.information}
                        jobs={jobs}
                    />
                    <ImageTextSection
                        sectionTitle={content.cases_section.section_title}
                        bgColor={Colors.WHITE}
                        logoUrl={getAsset(
                            content.cases_section.logo_url,
                            'company-logos'
                        )}
                        logoAlt={content.cases_section.logo_alt}
                        title={content.cases_section.title}
                        description={content.cases_section.description}
                        perks={content.cases_section.perks}
                        button
                        buttonText={content.cases_section.button_text}
                        buttonUrl={content.cases_section.button_url}
                        imageUrl={content.cases_section.image_url}
                        imageAlt={content.cases_section.image_alt}
                    />

                    <LogoSliderOrganism divider />
                    <ImageTextSection
                        hasBgPattern
                        bgColor={Colors.LIGHT_BLUE}
                        title={content.perks_section.title}
                        description={content.perks_section.description}
                        perks={content.perks_section.perks}
                        button
                        buttonText={content.perks_section.button_text}
                        buttonUrl={content.perks_section.button_url}
                        imageUrl={content.perks_section.image_url}
                        imageAlt={content.perks_section.image_alt}
                        sx={{
                            display: {
                                xs: 'flex',
                                md: 'none',
                            },
                        }}
                    />
                </motion.div>
            </main>
            <FooterOrganism />
        </>
    )
}
