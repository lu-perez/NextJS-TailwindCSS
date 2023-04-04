/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['tailwindui.com'],
    loader: 'default',
    // Enable rendering of SVG images
    // NOTE: This can be unsafe, make sure you trust the source of your SVG images
    // Alternatively, you can use a package like "svg-sanitizer" to sanitize your SVGs
    // before rendering them
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
