import { Colors } from '@/constants'
import { SxProps, Theme } from '@mui/material'
import { BoxAtom, ImageAtom, Background, TextAtom } from '..'
import { screenMaxWidth } from '@/style'
import Image from 'next/image'

interface Props {
    sectionTitle?: string
    bgColor: string
    hasBgPattern?: boolean
    title: string
    subTitle: string
    description: string
    logo?: string
    sx?: SxProps<Theme>
}

export const TextImageSection = (props: Props) => {
    return (
        <Background
            as="section"
            hasPattern={props.hasBgPattern}
            alignment="center"
            sx={{
                backgroundColor: props.bgColor,
                p: {
                    xs: 3,
                    md: 5,
                },
                ...props.sx,
            }}
        >
            <BoxAtom
                alignment="start"
                space={3}
                sx={{ maxWidth: screenMaxWidth, m: 'auto' }}
            >
                {props.sectionTitle && (
                    <TextAtom variant="h4" header>
                        {props.sectionTitle}
                    </TextAtom>
                )}
                <BoxAtom
                    direction="horizontal"
                    alignment="center"
                    space={5}
                    sx={{
                        position: 'relative',
                        maxWidth: screenMaxWidth,
                    }}
                >
                    <BoxAtom
                        space={1}
                        sx={{
                            width: {
                                xs: '100%',
                                md: '50',
                            },
                        }}
                    >
                        {props.logo && (
                            <Image
                                src={props.logo}
                                alt="company logo"
                                width={80}
                                height={80}
                            />
                        )}
                        <TextAtom textTransform="uppercase" color={Colors.BLUE}>
                            {props.subTitle}
                        </TextAtom>
                        <TextAtom variant="h4" header>
                            {props.title}
                        </TextAtom>
                        <TextAtom>{props.description}</TextAtom>
                    </BoxAtom>
                    <ImageAtom
                        src="/meeting-image.jpg"
                        alt="perks of working at adam it"
                        sx={{
                            width: '100%',
                        }}
                    />
                </BoxAtom>
            </BoxAtom>
        </Background>
    )
}
