const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/shop-page-example/" : "",
  basePath: isProd ? "/shop-page-example" : "",
  output: "export",
};

export default nextConfig;
