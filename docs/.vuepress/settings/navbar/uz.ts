import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarUz: NavbarConfig = [
  {
    text: 'Qo\'llanma',
    link: '/uz/guide/',
  },
  {
    text: 'Ishlanmoqda',
    link: '/uz/wip/',
  },
  {
    text: 'Foydali',
    children: [
      {
        text: 'Silikon Vodiysida',
        children: [
          {
            text: 'Silikon Vodiysi - vDude',
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
