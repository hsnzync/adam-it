import { Colors } from '@/constants'
import { screenMaxWidth } from '@/style'
import { Typography } from '@mui/material'
import { FlexBox, FlexText } from '..'

interface Props {
    content: string
    name: string
}

export const QuoteSection = (props: Props) => {
    return (
        <FlexBox
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
            }}
        >
            <FlexBox sx={{ maxWidth: screenMaxWidth.md }}>
                <FlexText variant="h5" color={Colors.ORANGE} sx={{ mb: 3 }}>
                    “{props.content}”
                </FlexText>
                <FlexText>- {props.name}</FlexText>
            </FlexBox>
        </FlexBox>
    )
}
