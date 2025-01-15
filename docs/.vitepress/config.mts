import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'TerminalMC',
  description: 'Utility and QoL mods for Minecraft',
  cleanUrls: true,

  head: [[
    'link',
    { rel: 'icon', sizes: '32x32', href: '/assets/logo.webp' },
  ]],

  sitemap: {
    hostname: 'https://terminalmc.dev/',
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/logo.webp',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Discord', link: '/discord' },
      { text: 'Modrinth', link: '/modrinth' },
      { text: 'GitHub', link: '/github' },
    ],
  }
})
