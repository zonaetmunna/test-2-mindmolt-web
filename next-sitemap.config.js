/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.mindmolt.com',
  generateRobotsTxt: true, // Automatically generates robots.txt
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  // Extra paths to include in the sitemap.
  additionalPaths: async (config) => {
    const dynamicPaths = [];
    // Define the total number of pages. You can replace this with a dynamic call to get the total pages from your blog's backend
    const totalPages = 10;
    // Generate URLs for each blog page (including pagination)
    for (let page = 1; page <= totalPages; page++) {
      dynamicPaths.push({
        loc: `/blogs?page=${page}`, // URL with page parameter
        lastmod: new Date().toISOString(), // Last modified date
      });
    }

    return dynamicPaths; // Return all the dynamic paths to be included in the sitemap
  },
};
