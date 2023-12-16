import { BoxAtom, CardMolecule } from '@/components'
import { Colors } from '@/constants'

export const JobsListSection = () => {
    return (
        <BoxAtom
            as="section"
            alignment="center"
            bgColor={Colors.WHITE}
            sx={{
                p: {
                    xs: 3,
                    md: 5,
                },
                py: {
                    md: 10,
                },
                overflow: 'hidden',
            }}
        >
            <CardMolecule
                title="Test Automation Engineer"
                salary="€3.000 - €4.500"
                location="Maassluis"
                href=""
            />
        </BoxAtom>
    )
}
