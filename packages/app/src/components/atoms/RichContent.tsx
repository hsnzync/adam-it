import { PortableText, PortableTextComponents } from '@portabletext/react'
import { BoxAtom, TextAtom } from '.'
import { PortableTextBlock } from '@portabletext/types'
import { Manrope, Source_Code_Pro } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

interface Props {
    richText: PortableTextBlock[]
}

const components: PortableTextComponents = {
    listItem: {
        bullet: ({ children }) => (
            <li>
                <TextAtom>{children}</TextAtom>
            </li>
        ),
    },
}

export const RichContent = (props: Props) => {
    return (
        <BoxAtom sx={{ p: { fontFamily: manrope.style.fontFamily } }}>
            <PortableText value={props.richText} components={components} />
        </BoxAtom>
    )
}
