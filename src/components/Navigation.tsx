'use client'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import Image from 'next/image'
import { FlexBox, FlexButton } from '.'
import { screenMaxWidth } from '@/style'
import { useEffect, useState } from 'react'
import { Colors } from '@/constants'

const pages = ['Werkgever', 'Kandidaten', 'Over ons', 'Contact']

export const Navigation = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900)

    const handleScroll = () => {
        const scrolled = window.scrollY
        const appBar = document.getElementById('navigation')

        if (scrolled > 50) {
            if (appBar) {
                appBar.style.backgroundColor = Colors.DARK_BLUE
            }
        } else {
            if (appBar) {
                appBar.style.backgroundColor = 'transparent'
            }
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 900)
        }

        console.log(isSmallScreen)

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <AppBar
            id="navigation"
            position="fixed"
            sx={{
                boxShadow: 'none',
                zIndex: 10,
                transition: 'background-color 0.3s ease',
                backgroundColor: 'transparent',
            }}
        >
            <FlexBox alignment="center">
                <Toolbar
                    disableGutters
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        maxWidth: screenMaxWidth,
                    }}
                >
                    <Image
                        src="/logo-text.svg"
                        width={130}
                        height={80}
                        alt="logo adam it"
                    />

                    <FlexBox
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            display: { xs: 'none', md: 'flex' },
                            flexGrow: 1,
                            justifyContent: 'flex-end',
                            m: 0,
                            gap: 2,
                        }}
                    >
                        {pages.map((page, index) => (
                            <MenuItem key={index} sx={{ px: 1 }}>
                                <Typography>{page}</Typography>
                            </MenuItem>
                        ))}
                        <FlexButton label="Vacatures" />
                        <FlexButton label="Testnation" variant="outlined" />
                        {isSmallScreen && <FlexButton label="hamburger" />}
                    </FlexBox>
                </Toolbar>
            </FlexBox>
        </AppBar>
    )
}
