'use client'

import Head from 'next/head'
import { motion } from 'framer-motion'
import {
    FooterOrganism,
    NavigationOrganism,
    SmallHeroSection,
    BoxAtom,
    TextAtom,
    ButtonMolecule,
    JobDetailHeaderSection,
    RichContent,
    ContactSection,
    FormSection,
    ContactImageMolecule,
} from '@/components'
import { textContent } from '@/content'
import { screenMaxWidth } from '@/style'
import client from '@/../client'
import { Job } from '@/types'
import { formatSalary } from '@/utils'
import { Colors } from '@/constants'
import { Fragment, useEffect, useState } from 'react'

export const getStaticPaths = async () => {
    const paths = await client.fetch(
        `*[_type == "job" && defined(slug.current)][].slug.current`
    )

    return {
        paths: paths.map((slug: string) => ({ params: { slug } })),
        fallback: true,
    }
}

export const getStaticProps = async ({ params }: any) => {
    const { slug } = params
    const data = await client.fetch(
        `*[_type == "job" && slug.current == $slug][0]`,
        { slug }
    )

    return {
        props: {
            job: data,
        },
    }
}

export default function JobDetailPage(data: { job: Job }) {
    const [scrolled, setScrolled] = useState(false)
    const [maxScroll, setMaxScroll] = useState<number>(0)
    const content = textContent.jobDetail
    const { job } = data

    const handleScroll = () => {
        if (window.scrollY > 250) setScrolled(true)
        else setScrolled(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        // const footer = document.getElementsByTagName('footer')[0]
        // setMaxScroll(footer.offsetTop - window.innerHeight)
        // console.log(maxScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Get the footer element
    // const footer = document.getElementsByTagName('footer')[0]

    // Calculate the maximum scroll position
    // const maxScroll = footerRef.offsetTop - window.innerHeight

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
                        title={job.title}
                        subtitle={content.hero.subtitle}
                    />
                    <BoxAtom direction="horizontal">
                        <BoxAtom
                            bgColor={Colors.WHITE}
                            sx={{ p: { xs: 3, md: 8 } }}
                        >
                            <BoxAtom
                                as="section"
                                alignment="center"
                                direction="vertical"
                            >
                                <BoxAtom
                                    direction="vertical"
                                    sx={{
                                        maxWidth: screenMaxWidth,
                                        width: '100%',
                                    }}
                                >
                                    <JobDetailHeaderSection
                                        typeLabel={content.detail.type}
                                        locationLabel={content.detail.location}
                                        hoursLabel={content.detail.hours}
                                        salaryLabel={content.detail.salary}
                                        buttonLabel={content.detail.button_text}
                                        job={job}
                                    />
                                </BoxAtom>
                            </BoxAtom>

                            <BoxAtom
                                as="section"
                                bgColor={Colors.WHITE}
                                alignment="center"
                                sx={{ py: 5 }}
                            >
                                <BoxAtom
                                    sx={{
                                        maxWidth: screenMaxWidth,
                                    }}
                                >
                                    {job.sections.map((section, index) => (
                                        <BoxAtom key={index} sx={{ py: 2 }}>
                                            <TextAtom variant="h4">
                                                {section.title}
                                            </TextAtom>
                                            <RichContent
                                                richText={section.description}
                                            />
                                        </BoxAtom>
                                    ))}
                                </BoxAtom>
                            </BoxAtom>
                        </BoxAtom>
                        <BoxAtom
                            as="section"
                            bgColor={Colors.WHITE}
                            sx={{
                                width: {
                                    xs: '100%',
                                    md: '25%',
                                },
                            }}
                        >
                            <ContactImageMolecule
                                title={content.contact.title}
                                contactName={content.contact.name}
                                contactPhone={content.contact.phone_number}
                                contactEmail={content.contact.email}
                                imageUrl={content.contact.image_url}
                                sx={{
                                    p: 3,
                                    width: 'auto',
                                    position: scrolled ? 'sticky' : 'relative',
                                    top: scrolled
                                        ? Math.min(100, 1200) + 'px'
                                        : undefined,
                                    backgroundColor: 'transparent',
                                }}
                            />
                        </BoxAtom>
                    </BoxAtom>
                    <FormSection
                        formTitle={content.contact_section.title}
                        contactName={content.contact_section.name}
                        contactPhone={content.contact_section.phone_number}
                        contactEmail={content.contact_section.email}
                        buttonText={content.contact_section.button_text}
                        image={false}
                        alignment="start"
                        sx={{ p: 0 }}
                    />
                </motion.div>
            </main>
            <FooterOrganism />
        </>
    )
}
