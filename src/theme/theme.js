import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1536,
            xxl: 1700,
            xxxl: 2000,
        },
    },
})

export default theme
