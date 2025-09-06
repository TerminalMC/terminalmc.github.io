---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "TerminalMC"
  tagline: Primarily QoL and utility mods for Minecraft
  image:
    src: /assets/logo.webp
    alt: TerminalMC
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme';
import modrinth from '/assets/modrinth.svg?raw';
import curseforge from '/assets/curseforge.svg?raw';

const members = [
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/ClientSort/HEAD/common/src/main/resources/assets/clientsort/icon.png',
    name: 'Client Sort',
    title: 'Adds versatile inventory sorting and transfer functions.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/project/K0AkAin6' },
      { icon: { svg: curseforge }, link: 'https://curseforge.com/minecraft/mc-mods/clientsort' },
      { icon: 'github', link: 'https://github.com/TerminalMC/ClientSort' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/MoreMouseTweaks/HEAD/common/src/main/resources/assets/moremousetweaks/icon.png',
    name: 'More Mouse Tweaks',
    title: 'Enhances mouse functionality in inventories.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/project/S8drsznD' },
      { icon: { svg: curseforge }, link: 'https://curseforge.com/minecraft/mc-mods/moremousetweaks' },
      { icon: 'github', link: 'https://github.com/TerminalMC/MoreMouseTweaks' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/CommandKeys/HEAD/common/src/main/resources/assets/commandkeys/icon.png',
    name: 'Command Keys',
    title: 'Adds a highly configurable command macro system.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/project/65UyswbY' },
      { icon: { svg: curseforge }, link: 'https://curseforge.com/minecraft/mc-mods/commandkeys' },
      { icon: 'github', link: 'https://github.com/TerminalMC/CommandKeys' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/ChatNotify/HEAD/common/src/main/resources/assets/chatnotify/icon.png',
    name: 'Chat Notify',
    title: 'Adds a highly configurable chat message notification system.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/project/Iudurxl8' },
      { icon: { svg: curseforge }, link: 'https://curseforge.com/minecraft/mc-mods/chatnotify' },
      { icon: 'github', link: 'https://github.com/TerminalMC/ChatNotify' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/EffectTimerPlus/HEAD/common/src/main/resources/assets/effecttimerplus/icon.png',
    name: 'Effect Timer Plus',
    title: 'Adds potency and duration indicators to status effect icons.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/project/JIUF2Wb5' },
      { icon: { svg: curseforge }, link: 'https://curseforge.com/minecraft/mc-mods/effecttimerplus' },
      { icon: 'github', link: 'https://github.com/TerminalMC/EffectTimerPlus' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/AutoReconnect/HEAD/common/src/main/resources/assets/autoreconnectrf/icon.png',
    name: 'Auto Reconnect',
    title: 'Automatically reconnects clients to servers after unintentional disconnection.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/project/PRy8Khga' },
      { icon: { svg: curseforge }, link: 'https://curseforge.com/minecraft/mc-mods/autoreconnectrf' },
      { icon: 'github', link: 'https://github.com/TerminalMC/AutoReconnect' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/ModListMemory/HEAD/common/src/main/resources/assets/modlistmemory/icon.png',
    name: 'Mod List Memory',
    title: 'Improves mod-list usability by remembering recent activity.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/project/qap5C41G' },
      { icon: { svg: curseforge }, link: 'https://curseforge.com/minecraft/mc-mods/modlistmemory' },
      { icon: 'github', link: 'https://github.com/TerminalMC/ModListMemory' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/XaeroZoomout/HEAD/common/src/main/resources/assets/xaerozoomout/icon.png',
    name: 'Xaero Zoomout',
    title: 'Reduces the minimum zoom of Xaero\'s World Map from 0.0625x to 0.0025x.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/project/T6oqPfxF' },
      { icon: { svg: curseforge }, link: 'https://curseforge.com/minecraft/mc-mods/xaerozoomout' },
      { icon: 'github', link: 'https://github.com/TerminalMC/XaeroZoomout' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/ClaimPoints/HEAD/common/src/main/resources/assets/claimpoints/icon.png',
    name: 'Claim Points',
    title: 'Adds support for semi-automatic tracking of GriefPrevention claims using Xaero\'s Minimap waypoints.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/project/dyuTci89' },
      { icon: { svg: curseforge }, link: 'https://curseforge.com/minecraft/mc-mods/claimpoints' },
      { icon: 'github', link: 'https://github.com/TerminalMC/ClaimPoints' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/NoCapes/HEAD/common/src/main/resources/assets/nocapes/icon.png',
    name: 'NoCapes',
    title: 'Conditionally disables rendering of any/all Minecraft capes.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/project/8mBskugS' },
      { icon: { svg: curseforge }, link: 'https://curseforge.com/minecraft/mc-mods/nocapes' },
      { icon: 'github', link: 'https://github.com/TerminalMC/NoCapes' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/SafeVoid/HEAD/common/src/main/resources/assets/safevoid/icon.png',
    name: 'SafeVoid',
    title: 'Disables void damage and wraps the world vertically.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/project/XLBH6YfK' },
      { icon: 'github', link: 'https://github.com/TerminalMC/SafeVoid' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/SignEdit/HEAD/common/src/main/resources/assets/signedit/icon.png',
    name: 'Sign Edit',
    title: 'Enhances the sign editor with automatic line wrapping, continuous travel and more.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/project/c7xDMxha' },
      { icon: { svg: curseforge }, link: 'https://curseforge.com/minecraft/mc-mods/sign-edit' },
      { icon: 'github', link: 'https://github.com/TerminalMC/SignEdit' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/SignCopy/HEAD/common/src/main/resources/assets/signcopy/icon.png',
    name: 'Sign Copy',
    title: 'Adds simple buttons for copying, inserting and erasing text from signs.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/project/cK4nxndh' },
      { icon: { svg: curseforge }, link: 'https://curseforge.com/minecraft/mc-mods/sign-copy' },
      { icon: 'github', link: 'https://github.com/TerminalMC/SignCopy' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/Resend/HEAD/common/src/main/resources/assets/resend/icon.png',
    name: 'Resend',
    title: 'Adds a keybind to resend the most recent message or command.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/project/LKV4a5rN' },
      { icon: { svg: curseforge }, link: 'https://curseforge.com/minecraft/mc-mods/resend' },
      { icon: 'github', link: 'https://github.com/TerminalMC/Resend' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/HereNThere/HEAD/common/src/main/resources/assets/herenthere/icon.png',
    name: 'Here \'n\' There',
    title: 'Adds tab-completable keywords for inserting positional info into chat messages.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/project/CdTnUpve' },
      { icon: { svg: curseforge }, link: 'https://curseforge.com/minecraft/mc-mods/herenthere' },
      { icon: 'github', link: 'https://github.com/TerminalMC/HereNThere' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/SearchStats/HEAD/common/src/main/resources/assets/searchstats/icon.png',
    name: 'Search Stats',
    title: 'Adds a search bar to the statistics screen.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/project/ExI7GmJi' },
      { icon: { svg: curseforge }, link: 'https://curseforge.com/minecraft/mc-mods/searchstats' },
      { icon: 'github', link: 'https://github.com/TerminalMC/SearchStats' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/ExportStats/HEAD/common/src/main/resources/assets/exportstats/icon.png',
    name: 'Export Stats',
    title: 'Adds a button to the statistics screen to export data to a text file.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/project/kyhaDyaG' },
      { icon: { svg: curseforge }, link: 'https://curseforge.com/minecraft/mc-mods/exportstats' },
      { icon: 'github', link: 'https://github.com/TerminalMC/ExportStats' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/ExtendedRaidar/HEAD/common/src/main/resources/assets/extendedraidar/icon.png',
    name: 'Extended Raidar',
    title: 'Increases the range at which raid mobs glow when ringing a bell.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/project/HPJBXGvE' },
      { icon: 'github', link: 'https://github.com/TerminalMC/ExtendedRaidar' }
    ]
  },
]
</script>

<VPTeamMembers size="small" :members="members" />
