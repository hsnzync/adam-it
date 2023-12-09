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
    ContactSection,
    TextSection,
} from '@/components'
import { Colors } from '@/constants'
import { textContent } from '@/content'

export default function Home() {
    const content = textContent.about

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
                    <TextImageSection
                        bgColor={Colors.WHITE}
                        title={content.intro_section.title}
                        subtitle={content.intro_section.subtitle}
                        description={content.intro_section.description}
                    />
                    <TextSection
                        bgColor={Colors.WHITE}
                        content={content.about_section}
                    />
                    <TextImageSection
                        hasBgPattern
                        bgColor={Colors.LIGHT_BLUE}
                        title={content.perks_section.title}
                        description={content.perks_section.description}
                        perks={content.perks_section.perks}
                    />
                </motion.div>
            </main>
            <FooterOrganism />
        </>
    )
}
