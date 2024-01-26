import Link from 'next/link'
import { BoxAtom, ButtonMolecule, TextAtom } from '..'
import { CARD_SHADOW, Colors } from '@/constants'
import { motion } from 'framer-motion'

interface Props {
    onAccept: () => void
    onDismiss: () => void
}

export const CookieBannerMolecule = (props: Props) => {
    return (
        <motion.div
            animate={{
                opacity: 1,
                transition: { duration: 0.5, ease: 'easeIn' },
            }}
            initial={{ opacity: 0.8 }}
        >
            <BoxAtom
                alignment="center"
                sx={{
                    width: '100%',
                    position: 'fixed',
                    bottom: 0,
                    zIndex: 10,
                }}
            >
                <BoxAtom
                    space={5}
                    direction="horizontal"
                    alignment="center"
                    sx={{
                        m: 3,
                        p: 3,
                        backgroundColor: Colors.WHITE,
                        boxShadow: CARD_SHADOW,
                    }}
                >
                    <TextAtom variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
                        Deze website maakt gebruik van cookies om uw ervaring te
                        verbeteren. Door verder te gaan, stemt u in met ons
                        gebruik van cookies.
                        <br />
                        Klik op &apos;Akkoord&apos; om door te gaan of lees
                        ons&nbsp;
                        <Link href="#" style={{ color: Colors.ORANGE }}>
                            privacybeleid
                        </Link>{' '}
                        voor meer informatie.
                    </TextAtom>
                    <BoxAtom
                        alignment="center"
                        direction="horizontal"
                        space={3}
                        sx={{ width: { xs: '100%', md: 'auto' } }}
                    >
                        <ButtonMolecule
                            onClick={props.onAccept}
                            sx={{
                                width: '100%',
                                minWidth: {
                                    md: 220,
                                },
                                height: 'fit-content',
                            }}
                            label="Accepteer cookies"
                        />
                        <ButtonMolecule
                            onClick={props.onDismiss}
                            sx={{
                                width: '100%',
                                minWidth: { md: 150 },
                                height: 'fit-content',
                            }}
                            label="Afwijzen"
                        />
                    </BoxAtom>
                </BoxAtom>
            </BoxAtom>
        </motion.div>
    )
}
