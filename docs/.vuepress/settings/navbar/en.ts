import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'WIP',
    link: '/wip/',
  },
  {
    text: 'Useful',
    children: [
      {
        text: 'At Silicon Valley',
        children: [
          {
            text: 'Silicon Valley - vDude',
            link: 'https://youtu.be/9lO06Zxhu88',
          },
        ],
      },
    ],
  },
  {
    text: `v${version}`,
    children: [
      {
        text: 'v0.x',
        link: 'https://github.com/uzinfocom-org/culture/commits/main',
      },
    ],
  },
]
