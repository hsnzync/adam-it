import { SxProps, Theme } from '@mui/material'
import { BoxAtom, Background, TextAtom, ButtonMolecule } from '@/components'
import { screenMaxWidth } from '@/style'
import { Colors } from '@/constants'

interface Content {
    title: string
    subtitle: string
    description: string
    button_text?: string
}

interface Props {
    bgColor: string
    firstContent: Content[]
    secondContent: Content[]
    sx?: SxProps<Theme>
}

export const TwoTextSection = (props: Props) => {
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
                    {props.firstContent.map((text, index) => (
                        <BoxAtom key={index} space={1}>
                            <TextAtom
                                textTransform="uppercase"
                                color={Colors.BLUE}
                            >
                                {text.subtitle}
                            </TextAtom>
                            <TextAtom variant="h4" header>
                                {text.title}
                            </TextAtom>
                            <TextAtom sx={{ py: 1 }}>
                                {text.description}
                            </TextAtom>
                            {text.button_text && (
                                <ButtonMolecule label={text.button_text} />
                            )}
                        </BoxAtom>
                    ))}
                </BoxAtom>
                <BoxAtom
                    space={1}
                    sx={{
                        width: {
                            xs: '100%',
                            md: '50%',
                        },
                    }}
                >
                    {props.secondContent.map((text, index) => (
                        <BoxAtom key={index} space={1}>
                            <TextAtom
                                textTransform="uppercase"
                                color={Colors.BLUE}
                            >
                                {text.subtitle}
                            </TextAtom>
                            <TextAtom variant="h4" header>
                                {text.title}
                            </TextAtom>
                            <TextAtom sx={{ py: 1 }}>
                                {text.description}
                            </TextAtom>
                            {text.button_text && (
                                <ButtonMolecule label={text.button_text} />
                            )}
                        </BoxAtom>
                    ))}
                </BoxAtom>
                <BoxAtom />
            </BoxAtom>
        </Background>
    )
}
