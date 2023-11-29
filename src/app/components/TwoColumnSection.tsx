import { Colors } from '@/constants'
import {
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import { FlexBox, FlexImage, Icon, FlexButton } from '.'

export const TwoColumnSection = () => {
    const perksList = [
        'Goed salaris, markt conform',
        'Altijd opdrachten genoeg',
        'Bawds jog, flick quartz, vex nymphs.',
    ]
    return (
        <FlexBox
            as="section"
            direction="horizontal"
            centered
            space={5}
            sx={{
                p: 5,
                backgroundColor: Colors.LIGHT_BLUE,
            }}
        >
            <FlexImage
                src="/meeting-image.jpg"
                width={700}
                height={500}
                alt="perks of working at adam it"
            />
            <FlexBox>
                <Typography variant="h5">
                    De voordelen van werken via Adam IT?
                </Typography>
                <Typography>
                    The quick, brown fox jumps over a lazy dog. DJs flock by
                    when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.
                    Bawds jog, flick quartz, vex nymphs.
                </Typography>
                <List dense sx={{ my: 3 }}>
                    {perksList.map((perk, index) => (
                        <ListItem key={index} sx={{ p: 0 }}>
                            <ListItemIcon sx={{ minWidth: 35 }}>
                                <Icon
                                    iconName="checkCircleOutline"
                                    color={Colors.ORANGE}
                                />
                            </ListItemIcon>
                            <ListItemText primary={perk} />
                        </ListItem>
                    ))}
                </List>
                <FlexButton label="Meer over kandidaten" />
            </FlexBox>
        </FlexBox>
    )
}
