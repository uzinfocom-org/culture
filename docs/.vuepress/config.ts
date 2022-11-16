import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from '@vuepress/cli'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { defaultTheme } from '@vuepress/theme-default'
import { getDirname, path } from '@vuepress/utils'
import {
  head,
  navbarEn,
  navbarUz,
  sidebarEn,
  sidebarUz,
} from './settings'

// Unused plugin
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'


// @ts-ignore
const __dirname = getDirname(import.meta.url)
const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  // set site base to default value
  base: '/',

  // extra tags in `<head>`
  head,

  // site-level locales config
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Culture @ Uzinfocom',
      description: 'Creating our own culture together!',
    },
    '/uz/': {
      lang: 'uz-UZ',
      title: 'Uzinfocom',
      description: 'Birgalikda an\'ana yaratamiz!',
    },
  },

  // specify bundler via environment variable
  bundler:
    process.env.DOCS_BUNDLER === 'webpack' ? webpackBundler() : viteBundler(),

  // configure default theme
  theme: defaultTheme({
    logo: '/images/hero.png',
    repo: 'uzinfocom-org/culture',
    docsDir: 'docs',

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: navbarEn,
        // sidebar
        sidebar: sidebarEn,
        // page meta
        editLinkText: 'Edit this page on GitHub',
      },

      /**
       * Uzbek locale config
       */
      '/uz/': {
        // navbar
        navbar: navbarUz,
        selectLanguageName: 'O\'zbek',
        selectLanguageText: 'Tillar',
        selectLanguageAriaLabel: 'Tillar',
        // sidebar
        sidebar: sidebarUz,
        // page meta
        editLinkText: 'GitHub da o\'zgartirish',
        lastUpdatedText: 'Oxirgi yangilanish',
        contributorsText: 'Hissa qo\'shish',
        // custom containers
        tip: 'Yordam',
        warning: 'Ogohlantiruv',
        danger: 'Ehtiyot bo\'ling',
        // 404 page
        notFound: [
          'Siz bu yerdalarda nimalar qilib yuribsiz?',
          'Mazzami sizlarga?!',
        ],
        backToHome: 'Orqaga qaytish',
        // a11y
        openInNewWindow: 'Yangi oynada ochish',
        toggleColorMode: 'Rang rejimini o\'zgartirish',
        toggleSidebar: 'Yon panel yoqish',
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      // use a shiki plugin-in production mode instead
      prismjs: !isProd,
    },
  }),

  // configure markdown
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@vuepress/, path.resolve(__dirname, '../../ecosystem')),
    },
  },

  // use plugins
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    // only enable shiki plugin in production mode
    isProd ? shikiPlugin({ theme: 'dark-plus' }) : [],
  ],
})