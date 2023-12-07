import { breakspoints } from '@/style'

export const setBgPatternSize = (screenSize: number): number => {
    switch (screenSize) {
        case breakspoints.xs:
            return 400
        case breakspoints.sm:
            return 800
        case breakspoints.md:
            return 1200
        case breakspoints.lg:
            return 1600
        case breakspoints.xl:
            return 2000
        default:
            return 1200
    }
}
