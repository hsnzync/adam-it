import { Typography } from '@mui/material'
import { FlexBox } from '.'
import Link from 'next/link'
import { Colors } from '@/constants'
import { screenMaxWidth } from '@/style'

export const Footer = () => {
    const navigationLinks = [
        {
            name: 'Werkgevers',
            url: '',
        },
        {
            name: 'Werken bij',
            url: '',
        },
        {
            name: 'Over Adam IT',
            url: '',
        },
        {
            name: 'Testnation',
            url: '',
        },
        {
            name: 'Vacatures',
            url: '',
        },
    ]
    const supportLinks = [
        {
            name: 'Klantenservice',
            url: '',
        },
        {
            name: 'Contact',
            url: '',
        },
    ]
    const contactLinks = [
        {
            name: '+ 31 20 123 45 78',
            url: '',
        },
        {
            name: 'info@adamit.nl',
            url: '',
        },
    ]
    return (
        <FlexBox
            direction="horizontal"
            alignment="center"
            bgColor={Colors.ORANGE}
        >
            <FlexBox
                sx={{ p: 5, maxWidth: screenMaxWidth }}
                direction="horizontal"
                space={5}
            >
                <FlexBox direction="vertical" space={1}>
                    <Typography variant="h6">Navigation</Typography>
                    {navigationLinks.map((link, index) => (
                        <Link href="" key={index}>
                            {link.name}
                        </Link>
                    ))}
                </FlexBox>
                <FlexBox direction="vertical" space={1}>
                    <Typography variant="h6">Support</Typography>
                    {supportLinks.map((link, index) => (
                        <Link href="" key={index}>
                            {link.name}
                        </Link>
                    ))}
                </FlexBox>
                <FlexBox direction="vertical" space={1}>
                    <Typography variant="h6">Contact</Typography>
                    {contactLinks.map((link, index) => (
                        <Link href="" key={index}>
                            {link.name}
                        </Link>
                    ))}
                </FlexBox>
            </FlexBox>
        </FlexBox>
    )
}
