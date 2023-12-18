import Head from 'next/head'
import { motion } from 'framer-motion'
import {
    FooterOrganism,
    LogoSliderOrganism,
    ImageTextSection,
    KpiSection,
    NavigationOrganism,
    QuoteSection,
    SmallHeroSection,
    TextImageSection,
    FormSection,
    JobsSection,
    TextImageTextSection,
} from '@/components'
import { Colors } from '@/constants'
import { textContent } from '@/content'

export default function CandidatesPage() {
    const content = textContent.candidates

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
                    <TextImageTextSection
                        bgColor={Colors.WHITE}
                        title={content.perks_section.title}
                        subtitle={content.perks_section.subtitle}
                        description={content.perks_section.description}
                        imageUrl={content.perks_section.image_url}
                        button
                        buttonText={content.perks_section.button_text}
                        buttonUrl={content.perks_section.button_url}
                        perks={content.perks_section.perks}
                    />
                    <ImageTextSection
                        hasBgPattern
                        bgColor={Colors.LIGHT_BLUE}
                        title={content.connect_section.title}
                        subtitle={content.connect_section.subtitle}
                        description={content.connect_section.description}
                        imageUrl={content.connect_section.image_url}
                        button={false}
                    />
                    <KpiSection
                        tiles={content.kpi_section.tiles}
                        title={content.kpi_section.title}
                    />
                    <JobsSection
                        tiles={content.jobs_section.tiles}
                        information={content.jobs_section.information}
                    />
                    <QuoteSection
                        content={content.quote_section.content}
                        name={content.quote_section.name}
                    />
                    <LogoSliderOrganism divider />
                    <FormSection
                        title={content.contact_section.title}
                        contactName={content.contact_section.name}
                        contactPhone={content.contact_section.phone_number}
                        contactEmail={content.contact_section.email}
                        formTitle={content.contact_section.form_title}
                        buttonText={content.contact_section.button_text}
                        imageUrl={content.contact_section.image_url}
                    />
                </motion.div>
            </main>
            <FooterOrganism />
        </>
    )
}
