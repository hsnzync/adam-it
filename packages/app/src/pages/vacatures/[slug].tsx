'use client'

import Head from 'next/head'
import { motion } from 'framer-motion'
import {
    FooterOrganism,
    NavigationOrganism,
    SmallHeroSection,
    BoxAtom,
    JobDetailHeaderSection,
    ApplyFormSection,
    ContactImageMolecule,
    JobDetailSection,
} from '@/components'
import { textContent } from '@/content'
import { screenMaxWidth } from '@/style'
import client from '@/../client'
import { Job } from '@/types'
import { Colors } from '@/constants'
import { useEffect, useState } from 'react'

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
    const content = textContent.jobDetail
    const { job } = data

    const handleScroll = () => {
        if (window.scrollY > 250) setScrolled(true)
        else setScrolled(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

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
                        title={job?.title ?? ''}
                        subtitle={content.hero.subtitle}
                    />
                    <BoxAtom
                        alignment="center"
                        as="section"
                        bgColor={Colors.WHITE}
                        sx={{
                            alignItems: 'unset',
                            position: 'relative',
                            pt: {
                                xs: 0,
                                md: 8,
                            },
                        }}
                    >
                        <BoxAtom alignment="center">
                            <BoxAtom
                                direction="horizontal"
                                sx={{
                                    maxWidth: screenMaxWidth,
                                    p: { xs: 3, md: 0 },
                                    gap: {
                                        xs: 0,
                                        md: 15,
                                    },
                                }}
                            >
                                <BoxAtom
                                    sx={{
                                        width: {
                                            xs: 'auto',
                                            md: '75%',
                                        },
                                        mb: {
                                            xs: 0,
                                            md: 100,
                                        },
                                    }}
                                >
                                    <BoxAtom
                                        alignment="center"
                                        direction="vertical"
                                    >
                                        <JobDetailHeaderSection
                                            typeLabel={content.detail.type}
                                            locationLabel={
                                                content.detail.location
                                            }
                                            hoursLabel={content.detail.hours}
                                            salaryLabel={content.detail.salary}
                                            buttonLabel={
                                                content.detail.button_text
                                            }
                                            job={job}
                                        />
                                    </BoxAtom>

                                    <JobDetailSection job={job} />
                                </BoxAtom>
                                <BoxAtom
                                    sx={{
                                        width: {
                                            xs: 'auto',
                                            md: '25%',
                                        },
                                        zIndex: 1,
                                        py: { xs: 3 },
                                    }}
                                >
                                    <ContactImageMolecule
                                        title={content.contact.title}
                                        contactName={content.contact.name}
                                        contactPhone={
                                            content.contact.phone_number
                                        }
                                        contactEmail={content.contact.email}
                                        imageUrl={content.contact.image_url}
                                        sx={{
                                            width: 'auto',
                                            position: {
                                                xs: 'relative',
                                                md: scrolled
                                                    ? 'sticky'
                                                    : 'relative',
                                            },
                                            top: {
                                                xs: undefined,
                                                md: scrolled ? 120 : undefined,
                                            },
                                            backgroundColor: 'transparent',
                                        }}
                                    />
                                </BoxAtom>
                            </BoxAtom>
                        </BoxAtom>
                        <ApplyFormSection
                            formTitle={content.contact_section.title}
                            contactName={content.contact_section.name}
                            contactPhone={content.contact_section.phone_number}
                            contactEmail={content.contact_section.email}
                            buttonText={content.contact_section.button_text}
                            alignment="start"
                            sx={{
                                position: {
                                    xs: 'relative',
                                    md: 'absolute',
                                },
                                zIndex: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                            }}
                        />
                    </BoxAtom>
                </motion.div>
            </main>
            <FooterOrganism />
        </>
    )
}
