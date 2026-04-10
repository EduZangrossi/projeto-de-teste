/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    workerThreads: false,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 500,
        aggregateTimeout: 200,
        ignored: ["**/node_modules/**", "**/.next/**"],
      }
    }
    return config
  },
}

export default nextConfig
