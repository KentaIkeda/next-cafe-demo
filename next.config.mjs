/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://next-cafe-demo-ihj4houna-kenta-ikedas-projects.vercel.app/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
