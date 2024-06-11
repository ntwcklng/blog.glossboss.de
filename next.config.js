/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  images: {
    domains: [
      "glossbossuploader.s3.eu-central-1.amazonaws.com",
      "glossbossimages.s3.eu-central-1.amazonaws.com"
    ]
  }
};

module.exports = nextConfig;
