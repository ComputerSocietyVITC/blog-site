const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.tsx',
  output: 'export',
  distDir: 'out'
})

module.exports = withNextra()
