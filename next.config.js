/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com", "i.ibb.co",'images.unsplash.com','plus.unsplash.com'],
  },
};

module.exports = nextConfig;
