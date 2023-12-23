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
            direction="horizontal"
            sx={{
                width: '100%',
                justifyContent: 'space-between',
            }}
        >
            <BoxAtom
                sx={{ justifyContent: 'space-between' }}
                direction="horizontal"
                space={5}
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
                        {formatSalary(props.job.minSalary, props.job.maxSalary)}
                    </TextAtom>
                </BoxAtom>
            </BoxAtom>
            <ButtonMolecule label={props.buttonLabel} />
        </BoxAtom>
    )
}
