/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'http://aleelmtalha.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin', '/secret'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/secret'],
      },
    ],
    additionalSitemaps: [
      'http://aleelmtalha.com/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  lastmod: new Date().toISOString(),
  transform: async (config, path) => {
    // Custom priority based on path
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/resume') {
      priority = 0.9;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};