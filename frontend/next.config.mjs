/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost'],
        remotePatterns: [
            {
              protocol: 'http',
              hostname:  'localhost:1337',
              pathname: '/uploads/**',
              port: '1337'
            },
          ]
    }
};

export default nextConfig;
