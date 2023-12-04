import { Colors } from '@/constants'
import { screenMaxWidth } from '@/style'
import { Typography } from '@mui/material'
import { FlexBox, KpiBlock } from '..'

interface Props {}

export const KpiSection = (props: Props) => {
    return (
        <FlexBox
            alignment="center"
            as="section"
            space={4}
            bgColor={Colors.WHITE}
            sx={{
                position: 'relative',
                height: 500,
                px: 5,
            }}
        >
            <FlexBox
                direction="horizontal"
                alignment="start"
                space={10}
                sx={{ maxWidth: screenMaxWidth }}
            >
                <Typography variant="h4">
                    Als IT’er organisaties verder helpen?
                </Typography>
                <KpiBlock
                    title="Test Automation Engineering"
                    description="Geautomatiseerde systeem opstellen om (complexe )
                            software te laten testen."
                    icon="computer"
                />
                <KpiBlock
                    title="Software testing op afstand"
                    description="The quick, brown fox jumps over a lazy dog.
                            DJs flock by when MTV ax quiz prog."
                    icon="pin"
                />
                <KpiBlock
                    title="Interim een vaste tester inhuren"
                    description="Een eigen vaste IT Professional inhuren als
                            test automation engineer."
                    icon="person"
                />
            </FlexBox>
        </FlexBox>
    )
}
