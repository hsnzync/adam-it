import { breakpoints } from '@/style'

export const setXPatternPosition = (screenSize: number): number => {
    if (screenSize < breakpoints.sm) return -500
    if (screenSize >= breakpoints.sm && screenSize < breakpoints.md) return -400
    else if (screenSize >= breakpoints.md && screenSize < breakpoints.lg)
        return -300
    else if (screenSize >= breakpoints.lg && screenSize < breakpoints.xl)
        return -150
    else if (screenSize >= breakpoints.xl && screenSize < breakpoints.xxl)
        return 0
    else if (screenSize >= breakpoints.xxl) return 0
    return 0
}
