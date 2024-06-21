---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "TerminalMC"
  tagline: Client-side utility mods for Minecraft
  image:
    src: /assets/logo.webp
    alt: TerminalMC
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme';
import modrinth from '/assets/modrinth.svg?raw';

const members = [
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/XaeroZoomout/HEAD/common/src/main/resources/assets/xaerozoomout/icon.png',
    name: 'Xaero Zoomout',
    title: 'Reduces the minimum zoom of Xaero\'s World Map from 0.0625x to 0.0025x.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/T6oqPfxF' },
      { icon: 'github', link: 'https://github.com/TerminalMC/XaeroZoomout' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/ChatNotify/HEAD/common/src/main/resources/assets/chatnotify/icon.png',
    name: 'Chat Notify',
    title: 'Set up audio and visual notifications for chat messages.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/Iudurxl8' },
      { icon: 'github', link: 'https://github.com/TerminalMC/ChatNotify' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/EffectTimerPlus/HEAD/common/src/main/resources/assets/effecttimerplus/icon.png',
    name: 'Effect Timer Plus',
    title: 'Adds a potency indicator and countdown overlay to status effect icons.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/JIUF2Wb5' },
      { icon: 'github', link: 'https://github.com/TerminalMC/EffectTimerPlus' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/CommandKeys/HEAD/common/src/main/resources/assets/commandkeys/icon.png',
    name: 'Command Keys',
    title: 'Send pre-written chat messages and commands using hotkeys.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/65UyswbY' },
      { icon: 'github', link: 'https://github.com/TerminalMC/CommandKeys' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/SignCopy/HEAD/common/src/main/resources/assets/signcopy/icon.png',
    name: 'Sign Copy',
    title: 'Copy, insert and erase text from signs using a simple GUI.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/cK4nxndh' },
      { icon: 'github', link: 'https://github.com/TerminalMC/SignCopy' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/ClaimPoints/HEAD/common/src/main/resources/assets/claimpoints/icon.png',
    name: 'Claim Points',
    title: 'Easily add GriefPrevention claim coordinates as Xaero\'s Minimap waypoints.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/dyuTci89' },
      { icon: 'github', link: 'https://github.com/TerminalMC/ClaimPoints' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/AutoReconnect/HEAD/common/src/main/resources/assets/autoreconnectrf/icon.png',
    name: 'Auto Reconnect (Reforged)',
    title: 'Automatically reconnect to servers after unintentional disconnection.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/PRy8Khga' },
      { icon: 'github', link: 'https://github.com/TerminalMC/AutoReconnect' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/ClientSort/HEAD/common/src/main/resources/assets/clientsort/icon.png',
    name: 'Client Sort',
    title: 'Sort inventories with the click of a button.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/K0AkAin6' },
      { icon: 'github', link: 'https://github.com/TerminalMC/ClientSort' }
    ]
  },
]
</script>

<VPTeamMembers size="small" :members="members" />