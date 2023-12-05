import { Typography } from '@mui/material'
import { FlexBox, FlexText, Icon } from '.'
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
        <FlexBox
            as="footer"
            bgColor={Colors.ORANGE}
            alignment="center"
            sx={{
                p: {
                    xs: 3,
                    md: 10,
                },
            }}
        >
            <FlexBox
                sx={{ maxWidth: screenMaxWidth, width: '100%' }}
                direction="vertical"
                space={6}
            >
                <FlexBox
                    sx={{
                        justifyContent: 'space-between',
                        gap: 5,
                        flexDirection: {
                            xs: 'column',
                            md: 'row',
                        },
                    }}
                >
                    <FlexBox
                        direction="horizontal"
                        sx={{
                            gap: {
                                xs: 5,
                                md: 15,
                            },
                        }}
                    >
                        <FlexBox direction="vertical" space={2}>
                            <FlexText
                                variant="h6"
                                color={Colors.WHITE}
                                isHeader
                            >
                                Navigation
                            </FlexText>
                            {navigationLinks.map((link, index) => (
                                <Link
                                    href=""
                                    key={index}
                                    style={{
                                        color: Colors.WHITE,
                                        textDecoration: 'none',
                                    }}
                                >
                                    <FlexText>{link.name}</FlexText>
                                </Link>
                            ))}
                        </FlexBox>
                        <FlexBox direction="vertical" space={2}>
                            <FlexText
                                variant="h6"
                                color={Colors.WHITE}
                                isHeader
                            >
                                Support
                            </FlexText>
                            {supportLinks.map((link, index) => (
                                <Link
                                    href=""
                                    key={index}
                                    style={{
                                        color: Colors.WHITE,
                                        textDecoration: 'none',
                                    }}
                                >
                                    <FlexText>{link.name}</FlexText>
                                </Link>
                            ))}
                        </FlexBox>
                        <FlexBox direction="vertical" space={2}>
                            <FlexText
                                variant="h6"
                                color={Colors.WHITE}
                                isHeader
                            >
                                Contact
                            </FlexText>
                            {contactLinks.map((link, index) => (
                                <Link
                                    href=""
                                    key={index}
                                    style={{
                                        color: Colors.WHITE,
                                        textDecoration: 'none',
                                    }}
                                >
                                    <FlexText>{link.name}</FlexText>
                                </Link>
                            ))}
                            <FlexBox
                                direction="horizontal"
                                space={1}
                                sx={{
                                    flexDirection: {
                                        xs: 'row',
                                    },
                                }}
                            >
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
                        flexDirection: {
                            xs: 'column',
                            md: 'row',
                        },
                    }}
                >
                    <FlexText color={Colors.WHITE}>
                        Adam IT © 2024 - Alle rechten voorbehouden
                    </FlexText>
                    <FlexBox
                        direction="horizontal"
                        space={1}
                        sx={{
                            flexDirection: {
                                xs: 'row',
                            },
                        }}
                    >
                        <Link
                            href=""
                            style={{
                                color: Colors.WHITE,
                                textDecoration: 'none',
                            }}
                        >
                            <FlexText>Algemene voorwaarden</FlexText>
                        </Link>
                        <FlexText color={Colors.WHITE}>|</FlexText>
                        <Link
                            href=""
                            style={{
                                color: Colors.WHITE,
                                textDecoration: 'none',
                            }}
                        >
                            <FlexText>Privacy Policy</FlexText>
                        </Link>
                        <FlexText color={Colors.WHITE}>|</FlexText>
                        <Link
                            href=""
                            style={{
                                color: Colors.WHITE,
                                textDecoration: 'none',
                            }}
                        >
                            <FlexText>Cookies</FlexText>
                        </Link>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </FlexBox>
    )
}
