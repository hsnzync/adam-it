import { Colors } from '@/constants'
import { FlexBox } from '.'
import Image from 'next/image'
import { SxProps, Theme } from '@mui/material'
import { screenMaxWidth } from '@/style'

interface Props {
    images: string[]
    divider?: boolean
    sx?: SxProps<Theme>
}

export const ImageSlider = (props: Props) => {
    return (
        <FlexBox
            as="section"
            space={5}
            alignment="center"
            sx={{
                height: 200,
                backgroundColor: Colors.WHITE,
                ...props.sx,
            }}
        >
            <FlexBox
                direction="horizontal"
                alignment="center"
                sx={{
                    py: 5,
                    width: '100%',
                    maxWidth: screenMaxWidth,
                    justifyContent: 'space-between',
                    borderTop: props.divider
                        ? `1px solid ${Colors.GREY}`
                        : undefined,
                }}
            >
                {props.images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt="company logo"
                        width={100}
                        height={100}
                        style={{
                            objectFit: 'contain',
                        }}
                    />
                ))}
            </FlexBox>
        </FlexBox>
    )
}
