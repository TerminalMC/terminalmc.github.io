import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TerminalMC",
  description: "Client-side utility mods for Minecraft",

  head: [[
    'link',
    { rel: 'icon', sizes: '32x32', href: '/assets/logo.webp' },
  ]],

  sitemap: {
    hostname: "https://terminalmc.dev",
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/logo.webp',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Discord', link: 'https://terminalmc.dev/discord' },
      { text: 'Modrinth', link: 'https://terminalmc.dev/modrinth' },
      { text: 'GitHub', link: 'https://terminalmc.dev/github' },
    ],
  }
})
