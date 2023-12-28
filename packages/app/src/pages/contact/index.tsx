import { motion } from 'framer-motion'
import {
    FooterOrganism,
    NavigationOrganism,
    SmallHeroSection,
    ContactSection,
    TwoTextSection,
    ContactFormSection,
    HeadAtom,
} from '@/components'
import { Colors } from '@/constants'
import { textContent } from '@/content'

export default function ContactPage() {
    const content = textContent.contact

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

                    <ContactSection items={content.contact_section} />

                    <ContactFormSection
                        contactName={content.contact_form.name}
                        contactPhone={content.contact_form.phone_number}
                        contactEmail={content.contact_form.email}
                        formTitle={content.contact_form.form_title}
                        buttonText={content.contact_form.button_text}
                        imageUrl={content.contact_form.image_url}
                        basic
                    />
                    <TwoTextSection
                        bgColor={Colors.WHITE}
                        firstContent={content.extra_section.first_column}
                        secondContent={content.extra_section.second_column}
                    />
                </motion.div>
            </main>
            <FooterOrganism />
        </>
    )
}
