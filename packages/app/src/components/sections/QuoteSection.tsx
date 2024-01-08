import { Colors } from '@/constants'
import { screenMaxWidth } from '@/style'
import { BoxAtom, TextAtom } from '@/components'

interface Props {
    content: string
    name: string
    width?: string
}

export const QuoteSection = (props: Props) => {
    return (
        <BoxAtom
            as="section"
            alignment="center"
            direction="vertical"
            bgColor={Colors.WHITE}
            sx={{
                height: {
                    xs: 'auto',
                    md: 500,
                },

                overflow: 'hidden',
                zIndex: 5,
                p: {
                    xs: 3,
                    md: 0,
                },
                py: {
                    xs: 5,
                    md: 0,
                },
            }}
        >
            <BoxAtom
                sx={{
                    width: {
                        xs: '100%',
                        md: props.width ?? 'auto',
                    },
                    maxWidth: screenMaxWidth,
                }}
            >
                <TextAtom
                    variant="h3"
                    color={Colors.ORANGE}
                    lineHeight={1.8}
                    sx={{ mb: 3 }}
                >
                    “{props.content}”
                </TextAtom>
                <TextAtom>- {props.name}</TextAtom>
            </BoxAtom>
        </BoxAtom>
    )
}
