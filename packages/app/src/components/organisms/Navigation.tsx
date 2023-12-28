'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Box } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import MenuItem from '@mui/material/MenuItem'
import { screenMaxWidth } from '@/style'
import { CARD_SHADOW, Colors } from '@/constants'
import { BoxAtom, TextAtom, ButtonMolecule, LinkButtonAtom } from '@/components'
import { textContent } from '@/content'
import { getAsset } from '@/utils'

export const NavigationOrganism = () => {
    const [navScrolled, setNavScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState('')
    const { pages, buttons } = textContent.navigation

    const handleScroll = () => {
        if (window.scrollY > 50) setNavScrolled(true)
        else setNavScrolled(false)
    }

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

    useEffect(() => {
        const page = window.location.pathname.replace('/', '').replace('-', ' ')
        setCurrentPage(page)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <Box
            component="nav"
            sx={{
                position: 'fixed',
                width: '100%',
                boxShadow: navScrolled ? CARD_SHADOW : undefined,
                zIndex: 10,
                transition: 'background-color 0.3s ease',
                backgroundColor: navScrolled ? Colors.WHITE : 'transparent',
            }}
        >
            <BoxAtom alignment="center">
                <Toolbar
                    disableGutters
                    sx={{
                        p: 2,
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '90%',
                        maxWidth: screenMaxWidth,
                    }}
                >
                    <BoxAtom
                        sx={{
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
                                src={
                                    navScrolled
                                        ? getAsset(
                                              'logo-text-regular-red.svg',
                                              'logo'
                                          )
                                        : getAsset(
                                              'logo-text-white-red.svg',
                                              'logo'
                                          )
                                }
                                width={130}
                                height={50}
                                alt="logo adam it"
                            />
                        </Link>
                    </BoxAtom>
                    <BoxAtom
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            display: {
                                xs: menuOpen ? 'flex' : 'none',
                                md: 'flex',
                            },
                            backgroundColor: {
                                xs: menuOpen ? Colors.WHITE : undefined,
                            },

                            position: {
                                xs: menuOpen ? 'absolute' : undefined,
                            },
                            top: { xs: menuOpen ? 100 : undefined },
                            right: { xs: menuOpen ? 20 : undefined },
                            p: { xs: menuOpen ? 3 : undefined },
                            pl: { xs: menuOpen ? 6 : undefined },

                            flexGrow: 1,
                            justifyContent: { md: 'flex-end' },
                            alignItems: { xs: 'flex-end', md: undefined },
                            m: 0,
                            gap: 2,
                            boxShadow: {
                                xs: menuOpen ? CARD_SHADOW : undefined,
                                md: undefined,
                            },
                        }}
                    >
                        {pages.map((page, index) => (
                            <MenuItem
                                key={index}
                                sx={{
                                    px: 1,
                                    justifyContent: 'end',
                                    transition: '.3s',

                                    ':hover': {
                                        background: 'none',
                                    },

                                    a: {
                                        '::after': {
                                            content: '""',

                                            borderBottom:
                                                currentPage ===
                                                page.label.toLowerCase()
                                                    ? `2px solid ${Colors.ORANGE} !important`
                                                    : undefined,
                                            position: 'absolute',
                                            width: '100%',
                                            left: 0,
                                            bottom: -10,
                                        },
                                        ':hover::after': {
                                            content: '""',

                                            borderBottom: `2px solid ${Colors.ORANGE}`,
                                            position: 'absolute',
                                            width: '100%',
                                            left: 0,
                                            bottom: -10,
                                        },
                                    },
                                }}
                            >
                                <Link
                                    href={page.href}
                                    style={{
                                        paddingBottom: 0,
                                        textDecoration: 'none',
                                        borderBottom: '2px solid transparent',
                                    }}
                                >
                                    <TextAtom
                                        color={
                                            navScrolled || menuOpen
                                                ? Colors.DARK_BLUE
                                                : Colors.WHITE
                                        }
                                    >
                                        {page.label}
                                    </TextAtom>
                                </Link>
                            </MenuItem>
                        ))}
                        <LinkButtonAtom
                            label={buttons.jobs.label}
                            href={buttons.jobs.href}
                        />
                        <LinkButtonAtom
                            label={buttons.testnation.label}
                            href={buttons.testnation.href}
                            variant="outlined"
                            sx={{
                                borderColor:
                                    navScrolled || menuOpen
                                        ? Colors.ORANGE
                                        : Colors.WHITE,
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
                        />
                    </BoxAtom>

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
        </Box>
    )
}
