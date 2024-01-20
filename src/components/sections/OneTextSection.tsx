import { SxProps, Theme } from '@mui/material'
import { BoxAtom, Background, TextAtom, LinkButtonAtom } from '@/components'
import { screenMaxWidth } from '@/style'
import { Button } from '@/types'

interface Content {
    title: string
    description: string
}

type Props = {
    bgColor: string
    content: Content[]
    sx?: SxProps<Theme>
} & Button

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
                    space={5}
                    sx={{
                        width: {
                            xs: '100%',
                            md: '50%',
                        },
                    }}
                >
                    {props.content.map((text, index) => (
                        <BoxAtom key={index} space={3}>
                            <TextAtom variant="h2" header>
                                {text.title}
                            </TextAtom>
                            <TextAtom sx={{ whiteSpace: 'pre-wrap' }}>
                                {text.description}
                            </TextAtom>
                            {props.button && (
                                <LinkButtonAtom
                                    href={props.buttonUrl}
                                    label={props.buttonText}
                                />
                            )}
                        </BoxAtom>
                    ))}
                </BoxAtom>
                <BoxAtom />
            </BoxAtom>
        </Background>
    )
}
