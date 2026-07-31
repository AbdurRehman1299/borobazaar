/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  poweredByHeader: false,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "**",
      },
    ],
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
