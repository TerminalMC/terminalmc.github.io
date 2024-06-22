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
      { text: 'Discord', link: 'https://discord.gg/ZM83c2Abr7' },
      { text: 'Modrinth', link: 'https://modrinth.com/organization/terminalmc' },
      { text: 'GitHub', link: 'https://github.com/TerminalMC' },
    ],
  }
})
