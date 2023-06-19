/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/styles/utils/_variables.scss";
    @import "@/styles/utils/_button.scss";
    `,
  }
}

module.exports = nextConfig
