import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Image from 'next/image'
import { Colors } from '@/constants/colors'
import { Icon } from './Icon'
import { FlexBox, FlexButton } from '.'
import { screenMaxWidth } from '@/style'

const pages = ['Werkgever', 'Kandidaten', 'Over ons', 'Contact']

export const Navigation = () => {
    return (
        <AppBar
            position="static"
            sx={{ backgroundColor: Colors.DARK_BLUE, boxShadow: 'none' }}
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
                    {/* <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box> */}
                </Toolbar>
            </FlexBox>
        </AppBar>
    )
}
