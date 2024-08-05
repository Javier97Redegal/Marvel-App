/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/character',
                destination: '/',
                permanent: true,
            },
        ]
    }
};

export default nextConfig;
