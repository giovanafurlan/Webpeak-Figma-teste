/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://webpeak-ferramenta.vercel.app/',
    generateRobotsTxt: true,
}