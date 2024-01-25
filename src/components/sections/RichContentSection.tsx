import { Colors } from '@/constants'
import { screenMaxWidth } from '@/style'
import { BoxAtom, TextAtom, RichContentText } from '@/components'
import { RichContent } from '@/types'

interface Props {
    content: RichContent[]
}

export const RichContentSection = (props: Props) => {
    return (
        <BoxAtom
            bgColor={Colors.WHITE}
            alignment="start"
            sx={{
                py: 5,
                display: props.content?.length === 0 ? 'flex' : undefined,
                alignItems: props.content?.length === 0 ? 'center' : 'start',
            }}
        >
            <BoxAtom
                sx={{
                    maxWidth: screenMaxWidth,
                }}
            >
                {props.content.length > 0 &&
                    props.content?.map((section, index) => (
                        <BoxAtom key={index} sx={{ py: 2 }}>
                            <TextAtom variant="h2" header>
                                {section.title}
                            </TextAtom>
                            <RichContentText richText={section.description} />
                        </BoxAtom>
                    ))}
                {props.content?.length === 0 && (
                    <TextAtom color={Colors.ORANGE}>
                        Geen pagina elementen gevonden
                    </TextAtom>
                )}
            </BoxAtom>
        </BoxAtom>
    )
}
