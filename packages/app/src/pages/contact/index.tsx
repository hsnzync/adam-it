import Head from 'next/head'
import { motion } from 'framer-motion'
import {
    FooterOrganism,
    NavigationOrganism,
    SmallHeroSection,
    ContactSection,
    TwoTextSection,
    FormSection,
} from '@/components'
import { Colors } from '@/constants'
import { textContent } from '@/content'

export default function ContactPage() {
    const content = textContent.contact

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

                    <ContactSection items={content.contact_section} />

                    <FormSection
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
