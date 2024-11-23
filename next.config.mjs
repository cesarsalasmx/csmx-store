/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cesarsalas.mx',
        port: '',
        pathname: '/store/**', // Permite solo imágenes en este path
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        port: '',
        pathname: '/avatar/**', // Permite solo imágenes en este path
      },
    ],
  },
};

export default nextConfig;
