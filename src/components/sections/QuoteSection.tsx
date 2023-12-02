import { Colors } from '@/constants'
import { screenMaxWidth } from '@/style'
import { Typography } from '@mui/material'
import { FlexBox } from '..'

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
                height: 500,
                overflow: 'hidden',
                zIndex: 5,
            }}
        >
            <FlexBox sx={{ maxWidth: screenMaxWidth.md }}>
                <Typography variant="h5" marginBottom={3} color={Colors.ORANGE}>
                    “{props.content}”
                </Typography>
                <Typography>- {props.name}</Typography>
            </FlexBox>
        </FlexBox>
    )
}
