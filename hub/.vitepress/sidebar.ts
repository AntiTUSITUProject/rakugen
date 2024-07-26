import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
    '/': [
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
    ],
    '/projects/': [
        {
            text: 'Projects',
            items: [
                {
                    text: '连续剧',
                    collapsed: false,
                    items: [
                        {
                            text: '保证书',
                            link: '/projects/保证书'
                        },
                        {
                            text: '逼哥传',
                            link: '/projects/逼哥传'
                        }
                    ]
                },
                {
                    text: '一般乐子',
                    collapsed: false,
                    items: [
                        {
                            text: 'MC 服务器后端大佬',
                            link: '/projects/MC 服务器后端大佬'
                        }
                    ]
                },
                {
                    text: '合集',
                    collapsed: false,
                    items: [
                        {
                            text: '合集1',
                            link: '/projects/合集1'
                        }
                    ]
                }
            ]
        }
    ]
}

export default sidebar
