import { motion } from 'framer-motion'
import {
    FooterOrganism,
    NavigationOrganism,
    SmallHeroSection,
    HeadAtom,
    RichContentSection,
    BoxAtom,
} from '@/components'
import { textContent } from '@/content'
import client from '../../../client'
import { PageRichContent } from '@/types'
import { screenMaxWidth } from '@/style'
import { Colors } from '@/constants'

export const getServerSideProps = async () => {
    const data: PageRichContent = await client.fetch(`*[_type == "privacy"]`)
    return {
        props: {
            pageContent: data,
        },
    }
}

export default function PrivacyPolicyPage(data: {
    pageContent: PageRichContent[]
}) {
    const content = textContent.privacyPolicy
    const { pageContent } = data
    const selectedPageContent = pageContent[0]

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
                        title={selectedPageContent.title ?? content.hero.title}
                        subtitle={
                            selectedPageContent.subtitle ??
                            content.hero.subtitle
                        }
                    />
                    <BoxAtom
                        alignment="center"
                        as="section"
                        bgColor={Colors.WHITE}
                        sx={{
                            position: 'relative',
                        }}
                    >
                        <BoxAtom
                            sx={{
                                width: { md: '100%' },
                                px: { xs: 3, md: 0 },
                                py: { xs: 3, md: 5 },
                                maxWidth: screenMaxWidth,
                            }}
                        >
                            <BoxAtom
                                direction="horizontal"
                                sx={{
                                    width: '100%',
                                    gap: {
                                        xs: 0,
                                        md: 15,
                                    },
                                }}
                            >
                                <RichContentSection
                                    content={selectedPageContent.sections}
                                />
                            </BoxAtom>
                        </BoxAtom>
                    </BoxAtom>
                </motion.div>
            </main>
            <FooterOrganism />
        </>
    )
}
