import { Colors } from '@/constants'
import { screenMaxWidth } from '@/style'
import { BoxAtom, TextAtom, RichContent } from '@/components'
import { Job } from '@/types'

interface Props {
    job: Job
}

export const JobDetailSection = (props: Props) => {
    return (
        <BoxAtom bgColor={Colors.WHITE} alignment="start" sx={{ py: 5 }}>
            <BoxAtom
                sx={{
                    maxWidth: screenMaxWidth,
                }}
            >
                {props.job?.sections?.length > 0 &&
                    props.job?.sections?.map((section, index) => (
                        <BoxAtom key={index} sx={{ py: 2 }}>
                            <TextAtom variant="h4" header>
                                {section.title}
                            </TextAtom>
                            <RichContent richText={section.description} />
                        </BoxAtom>
                    ))}
                {props.job?.sections?.length === 0 && (
                    <TextAtom color={Colors.BLUE}>Aan het laden...</TextAtom>
                )}
            </BoxAtom>
        </BoxAtom>
    )
}
