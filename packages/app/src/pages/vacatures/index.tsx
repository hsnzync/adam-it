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
} from '@/components'
import { Colors } from '@/constants'
import { textContent } from '@/content'

export default function Home() {
    const content = textContent.jobs

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
                    <BoxAtom>
                        <JobsListSection />
                    </BoxAtom>
                </motion.div>
            </main>
            <FooterOrganism />
        </>
    )
}
