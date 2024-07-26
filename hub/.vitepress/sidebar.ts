import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = [
    {
        text: 'Main',
        items: [
            {
                text: 'Directory',
                link: '/directory'
            },
            {
                text: 'About',
                link: '/about'
            }
        ]
    }
]

export default sidebar
