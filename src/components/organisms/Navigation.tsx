import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import MenuItem from '@mui/material/MenuItem'
import Image from 'next/image'
import { screenMaxWidth } from '@/style'
import { useEffect, useState } from 'react'
import { Colors } from '@/constants'
import { motion } from 'framer-motion'
import { Box } from '@mui/material'
import Link from 'next/link'
import { BoxAtom, TextAtom, ButtonMolecule } from '@/components'

const pages = [
    { name: 'Werkgever', slug: '/werkgever' },
    { name: 'Kandidaten', slug: '/kandidaten' },
    { name: 'Over ons', slug: '/over-ons' },
    { name: 'Contact', slug: '/contact' },
]

export const NavigationOrganism = () => {
    const [navScrolled, setNavScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 50) setNavScrolled(true)
        else setNavScrolled(false)
    }

    const handleMenuOpen = () => {
        console.log(menuOpen)
        setMenuOpen(!menuOpen)
    }

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
                boxShadow: 'none',
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
                                        ? '/logo/logo-text-regular-red.svg'
                                        : '/logo/logo-text-white-red.svg'
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
                        }}
                    >
                        {pages.map((page, index) => (
                            <MenuItem
                                key={index}
                                sx={{
                                    px: 1,
                                    justifyContent: 'end',
                                    a: {
                                        textDecoration: 'none',
                                        borderBottom: '2px solid transparent',
                                        transition: '.2s',
                                        pb: 2,

                                        ':hover': {
                                            borderBottom: `2px solid ${Colors.ORANGE}`,
                                        },
                                    },
                                }}
                            >
                                <Link
                                    href={page.slug}
                                    style={{ paddingBottom: 0 }}
                                >
                                    <TextAtom
                                        color={
                                            navScrolled || menuOpen
                                                ? Colors.DARK_BLUE
                                                : Colors.WHITE
                                        }
                                    >
                                        {page.name}
                                    </TextAtom>
                                </Link>
                            </MenuItem>
                        ))}
                        <ButtonMolecule label="Vacatures" />
                        <ButtonMolecule
                            label="Testnation"
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
                            icon="menu"
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
                                '.icon-container': {
                                    top: {
                                        xs: 5,
                                        md: 2,
                                    },
                                    left: {
                                        xs: 5,
                                        md: 2,
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
