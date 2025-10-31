/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Only adjust watch options during local development
    if (process.env.NODE_ENV === 'development') {
      const ignored = [
        '**/public/**',
        '**/node_modules/**',
        '**/.git/**',
        '**/scripts/**',
      ]
      const existingIgnored = config.watchOptions?.ignored
      const combinedIgnored = Array.isArray(existingIgnored)
        ? [...existingIgnored, ...ignored]
        : existingIgnored
          ? [existingIgnored, ...ignored]
          : ignored
      config.watchOptions = { ...(config.watchOptions || {}), ignored: combinedIgnored }
    }
    return config
  },
}

export default nextConfig
