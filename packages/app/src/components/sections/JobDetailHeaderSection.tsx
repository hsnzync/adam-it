import { BoxAtom, ButtonMolecule, TextAtom } from '@/components'
import { Colors } from '@/constants'
import { Job } from '@/types'
import { formatSalary } from '@/utils'

interface Props {
    typeLabel: string
    locationLabel: string
    hoursLabel: string
    salaryLabel: string
    buttonLabel: string
    job: Job
}

export const JobDetailHeaderSection = (props: Props) => {
    return (
        <BoxAtom
            space={3}
            sx={{
                width: '100%',
                p: { xs: 2 },
                justifyContent: 'space-between',
                flexDirection: { xs: 'column', md: 'row' },
            }}
        >
            {props.job && (
                <BoxAtom
                    space={3}
                    sx={{
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            lg: 'row',
                        },
                    }}
                >
                    <BoxAtom direction="vertical">
                        <TextAtom textTransform="uppercase" color={Colors.BLUE}>
                            {props.typeLabel}
                        </TextAtom>
                        <TextAtom>{props.job.type}</TextAtom>
                    </BoxAtom>
                    <BoxAtom direction="vertical">
                        <TextAtom textTransform="uppercase" color={Colors.BLUE}>
                            {props.locationLabel}
                        </TextAtom>
                        <TextAtom>{props.job.location}</TextAtom>
                    </BoxAtom>
                    <BoxAtom direction="vertical">
                        <TextAtom textTransform="uppercase" color={Colors.BLUE}>
                            {props.hoursLabel}
                        </TextAtom>
                        <TextAtom>{props.job.hours}</TextAtom>
                    </BoxAtom>
                    <BoxAtom direction="vertical">
                        <TextAtom textTransform="uppercase" color={Colors.BLUE}>
                            {props.salaryLabel}
                        </TextAtom>
                        <TextAtom>
                            {formatSalary(
                                props.job.minSalary,
                                props.job.maxSalary
                            )}
                        </TextAtom>
                    </BoxAtom>
                </BoxAtom>
            )}

            {!props.job && (
                <TextAtom color={Colors.BLUE}>Aan het laden...</TextAtom>
            )}
            <ButtonMolecule
                label={props.buttonLabel}
                href="#apply-form"
                sx={{ height: 'fit-content', minWidth: 'fit-content' }}
            />
        </BoxAtom>
    )
}
