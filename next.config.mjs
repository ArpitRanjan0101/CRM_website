/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure that UI changes are reflected immediately by disabling some aggressive caching in dev if needed
  // However, Next.js usually handles this. Adding this config file can sometimes help trigger better HMR.
};

export default nextConfig;
