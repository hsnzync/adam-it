import { Colors } from '@/constants'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    SxProps,
    Theme,
} from '@mui/material'
import { BoxAtom, ImageAtom, IconAtom, TextAtom, LinkButtonAtom } from '..'
import { screenMaxWidth } from '@/style'
import { getAsset } from '@/utils'

type Button =
    | {
          button: true
          buttonText: string
          buttonUrl: string
      }
    | {
          button: false
      }

type Props = {
    bgColor: string
    title: string
    subtitle?: string
    description: string
    imageUrl: string
    perks: string[]
    sx?: SxProps<Theme>
} & Button

export const TextImageTextSection = (props: Props) => {
    return (
        <BoxAtom
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
                alignment="start"
                space={3}
                sx={{ maxWidth: screenMaxWidth, m: 'auto' }}
            >
                <BoxAtom
                    direction="horizontal"
                    alignment="start"
                    space={5}
                    sx={{
                        position: 'relative',
                        maxWidth: screenMaxWidth,
                    }}
                >
                    <BoxAtom
                        space={1}
                        sx={{
                            width: '100%',
                        }}
                    >
                        {props.subtitle && (
                            <TextAtom
                                textTransform="uppercase"
                                color={Colors.BLUE}
                            >
                                {props.subtitle}
                            </TextAtom>
                        )}
                        <TextAtom variant="h4" header>
                            {props.title}
                        </TextAtom>
                        <TextAtom>{props.description}</TextAtom>
                    </BoxAtom>
                    <ImageAtom
                        src={getAsset(props.imageUrl)}
                        alt="perks of working at adam it"
                        sx={{
                            width: '100%',
                        }}
                    />
                    <BoxAtom
                        space={1}
                        sx={{
                            width: '100%',
                        }}
                    >
                        <List dense>
                            {props.perks?.map((perk, index) => (
                                <ListItem key={index} sx={{ p: 0, mb: 1 }}>
                                    <ListItemIcon sx={{ minWidth: 35 }}>
                                        <IconAtom
                                            iconName="checkCircleOutline"
                                            color={Colors.ORANGE}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <TextAtom header>{perk}</TextAtom>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                        {props.button && (
                            <LinkButtonAtom
                                label={props.buttonText}
                                href={props.buttonUrl}
                            />
                        )}
                    </BoxAtom>
                </BoxAtom>
            </BoxAtom>
        </BoxAtom>
    )
}
