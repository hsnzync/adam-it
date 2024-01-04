import { motion } from 'framer-motion'
import {
    FooterOrganism,
    NavigationOrganism,
    SmallHeroSection,
    TextImageSection,
    OneTextSection,
    TwoTextSection,
    HeadAtom,
} from '@/components'
import { Colors } from '@/constants'
import { textContent } from '@/content'

export default function AboutPage() {
    const content = textContent.about

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
                        title={content.intro_section.title}
                        subtitle={content.intro_section.subtitle}
                        description={content.intro_section.description}
                        imageUrl={content.intro_section.image_url}
                        imageAlt={content.intro_section.image_alt}
                    />
                    <OneTextSection
                        bgColor={Colors.WHITE}
                        content={content.about_section.content}
                        button
                        buttonText={content.about_section.button_text}
                        buttonUrl={content.about_section.button_url}
                    />
                    <TextImageSection
                        hasBgPattern
                        bgColor={Colors.LIGHT_BLUE}
                        title={content.perks_section.title}
                        description={content.perks_section.description}
                        perks={content.perks_section.perks}
                        imageUrl={content.perks_section.image_url}
                        imageAlt={content.perks_section.image_alt}
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
