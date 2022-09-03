/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://blog.glossboss.de",
  generateRobotsTxt: true // (optional)
  // ...other options
};
