/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/dates',
                destination: '/#important',
                permanent: true,
            }, {
                source: '/registration',
                destination: '/register',
                permanent: true,
            },
            {
                source: '/callforpapers',
                destination: '/call-for-papers',
                permanent: true,
            },
            {
                source: '/IEEEFORMAT/:slug',
                destination: '/',
                permanent: true,
            }
        ]
    },
}

module.exports = nextConfig
