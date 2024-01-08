/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    publicRuntimeConfig: {
        NEXT_PUBLIC_SANITY_PROJECT_ID:
            process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
        NEXT_PUBLIC_MAIL_USER: process.env.NEXT_PUBLIC_MAIL_USER,
        NEXT_PUBLIC_MAIL_PWD: process.env.NEXT_PUBLIC_MAIL_PWD,
    },
}

module.exports = nextConfig
