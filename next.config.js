const isProd = process.env.NODE_ENV === "production";
 
const nextConfig = {
  basePath: isProd ? "/Next.js-Tailwind-CSS-Portfolio-Template" : "",
  assetPrefix: isProd ? "/Next.js-Tailwind-CSS-Portfolio-Template/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};
 
module.exports = nextConfig;