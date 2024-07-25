import { defineConfig } from 'vitepress'

import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Rakugen',
    description: 'A Rakugen Rite',
    srcDir: 'src',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Directory', link: '/directory' }
        ],

        sidebar: sidebar,

        socialLinks: [{ icon: 'github', link: 'https://github.com/alongw/rakugen' }],

        search: {
            provider: 'local'
        },

        editLink: {
            pattern: 'https://github.com/alongw/rakugen/edit/main/hub/src/:path',
            text: 'Edit this page on GitHub'
        }
    },
    markdown: {
        image: {
            lazyLoading: true
        }
    },
    lastUpdated: true
})
