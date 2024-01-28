/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui", "db", "store", "middlewares", "types"]
};

export default nextConfig;
