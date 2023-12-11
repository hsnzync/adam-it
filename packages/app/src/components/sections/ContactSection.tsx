import { Colors } from '@/constants'
import { screenMaxWidth } from '@/style'
import { BoxAtom, TextAtom, KpiCardMolecule } from '@/components'
import { IconName } from '@/types'
import Link from 'next/link'

interface Content {
    link: boolean
    content: string
    href?: string
}
interface Item {
    title: string
    text_1: string
    text_2: Content
    text_3: Content
    icon: IconName
}

interface Props {
    items: Item[]
}

export const ContactSection = (props: Props) => {
    return (
        <BoxAtom
            as="section"
            alignment="center"
            space={4}
            bgColor={Colors.WHITE}
            sx={{
                position: 'relative',
                height: {
                    xs: 'auto',
                    md: 500,
                },
                p: {
                    xs: 3,
                    md: 0,
                },
            }}
        >
            <BoxAtom
                direction="horizontal"
                alignment="center"
                sx={{
                    width: '100%',
                    maxWidth: screenMaxWidth,
                    gap: {
                        xs: 4,
                    },
                }}
            >
                {props.items.map((item, index) => (
                    <KpiCardMolecule key={index} icon={item.icon}>
                        <BoxAtom direction="vertical" space={1}>
                            <TextAtom variant="h6" header>
                                {item.title}
                            </TextAtom>

                            <BoxAtom>
                                <TextAtom>{item.text_1}</TextAtom>

                                {item.text_2.link ? (
                                    <Link
                                        href={item.text_2.href ?? ''}
                                        style={{
                                            color: Colors.ORANGE,
                                        }}
                                    >
                                        <TextAtom>
                                            {item.text_2.content}
                                        </TextAtom>
                                    </Link>
                                ) : (
                                    <TextAtom>{item.text_2.content}</TextAtom>
                                )}

                                {item.text_3.link ? (
                                    <Link
                                        href={item.text_3.href ?? ''}
                                        style={{
                                            color: Colors.ORANGE,
                                        }}
                                    >
                                        <TextAtom>
                                            {item.text_3.content}
                                        </TextAtom>
                                    </Link>
                                ) : (
                                    <TextAtom>{item.text_3.content}</TextAtom>
                                )}
                            </BoxAtom>
                        </BoxAtom>
                    </KpiCardMolecule>
                ))}
            </BoxAtom>
        </BoxAtom>
    )
}
