'use client'
import { Container } from '@mui/material'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Colors } from '@/constants/colors'

export const LoadingBackgroundPattern = () => {
    const [animationCount, setAnimationCount] = useState(0)
    const animationLength = 1
    const wrapperStyling = {
        position: 'absolute',
        p: '0 !important',
        width: 'fit-content',
        maxHeight: 'calc(100vh - 20px)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAnimationCount((prevCount: number) => prevCount + 1)
        }, 200)

        if (animationCount === 20) {
            clearInterval(intervalId)
        }
    }, [animationCount])

    return (
        <>
            <Container sx={{ ...wrapperStyling, bottom: 0 }}>
                <motion.div
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: animationLength,
                        easeIn: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <svg
                        width="1768"
                        height="500"
                        viewBox="0 0 1768 608"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <mask id="path-1-inside-1_368_1382" fill="white">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1566.93 1084.47L1767.28 884.107L883.642 0.464889L0.000261657 884.107L200.359 1084.47L883.642 401.183L1566.93 1084.47Z"
                            />
                        </mask>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1566.93 1084.47L1767.28 884.107L883.642 0.464889L0.000261657 884.107L200.359 1084.47L883.642 401.183L1566.93 1084.47Z"
                            fill="url(#paint0_linear_368_1382)"
                        />
                        <path
                            d="M1767.28 884.107L1769.41 886.228L1771.53 884.107L1769.41 881.986L1767.28 884.107ZM1566.93 1084.47L1564.8 1086.59L1566.93 1088.71L1569.05 1086.59L1566.93 1084.47ZM883.642 0.464889L885.764 -1.65633L883.642 -3.77767L881.521 -1.65633L883.642 0.464889ZM0.000261657 884.107L-2.12108 881.986L-4.24241 884.107L-2.12108 886.228L0.000261657 884.107ZM200.359 1084.47L198.238 1086.59L200.359 1088.71L202.481 1086.59L200.359 1084.47ZM883.642 401.183L885.764 399.062L883.642 396.941L881.521 399.062L883.642 401.183ZM1765.16 881.986L1564.8 1082.34L1569.05 1086.59L1769.41 886.228L1765.16 881.986ZM881.521 2.58623L1765.16 886.228L1769.41 881.986L885.764 -1.65633L881.521 2.58623ZM2.1216 886.228L885.764 2.58623L881.521 -1.65633L-2.12108 881.986L2.1216 886.228ZM202.481 1082.34L2.1216 881.986L-2.12108 886.228L198.238 1086.59L202.481 1082.34ZM202.481 1086.59L885.764 403.305L881.521 399.062L198.238 1082.34L202.481 1086.59ZM881.521 403.305L1564.8 1086.59L1569.05 1082.34L885.764 399.062L881.521 403.305Z"
                            fill="url(#paint1_linear_368_1382)"
                            mask="url(#path-1-inside-1_368_1382)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_368_1382"
                                x1="883.642"
                                y1="1084.47"
                                x2="883.642"
                                y2="0.465011"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#0E4F72" stop-opacity="0.2" />
                                <stop
                                    offset="1"
                                    stop-color="#0E4F72"
                                    stop-opacity="0"
                                />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_368_1382"
                                x1="883.642"
                                y1="1084.47"
                                x2="883.642"
                                y2="0.465011"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#E84631" />
                                <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
            </Container>
            <Container
                sx={{
                    ...wrapperStyling,
                    right: 0,
                }}
            >
                <motion.div
                    initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: animationLength,
                        easeIn: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <svg
                        width="693"
                        height="1270"
                        viewBox="0 0 793 1270"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <mask id="path-1-inside-1_368_1385" fill="white">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1084.47 -48.6408L884.107 -249L0.465049 634.642L884.107 1518.28L1084.47 1317.93L401.183 634.642L1084.47 -48.6408Z"
                            />
                        </mask>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1084.47 -48.6408L884.107 -249L0.465049 634.642L884.107 1518.28L1084.47 1317.93L401.183 634.642L1084.47 -48.6408Z"
                            fill="url(#paint0_linear_368_1385)"
                        />
                        <path
                            d="M884.107 -249L886.228 -251.121L884.107 -253.243L881.986 -251.121L884.107 -249ZM1084.47 -48.6408L1086.59 -46.5195L1088.71 -48.6408L1086.59 -50.7621L1084.47 -48.6408ZM0.465049 634.642L-1.65629 632.521L-3.77763 634.642L-1.65629 636.763L0.465049 634.642ZM884.107 1518.28L881.986 1520.41L884.107 1522.53L886.228 1520.41L884.107 1518.28ZM1084.47 1317.93L1086.59 1320.05L1088.71 1317.93L1086.59 1315.8L1084.47 1317.93ZM401.183 634.642L399.062 632.521L396.941 634.642L399.062 636.763L401.183 634.642ZM881.986 -246.879L1082.34 -46.5195L1086.59 -50.7621L886.228 -251.121L881.986 -246.879ZM2.58639 636.763L886.228 -246.879L881.986 -251.121L-1.65629 632.521L2.58639 636.763ZM886.228 1516.16L2.58639 632.521L-1.65629 636.763L881.986 1520.41L886.228 1516.16ZM1082.34 1315.8L881.986 1516.16L886.228 1520.41L1086.59 1320.05L1082.34 1315.8ZM1086.59 1315.8L403.305 632.521L399.062 636.763L1082.34 1320.05L1086.59 1315.8ZM403.305 636.763L1086.59 -46.5195L1082.34 -50.7621L399.062 632.521L403.305 636.763Z"
                            fill="url(#paint1_linear_368_1385)"
                            mask="url(#path-1-inside-1_368_1385)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_368_1385"
                                x1="1084.47"
                                y1="634.642"
                                x2="0.465049"
                                y2="634.642"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#0E4F72" stop-opacity="0.2" />
                                <stop
                                    offset="1"
                                    stop-color="#0E4F72"
                                    stop-opacity="0"
                                />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_368_1385"
                                x1="1084.47"
                                y1="634.642"
                                x2="0.465049"
                                y2="634.642"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#E84631" />
                                <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
            </Container>
            <Container sx={{ ...wrapperStyling, left: 0 }}>
                <motion.div
                    initial={{ x: -50 }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: animationLength,
                        easeIn: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <svg
                        width="693"
                        height="1270"
                        viewBox="0 0 793 1270"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <mask id="path-1-inside-1_368_1388" fill="white">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M-291 1317.93L-90.6408 1518.28L793.001 634.642L-90.6406 -249L-291 -48.6409L392.283 634.642L-291 1317.93Z"
                            />
                        </mask>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M-291 1317.93L-90.6408 1518.28L793.001 634.642L-90.6406 -249L-291 -48.6409L392.283 634.642L-291 1317.93Z"
                            fill="url(#paint0_linear_368_1388)"
                        />
                        <path
                            d="M-90.6408 1518.28L-92.7622 1520.41L-90.6408 1522.53L-88.5195 1520.41L-90.6408 1518.28ZM-291 1317.93L-293.121 1315.8L-295.243 1317.93L-293.121 1320.05L-291 1317.93ZM793.001 634.642L795.123 636.764L797.244 634.642L795.123 632.521L793.001 634.642ZM-90.6406 -249L-88.5193 -251.121L-90.6406 -253.243L-92.7619 -251.121L-90.6406 -249ZM-291 -48.6409L-293.121 -50.7622L-295.242 -48.6409L-293.121 -46.5195L-291 -48.6409ZM392.283 634.642L394.404 636.764L396.526 634.642L394.404 632.521L392.283 634.642ZM-88.5195 1516.16L-288.879 1315.8L-293.121 1320.05L-92.7622 1520.41L-88.5195 1516.16ZM790.88 632.521L-92.7622 1516.16L-88.5195 1520.41L795.123 636.764L790.88 632.521ZM-92.7619 -246.879L790.88 636.764L795.123 632.521L-88.5193 -251.121L-92.7619 -246.879ZM-288.878 -46.5195L-88.5193 -246.879L-92.7619 -251.121L-293.121 -50.7622L-288.878 -46.5195ZM-293.121 -46.5195L390.162 636.764L394.404 632.521L-288.878 -50.7622L-293.121 -46.5195ZM390.162 632.521L-293.121 1315.8L-288.879 1320.05L394.404 636.764L390.162 632.521Z"
                            fill="url(#paint1_linear_368_1388)"
                            mask="url(#path-1-inside-1_368_1388)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_368_1388"
                                x1="-291"
                                y1="634.642"
                                x2="793.001"
                                y2="634.642"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#0E4F72" stop-opacity="0.2" />
                                <stop
                                    offset="1"
                                    stop-color="#0E4F72"
                                    stop-opacity="0"
                                />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_368_1388"
                                x1="-291"
                                y1="634.642"
                                x2="793.001"
                                y2="634.642"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#E84631" />
                                <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
            </Container>
            <Container sx={{ ...wrapperStyling, top: 0 }}>
                <motion.div
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: animationLength,
                        easeIn: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <svg
                        width="1768"
                        height={508}
                        viewBox="0 0 1768 608"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <mask id="path-1-inside-1_368_1379" fill="white">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M200.359 -476L0 -275.641L883.642 608.001L1767.28 -275.641L1566.93 -476L883.642 207.283L200.359 -476Z"
                            />
                        </mask>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M200.359 -476L0 -275.641L883.642 608.001L1767.28 -275.641L1566.93 -476L883.642 207.283L200.359 -476Z"
                            fill="url(#paint0_linear_368_1379)"
                        />
                        <path
                            d="M0 -275.641L-2.12132 -277.762L-4.24264 -275.641L-2.12132 -273.52L0 -275.641ZM200.359 -476L202.48 -478.121L200.359 -480.243L198.238 -478.121L200.359 -476ZM883.642 608.001L881.521 610.123L883.642 612.244L885.763 610.123L883.642 608.001ZM1767.28 -275.641L1769.41 -273.52L1771.53 -275.641L1769.41 -277.762L1767.28 -275.641ZM1566.93 -476L1569.05 -478.121L1566.93 -480.243L1564.8 -478.121L1566.93 -476ZM883.642 207.283L881.521 209.404L883.642 211.526L885.763 209.404L883.642 207.283ZM2.12132 -273.52L202.48 -473.879L198.238 -478.121L-2.12132 -277.762L2.12132 -273.52ZM885.763 605.88L2.12132 -277.762L-2.12132 -273.52L881.521 610.123L885.763 605.88ZM1765.16 -277.762L881.521 605.88L885.763 610.123L1769.41 -273.52L1765.16 -277.762ZM1564.8 -473.879L1765.16 -273.52L1769.41 -277.762L1569.05 -478.121L1564.8 -473.879ZM1564.8 -478.121L881.521 205.162L885.763 209.404L1569.05 -473.879L1564.8 -478.121ZM885.763 205.162L202.48 -478.121L198.238 -473.879L881.521 209.404L885.763 205.162Z"
                            fill="url(#paint1_linear_368_1379)"
                            mask="url(#path-1-inside-1_368_1379)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_368_1379"
                                x1="883.642"
                                y1="-476"
                                x2="883.642"
                                y2="608.001"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#0E4F72" stop-opacity="0.2" />
                                <stop
                                    offset="1"
                                    stop-color="#0E4F72"
                                    stop-opacity="0"
                                />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_368_1379"
                                x1="883.642"
                                y1="-476"
                                x2="883.642"
                                y2="608.001"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#E84631" />
                                <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
            </Container>

            {/* Glowing effect */}
            <motion.div
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{
                    duration: animationLength,
                    easeIn: [0, 0.71, 0.2, 1.01],
                }}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: Colors.RED,
                    filter: 'blur(100px)',
                    width: '100vw',
                    height: '100px',
                }}
            />
        </>
    )
}
