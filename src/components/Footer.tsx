import { Typography } from '@mui/material'
import { FlexBox, Icon } from '.'
import Link from 'next/link'
import Image from 'next/image'
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
        <FlexBox as="footer" bgColor={Colors.ORANGE} alignment="center">
            <FlexBox
                sx={{ maxWidth: screenMaxWidth, width: '100%', p: 10 }}
                direction="vertical"
                space={6}
            >
                <FlexBox
                    sx={{
                        justifyContent: 'space-between',
                        gap: 5,
                    }}
                >
                    <FlexBox direction="horizontal" space={15}>
                        <FlexBox direction="vertical" space={2}>
                            <Typography variant="h6" color={Colors.WHITE}>
                                Navigation
                            </Typography>
                            {navigationLinks.map((link, index) => (
                                <Link
                                    href=""
                                    key={index}
                                    style={{
                                        color: Colors.WHITE,
                                        textDecoration: 'none',
                                    }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </FlexBox>
                        <FlexBox direction="vertical" space={2}>
                            <Typography variant="h6" color={Colors.WHITE}>
                                Support
                            </Typography>
                            {supportLinks.map((link, index) => (
                                <Link
                                    href=""
                                    key={index}
                                    style={{
                                        color: Colors.WHITE,
                                        textDecoration: 'none',
                                    }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </FlexBox>
                        <FlexBox direction="vertical" space={2}>
                            <Typography variant="h6" color={Colors.WHITE}>
                                Contact
                            </Typography>
                            {contactLinks.map((link, index) => (
                                <Link
                                    href=""
                                    key={index}
                                    style={{
                                        color: Colors.WHITE,
                                        textDecoration: 'none',
                                    }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <FlexBox direction="horizontal" space={1}>
                                <Link href="">
                                    <Icon
                                        iconName="linkedIn"
                                        color={Colors.WHITE}
                                        size={30}
                                    />
                                </Link>
                                <Link href="">
                                    <Icon
                                        iconName="instagram"
                                        color={Colors.WHITE}
                                        size={30}
                                    />
                                </Link>
                            </FlexBox>
                        </FlexBox>
                    </FlexBox>
                    <FlexBox>
                        <Image
                            src="/logo/logo-text-white.svg"
                            alt="logo adam it"
                            width={300}
                            height={80}
                        />
                    </FlexBox>
                </FlexBox>
                <FlexBox
                    sx={{
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography color={Colors.WHITE}>
                        Adam IT © 2024 - Alle rechten voorbehouden
                    </Typography>
                    <FlexBox direction="horizontal" space={1}>
                        <Link
                            href=""
                            style={{
                                color: Colors.WHITE,
                                textDecoration: 'none',
                            }}
                        >
                            Algemene voorwaarden
                        </Link>
                        <Typography color={Colors.WHITE}>|</Typography>
                        <Link
                            href=""
                            style={{
                                color: Colors.WHITE,
                                textDecoration: 'none',
                            }}
                        >
                            Privacy Policy
                        </Link>
                        <Typography color={Colors.WHITE}>|</Typography>
                        <Link
                            href=""
                            style={{
                                color: Colors.WHITE,
                                textDecoration: 'none',
                            }}
                        >
                            Cookies
                        </Link>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </FlexBox>
    )
}
