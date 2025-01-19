---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "TerminalMC"
  tagline: Utility and QoL mods for Minecraft
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
    avatar: 'https://raw.githubusercontent.com/TerminalMC/ClientSort/HEAD/common/src/main/resources/assets/clientsort/icon.png',
    name: 'Client Sort',
    title: 'Adds a keybind to sort inventories.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/K0AkAin6' },
      { icon: 'github', link: 'https://github.com/TerminalMC/ClientSort' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/CommandKeys/HEAD/common/src/main/resources/assets/commandkeys/icon.png',
    name: 'Command Keys',
    title: 'A powerful command macro mod.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/65UyswbY' },
      { icon: 'github', link: 'https://github.com/TerminalMC/CommandKeys' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/EffectTimerPlus/HEAD/common/src/main/resources/assets/effecttimerplus/icon.png',
    name: 'Effect Timer Plus',
    title: 'Adds potency and duration indicators to status effect icons.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/JIUF2Wb5' },
      { icon: 'github', link: 'https://github.com/TerminalMC/EffectTimerPlus' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/ChatNotify/HEAD/common/src/main/resources/assets/chatnotify/icon.png',
    name: 'Chat Notify',
    title: 'Plays a ping sound when your name is mentioned.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/Iudurxl8' },
      { icon: 'github', link: 'https://github.com/TerminalMC/ChatNotify' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/Flashside/HEAD/common/src/main/resources/assets/flashside/icon.png',
    name: 'Flashside',
    title: 'Moves the Flashback recording buttons to the side of the game menu.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/JsjifJaW' },
      { icon: 'github', link: 'https://github.com/TerminalMC/Flashside' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/AutoReconnect/HEAD/common/src/main/resources/assets/autoreconnectrf/icon.png',
    name: 'Auto Reconnect',
    title: 'Automatically reconnects you to servers after unintentional disconnection.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/PRy8Khga' },
      { icon: 'github', link: 'https://github.com/TerminalMC/AutoReconnect' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/SignCopy/HEAD/common/src/main/resources/assets/signcopy/icon.png',
    name: 'Sign Copy',
    title: 'Adds buttons for copying, inserting and erasing text from signs.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/cK4nxndh' },
      { icon: 'github', link: 'https://github.com/TerminalMC/SignCopy' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/MoreMouseTweaks/HEAD/common/src/main/resources/assets/moremousetweaks/icon.png',
    name: 'More Mouse Tweaks',
    title: 'Enhances mouse functionality in inventories.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/S8drsznD' },
      { icon: 'github', link: 'https://github.com/TerminalMC/MoreMouseTweaks' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/ClaimPoints/HEAD/common/src/main/resources/assets/claimpoints/icon.png',
    name: 'Claim Points',
    title: 'Allows you to track GriefPrevention claims using Xaero\'s Minimap waypoints.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/dyuTci89' },
      { icon: 'github', link: 'https://github.com/TerminalMC/ClaimPoints' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/SearchStats/HEAD/common/src/main/resources/assets/searchstats/icon.png',
    name: 'SearchStats',
    title: 'Adds a search bar to the statistics screen.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/ExI7GmJi' },
      { icon: 'github', link: 'https://github.com/TerminalMC/SearchStats' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/NoCapes/HEAD/common/src/main/resources/assets/nocapes/icon.png',
    name: 'NoCapes',
    title: 'Disables rendering of any/all Minecraft capes.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/8mBskugS' },
      { icon: 'github', link: 'https://github.com/TerminalMC/NoCapes' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/SafeVoid/HEAD/common/src/main/resources/assets/safevoid/icon.png',
    name: 'SafeVoid',
    title: 'Allows you to safely fly in the void.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/XLBH6YfK' },
      { icon: 'github', link: 'https://github.com/TerminalMC/SafeVoid' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/Resend/HEAD/common/src/main/resources/assets/resend/icon.png',
    name: 'Resend',
    title: 'Adds a keybind to resend the previous message or command.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/LKV4a5rN' },
      { icon: 'github', link: 'https://github.com/TerminalMC/Resend' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/TerminalMC/ModListMemory/HEAD/common/src/main/resources/assets/modlistmemory/icon.png',
    name: 'ModListMemory',
    title: 'Improves the mod list by remembering recent activity.',
    links: [
      { icon: { svg: modrinth }, link: 'https://modrinth.com/mod/LKV4a5rN' },
      { icon: 'github', link: 'https://github.com/TerminalMC/ModListMemory' }
    ]
  },
]
</script>

<VPTeamMembers size="small" :members="members" />
