import Head from 'next/head'

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
} from '@/components'
import { Colors } from '@/constants'
import { textContent } from '@/content'
import { getAsset } from '@/utils'

export default function Home() {
    const content = textContent.home

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
                    <HeroSection
                        title={content.hero.title}
                        subtitle={content.hero.subtitle}
                        imageUrl={content.hero.image_url}
                    />
                    <KpiSection
                        tileTitle={content.kpi_section.title}
                        tiles={content.kpi_section.tiles}
                    />
                    <ImageTextSection
                        hasBgPattern
                        bgColor={Colors.LIGHT_BLUE}
                        title={content.perks_section.title}
                        description={content.perks_section.description}
                        perks={content.perks_section.perks}
                        buttonText={content.perks_section.button_text}
                        buttonUrl=""
                        imageUrl={content.perks_section.image_url}
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
                    />
                    <ImageTextSection
                        sectionTitle={content.cases_section.section_title}
                        bgColor={Colors.WHITE}
                        logo={getAsset(
                            content.cases_section.logo_url,
                            'company-logos'
                        )}
                        title={content.cases_section.title}
                        description={content.cases_section.description}
                        perks={content.cases_section.perks}
                        buttonText={content.cases_section.button_text}
                        buttonUrl=""
                        imageUrl={content.cases_section.image_url}
                    />

                    <LogoSliderOrganism divider />
                    <ImageTextSection
                        hasBgPattern
                        bgColor={Colors.LIGHT_BLUE}
                        title={content.perks_section.title}
                        description={content.perks_section.description}
                        perks={content.perks_section.perks}
                        buttonText={content.perks_section.button_text}
                        buttonUrl=""
                        imageUrl={content.perks_section.image_url}
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
