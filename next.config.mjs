/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["avatars.githubusercontent.com"],
    },
    experimental: {
        optimizeCss: true,
    },
    webpack(config) {
        config.resolve.fallback = { fs: false };
        return config;
    },
};

export default nextConfig;
