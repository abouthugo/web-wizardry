/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.abouthugo.dev',
        port: '',
        pathname: '/webstorage/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/gh/devicons/devicon/icons/**'
      }
    ]
  },
  output: 'standalone'
}

export default nextConfig
