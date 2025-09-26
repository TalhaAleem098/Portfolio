/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable ISR (Incremental Static Regeneration) for the entire website
  experimental: {
    // Enable ISR for static pages
    isrFlushToDisk: true,
  },
  // Configure caching headers
  async headers() {
    return [
      {
        // Apply ISR headers to all pages
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Specific caching for API routes
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=1800, stale-while-revalidate=3600',
          },
        ],
      },
      {
        // Specific caching for blog pages
        source: '/blogs/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
  // Configure image optimization
  images: {
    domains: ['localhost'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Optimize build output
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Configure compression
  compress: true,
  // Configure trailing slash
  trailingSlash: false,
  // Configure redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
