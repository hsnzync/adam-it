'use client'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import Image from 'next/image'
import { FlexBox, FlexButton } from '.'
import { screenMaxWidth } from '@/style'
import { useEffect } from 'react'
import { Colors } from '@/constants'

const pages = ['Werkgever', 'Kandidaten', 'Over ons', 'Contact']

export const Navigation = () => {
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
                backgroundColor: 'transparent',
                zIndex: 10,
                transition: 'background-color 0.3s ease',
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
                        direction="horizontal"
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex' },
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
                    </FlexBox>
                </Toolbar>
            </FlexBox>
        </AppBar>
    )
}
