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
    ContactFormSection,
    HeadAtom,
} from '@/components'
import { Colors } from '@/constants'
import { textContent } from '@/content'

export default function EmployeePage() {
    const content = textContent.employees

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
                    <TextImageSection
                        bgColor={Colors.WHITE}
                        title={content.connect_section.title}
                        subtitle={content.connect_section.subtitle}
                        description={content.connect_section.description}
                        imageUrl={content.connect_section.image_url}
                        imageAlt={content.connect_section.image_alt}
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
                    />
                    <QuoteSection
                        content={content.quote_section.content}
                        name={content.quote_section.name}
                    />
                    <LogoSliderOrganism divider />
                    <ContactFormSection
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
