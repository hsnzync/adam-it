'use client'

import { motion } from 'framer-motion'
import {
    FooterOrganism,
    NavigationOrganism,
    SmallHeroSection,
    BoxAtom,
    JobDetailHeaderSection,
    FormSection,
    ContactImageMolecule,
    JobDetailSection,
    HeadAtom,
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
        revalidate: 10,
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

    const emailSubject = job ? `Sollicitatie - ${job.title}` : 'Sollicitatie'

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
                        title={job?.title ?? ''}
                        subtitle={content.hero.subtitle}
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
                                <BoxAtom
                                    sx={{
                                        width: {
                                            xs: 'auto',
                                            md: '70%',
                                        },
                                        position: 'relative',
                                        left: { md: 15 },
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
                                        display: {
                                            xs: 'none',
                                            sm: 'block',
                                        },
                                        width: {
                                            xs: undefined,
                                            sm: '25%',
                                        },
                                    }}
                                >
                                    {/* Empty placeholder div */}
                                    <BoxAtom />
                                </BoxAtom>
                            </BoxAtom>
                        </BoxAtom>
                        <FormSection
                            formTitle={content.contact_section.title}
                            contactName={content.contact_section.name}
                            contactPhone={content.contact_section.phone_number}
                            contactEmail={content.contact_section.email}
                            buttonText={content.contact_section.button_text}
                            emailSubject={emailSubject}
                            alignment="start"
                        />
                        <BoxAtom
                            sx={{
                                position: 'absolute',
                                right: {
                                    md: 0,
                                    xxxl: '10%',
                                },
                                height: '100%',
                                width: '18%',
                                zIndex: 1,
                                pl: {
                                    sm: 3,
                                    lg: 0,
                                },
                                pr: {
                                    sm: 3,
                                    lg: 12,
                                },
                                display: {
                                    xs: 'none',
                                    md: 'initial',
                                },
                            }}
                        >
                            <ContactImageMolecule
                                title={content.contact.title}
                                contactName={content.contact.name}
                                contactPhone={content.contact.phone_number}
                                contactEmail={content.contact.email}
                                imageUrl={content.contact.image_url}
                                small
                                sx={{
                                    width: '100%',
                                    position: {
                                        xs: 'relative',
                                        md: scrolled ? 'sticky' : 'relative',
                                    },
                                    top: {
                                        xs: undefined,
                                        md: scrolled ? 150 : 50,
                                    },

                                    backgroundColor: 'transparent',
                                }}
                            />
                        </BoxAtom>
                    </BoxAtom>
                </motion.div>
            </main>
            <FooterOrganism />
        </>
    )
}
