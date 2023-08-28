/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers(){
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com", "i.ibb.co",'images.unsplash.com','plus.unsplash.com'],
  },
};

module.exports = nextConfig;
