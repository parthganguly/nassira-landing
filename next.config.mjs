/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Reduce file watchers to avoid EMFILE errors by ignoring large/static dirs
    const ignored = [
      '**/public/**',
      '**/node_modules/**',
      '**/.git/**',
      '**/scripts/**',
    ]
    // Merge with any existing ignored rules without mutating read-only props
    const existingIgnored = config.watchOptions?.ignored
    const combinedIgnored = Array.isArray(existingIgnored)
      ? [...existingIgnored, ...ignored]
      : existingIgnored
        ? [existingIgnored, ...ignored]
        : ignored
    config.watchOptions = { ...(config.watchOptions || {}), ignored: combinedIgnored }
    return config
  },
}

export default nextConfig
