/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    async redirects() {
        return [
            {
                source: "/ffl",
                destination: "https://docs.google.com/forms/d/e/1FAIpQLScAy9aNdAsaKqFaE5YwaoGteJ-FqCQoY88_BCR8sw6oF2TAeA/viewform",
                permanent: false,
                basePath: false,
            }
        ]
    }
};

export default nextConfig;
