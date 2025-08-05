const languages = [
  "ar",
  "az",
  "be",
  "bn",
  "bg",
  "ca",
  "zhCN",
  "zhTW",
  "hr",
  "cs",
  "nl",
  "en",
  "tl",
  "fr",
  "de",
  "el",
  "hi",
  "hu",
  "id",
  "it",
  "ja",
  "ko",
  "ms",
  "my",
  "ne",
  "pl",
  "pt",
  "pa",
  "ro",
  "ru",
  "si",
  "so",
  "es",
  "sv",
  "th",
  "tr",
  "uk",
  "ur",
  "uz",
  "vi",
]; // 🌐 Use your actual languages

module.exports = {
  siteUrl: 'https://www.gabungpdf.id',
  generateRobotsTxt: true,

  // ✅ Force single sitemap file
  generateIndexSitemap: false,
  sitemapSize: 10000,

  // ✅ Optional SEO values
  changefreq: 'daily',
  priority: 0.8,

  // ✅ Add dynamic pages manually
  additionalPaths: async () => {
    const staticPaths = [
      '/',
      '/combine-pdf',
      '/privacy-policy',
      '/terms-of-service',
      '/blog',
      '/blog/gabungpdfid-the-easiest-way-to-combine-pdf-files',
      '/blog/gabungpdfid-the-ultimate-tool-to-combine-pdf-files'
    ];

    const paths = [];

    for (const lang of languages) {
      for (const path of staticPaths) {
        paths.push({
          loc: `/${lang}${path === '/' ? '' : path}`,
          changefreq: 'daily',
          priority: 0.8,
          lastmod: new Date().toISOString(),
        });
      }
    }

    return paths;
  },
};
