import { SxProps, Theme } from '@mui/material'
import { BoxAtom, Background, TextAtom } from '@/components'
import { screenMaxWidth } from '@/style'

interface Content {
    title: string
    description: string
}

interface Props {
    bgColor: string
    content: Content[]
    sx?: SxProps<Theme>
}

export const OneTextSection = (props: Props) => {
    return (
        <Background
            as="section"
            alignment="center"
            sx={{
                backgroundColor: props.bgColor,
                p: {
                    xs: 3,
                    md: 5,
                },
                py: {
                    md: 10,
                },
                overflow: 'hidden',
                ...props.sx,
            }}
        >
            <BoxAtom
                direction="horizontal"
                alignment="start"
                space={5}
                sx={{
                    width: '100%',
                    position: 'relative',
                    maxWidth: screenMaxWidth,
                }}
            >
                <BoxAtom
                    space={1}
                    sx={{
                        width: {
                            xs: '100%',
                            md: '50%',
                        },
                    }}
                >
                    {props.content.map((text, index) => (
                        <BoxAtom key={index} space={2}>
                            <TextAtom variant="h4" header>
                                {text.title}
                            </TextAtom>
                            <TextAtom>{text.description}</TextAtom>
                        </BoxAtom>
                    ))}
                </BoxAtom>
                <BoxAtom />
            </BoxAtom>
        </Background>
    )
}
