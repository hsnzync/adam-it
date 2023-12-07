import Link from 'next/link'
import Image from 'next/image'
import { Colors } from '@/constants'
import { screenMaxWidth } from '@/style'
import { BoxAtom, TextAtom, IconAtom } from '@/components'

export const FooterOrganism = () => {
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
        <BoxAtom
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
            <BoxAtom
                sx={{ maxWidth: screenMaxWidth, width: '100%' }}
                direction="vertical"
                space={6}
            >
                <BoxAtom
                    sx={{
                        justifyContent: 'space-between',
                        gap: 5,
                        flexDirection: {
                            xs: 'column',
                            md: 'row',
                        },
                    }}
                >
                    <BoxAtom
                        direction="horizontal"
                        sx={{
                            gap: {
                                xs: 5,
                                md: 15,
                            },
                        }}
                    >
                        <BoxAtom direction="vertical" space={2}>
                            <TextAtom variant="h6" color={Colors.WHITE} header>
                                Navigation
                            </TextAtom>
                            {navigationLinks.map((link, index) => (
                                <Link
                                    href=""
                                    key={index}
                                    style={{
                                        color: Colors.WHITE,
                                        textDecoration: 'none',
                                    }}
                                >
                                    <TextAtom>{link.name}</TextAtom>
                                </Link>
                            ))}
                        </BoxAtom>
                        <BoxAtom direction="vertical" space={2}>
                            <TextAtom variant="h6" color={Colors.WHITE} header>
                                Support
                            </TextAtom>
                            {supportLinks.map((link, index) => (
                                <Link
                                    href=""
                                    key={index}
                                    style={{
                                        color: Colors.WHITE,
                                        textDecoration: 'none',
                                    }}
                                >
                                    <TextAtom>{link.name}</TextAtom>
                                </Link>
                            ))}
                        </BoxAtom>
                        <BoxAtom direction="vertical" space={2}>
                            <TextAtom variant="h6" color={Colors.WHITE} header>
                                Contact
                            </TextAtom>
                            {contactLinks.map((link, index) => (
                                <Link
                                    href=""
                                    key={index}
                                    style={{
                                        color: Colors.WHITE,
                                        textDecoration: 'none',
                                    }}
                                >
                                    <TextAtom>{link.name}</TextAtom>
                                </Link>
                            ))}
                            <BoxAtom
                                direction="horizontal"
                                space={1}
                                sx={{
                                    flexDirection: {
                                        xs: 'row',
                                    },
                                }}
                            >
                                <Link href="">
                                    <IconAtom
                                        iconName="linkedIn"
                                        color={Colors.WHITE}
                                        size={30}
                                    />
                                </Link>
                                <Link href="">
                                    <IconAtom
                                        iconName="instagram"
                                        color={Colors.WHITE}
                                        size={30}
                                    />
                                </Link>
                            </BoxAtom>
                        </BoxAtom>
                    </BoxAtom>
                    <BoxAtom>
                        <Image
                            src="/logo/logo-text-white.svg"
                            alt="logo adam it"
                            width={300}
                            height={80}
                        />
                    </BoxAtom>
                </BoxAtom>
                <BoxAtom
                    sx={{
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            md: 'row',
                        },
                    }}
                >
                    <TextAtom color={Colors.WHITE}>
                        Adam IT © 2024 - Alle rechten voorbehouden
                    </TextAtom>
                    <BoxAtom
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
                            <TextAtom>Algemene voorwaarden</TextAtom>
                        </Link>
                        <TextAtom color={Colors.WHITE}>|</TextAtom>
                        <Link
                            href=""
                            style={{
                                color: Colors.WHITE,
                                textDecoration: 'none',
                            }}
                        >
                            <TextAtom>Privacy Policy</TextAtom>
                        </Link>
                        <TextAtom color={Colors.WHITE}>|</TextAtom>
                        <Link
                            href=""
                            style={{
                                color: Colors.WHITE,
                                textDecoration: 'none',
                            }}
                        >
                            <TextAtom>Cookies</TextAtom>
                        </Link>
                    </BoxAtom>
                </BoxAtom>
            </BoxAtom>
        </BoxAtom>
    )
}
