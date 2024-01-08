'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Box } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import MenuItem from '@mui/material/MenuItem'
import { breakpoints, screenMaxWidth } from '@/style'
import { Colors } from '@/constants'
import { BoxAtom, TextAtom, ButtonMolecule, LinkButtonAtom } from '@/components'
import { textContent } from '@/content'
import { getAsset } from '@/utils'
import { motion } from 'framer-motion'

export const NavigationOrganism = () => {
    const [navScrolled, setNavScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState('')
    const [isMobile, setIsMobile] = useState(false)
    const { pages, buttons } = textContent.navigation

    const handleScroll = () => {
        if (window.scrollY > 50) setNavScrolled(true)
        else setNavScrolled(false)
    }

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

    useEffect(() => {
        if (window.innerWidth > breakpoints.sm) {
            setMenuOpen(false)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [isMobile])

    const handleResize = () => {
        setIsMobile(window.innerWidth < breakpoints.sm)
    }

    useEffect(() => {
        const page = window.location.pathname.replace('/', '').replace('-', ' ')
        setCurrentPage(page)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const logoHandler = (): string => {
        if (navScrolled || menuOpen) {
            return getAsset(`logo-text-regular-red.svg`, 'logo')
        } else {
            return getAsset(`logo-text-white-red.svg`, 'logo')
        }
    }

    const menuContent = (
        <BoxAtom
            space={2}
            sx={{
                height: {
                    xs: menuOpen ? '100vh' : undefined,
                    md: 'auto',
                },

                flexDirection: { xs: 'column', md: 'row' },
                display: {
                    xs: menuOpen ? 'flex' : 'none',
                    md: 'flex',
                },
                background: {
                    xs: menuOpen ? Colors.WHITE : undefined,
                    md: 'none',
                },

                position: {
                    xs: menuOpen ? 'absolute' : undefined,
                    md: 'relative',
                },

                top: { xs: menuOpen ? 0 : undefined },
                right: { xs: menuOpen ? 0 : undefined },
                bottom: { xs: menuOpen ? 0 : undefined },
                left: { xs: menuOpen ? 0 : undefined },

                px: { xs: menuOpen ? 3 : undefined },
                pt: {
                    xs: menuOpen ? 15 : undefined,
                    md: 0,
                },

                justifyContent: {
                    md: menuOpen ? 'flex-start' : 'flex-end',
                },
                alignItems: {
                    xs: menuOpen ? 'flex-start' : 'flex-end',
                    md: undefined,
                },
                m: 0,
            }}
        >
            {pages.map((page, index) => (
                <BoxAtom
                    key={index}
                    sx={{
                        position: 'relative',

                        '::after': {
                            content: '""',

                            borderBottom:
                                currentPage === page.label.toLowerCase()
                                    ? `2px solid ${Colors.ORANGE} !important`
                                    : '2px solid transparent',
                            position: 'absolute',
                            width: '100%',
                            bottom: -5,
                            transition: '.3s',
                        },

                        ':hover::after': {
                            content: '""',
                            position: 'absolute',
                            borderBottom: `2px solid ${Colors.ORANGE}`,
                            width: '100%',
                            bottom: -5,
                        },
                    }}
                >
                    <Link
                        href={page.href}
                        style={{
                            textDecoration: 'none',
                        }}
                    >
                        <MenuItem
                            sx={{
                                px: 1,
                                justifyContent: 'end',
                                transition: '.3s',

                                ':hover': {
                                    background: 'none',
                                },
                            }}
                        >
                            <TextAtom
                                variant="body2"
                                sx={{
                                    color:
                                        navScrolled || menuOpen
                                            ? Colors.DARK_BLUE
                                            : Colors.WHITE,
                                }}
                            >
                                {page.label}
                            </TextAtom>
                        </MenuItem>
                    </Link>
                </BoxAtom>
            ))}
            <LinkButtonAtom
                label={buttons.jobs.label}
                href={buttons.jobs.href}
            />
            {/* <LinkButtonAtom
                label={buttons.testnation.label}
                href={buttons.testnation.href}
                variant="outlined"
                sx={{
                    borderColor:
                        navScrolled || menuOpen ? Colors.ORANGE : Colors.WHITE,
                    '& *': {
                        color:
                            navScrolled || menuOpen
                                ? Colors.ORANGE
                                : Colors.WHITE,
                        borderColor:
                            navScrolled || menuOpen
                                ? Colors.ORANGE
                                : Colors.WHITE,
                    },
                }}
            /> */}
        </BoxAtom>
    )

    const menu = (
        <BoxAtom
            as="nav"
            alignment="center"
            sx={{
                position: 'fixed',
                width: '100%',
                zIndex: 10,
                transition: 'background-color 0.3s ease',
                backgroundColor: navScrolled ? Colors.WHITE : 'transparent',
            }}
        >
            <Toolbar
                disableGutters
                sx={{
                    p: 2,
                    width: '91%',
                    maxWidth: screenMaxWidth,
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <BoxAtom
                    sx={{
                        position: 'relative',
                        left: 5,
                        zIndex: 10,
                        img: {
                            width: {
                                xs: 150,
                                md: 180,
                            },
                        },
                    }}
                >
                    <Link href="/">
                        <Image
                            src={logoHandler()}
                            width={130}
                            height={50}
                            alt="Adam IT - Uw betrouwbare IT-dienstverlener voor naadloze samenwerking tussen kandidaten en opdrachtgevers, met expertise die uw bedrijf naar nieuwe hoogten brengt."
                        />
                    </Link>
                </BoxAtom>
                {menuOpen ? (
                    <motion.div
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: 'linear',
                            },
                        }}
                        initial={{ y: -50, opacity: 0.8 }}
                        style={{
                            position: 'absolute',

                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,

                            paddingLeft: 3,
                            paddingRight: 3,
                            paddingTop: 15,
                        }}
                    >
                        {menuContent}
                    </motion.div>
                ) : (
                    menuContent
                )}

                <BoxAtom
                    sx={{
                        flexDirection: 'row',
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        justifyContent: 'flex-end',
                        m: 0,
                        gap: 2,
                        position: 'relative',
                        right: 10,
                    }}
                >
                    <ButtonMolecule
                        onClick={handleMenuOpen}
                        icon={menuOpen ? 'close' : 'menu'}
                        variant="clear"
                        label="Menu"
                        sx={{
                            '.button-text': {
                                color: navScrolled
                                    ? Colors.ORANGE
                                    : Colors.WHITE,
                            },
                            '.button-icon-container': {
                                width: {
                                    xs: 40,
                                    md: 20,
                                },
                                height: {
                                    xs: 40,
                                    md: 20,
                                },
                            },
                            svg: {
                                fontSize: {
                                    xs: 30,
                                    md: 20,
                                },
                            },
                        }}
                    />
                </BoxAtom>
            </Toolbar>
        </BoxAtom>
    )

    return menu
}
