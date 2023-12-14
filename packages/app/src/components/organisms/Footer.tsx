import Link from 'next/link'
import Image from 'next/image'
import { Colors } from '@/constants'
import { screenMaxWidth } from '@/style'
import { BoxAtom, TextAtom, IconAtom } from '@/components'
import { textContent } from '@/content'
import { getAsset } from '@/utils'

export const FooterOrganism = () => {
    const content = textContent.footer

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
                                {content.navigation.title}
                            </TextAtom>
                            {content.navigation.links.map((link, index) => (
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
                                {content.support.title}
                            </TextAtom>
                            {content.support.links.map((link, index) => (
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
                                {content.contact.title}
                            </TextAtom>
                            {content.contact.links.map((link, index) => (
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
                    <BoxAtom
                        sx={{
                            img: {
                                md: {
                                    width: '100%',
                                    height: 100,
                                },
                            },
                        }}
                    >
                        <Image
                            src={getAsset('logo-text-white.svg', 'logo')}
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
                        {content.copyright}
                    </TextAtom>
                    <BoxAtom
                        direction="horizontal"
                        space={1}
                        sx={{
                            pt: {
                                xs: 1,
                                md: 0,
                            },
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Link
                            href=""
                            style={{
                                color: Colors.WHITE,
                                textDecoration: 'none',
                                whiteSpace: 'pre',
                            }}
                        >
                            <TextAtom>{content.terms_and_conditions}</TextAtom>
                        </Link>
                        <TextAtom color={Colors.WHITE}>|</TextAtom>
                        <Link
                            href=""
                            style={{
                                color: Colors.WHITE,
                                textDecoration: 'none',
                                whiteSpace: 'pre',
                            }}
                        >
                            <TextAtom>{content.privacy_policy}</TextAtom>
                        </Link>
                        <TextAtom color={Colors.WHITE}>|</TextAtom>
                        <Link
                            href=""
                            style={{
                                color: Colors.WHITE,
                                textDecoration: 'none',
                                whiteSpace: 'pre',
                            }}
                        >
                            <TextAtom>{content.cookies}</TextAtom>
                        </Link>
                    </BoxAtom>
                </BoxAtom>
            </BoxAtom>
        </BoxAtom>
    )
}
