<script setup lang="ts">
import UserCardComponent from '../components/userCard.vue'

interface User {
    title: string
    desc: string
    img?: any
    intr: string
    link?: string
    tag: {
        show: boolean
        content?: string
        color?: 'pink' | 'blue' | 'green' | 'cyan' | 'red' | 'purple' | 'orange'
    }
}

// 连续剧
const continuous: User[] = [
    {
        title: '保证书传',
        desc: '群组创建大师，带领专业团队拥有三年开服经验。',
        img: './imgs/baozhengshu.jpg',
        intr: '保证书（昵称）带领的服务器曾拳打 Hypixel 脚踢 2B2T，揪出了一个又一个的内鬼，现在已经拥有了一个强大的服务器体系。',
        tag: {
            show: true,
            content: '典中典',
            color: 'pink'
        },
        link: '/projects/保证书'
    },
    {
        title: '逼哥',
        desc: '一个有着丰富经验的大佬，又有权又有势~',
        img: './imgs/bige.jpg',
        intr: '逼哥是一个有着丰富经验的大佬，曾开发带有 Q 绑查询功能的高级主页，其具有先进的权限控制系统，当查询到其自己时会返回「不可以呦~」。',
        tag: {
            show: false
        },
        link: '/projects/逼哥传'
    }
]

// 普通
const normal: User[] = [
    {
        title: '技术の北~',
        desc: 'MC 服务器后端大佬，拥有丰富的互联网冲浪经验。',
        img: './imgs/3582126020.jpg',
        intr: 'MC 服务器后端大佬，自赋「技术の北~」，「可爱的男孩子」，「mc域名解析大佬」，「MC服务器高手」等称号',
        tag: {
            show: true,
            content: '故事',
            color: 'blue'
        },
        link: '/projects/MC 服务器后端大佬'
    }
]

// 合集
const collection: User[] = [
    {
        title: '通用合集1',
        desc: '数据火葬场之前的部分数据，有待优化',
        intr: '一些群组和互联网上的乐子。头像是来自 loliapi 的随机图片。',
        img: 'https://www.loliapi.com/acg/pp/',
        tag: {
            show: true,
            content: '合集',
            color: 'green'
        },
        link: '/projects/合集1'
    }
]
</script>

<template>
    <h2>连续剧</h2>
    <p>连续剧是指经过大量时间长期像连续剧一样持续收集的乐子，一般会有很长的时间线。</p>
    <UserCardComponent :users="continuous" />

    <h2>一般乐子</h2>
    <p>一般乐子指一般短期收集到的乐子。</p>
    <UserCardComponent :users="normal" />

    <h2>合集</h2>
    <p>
        合集指积聚微小的乐子，一般不会泛指某一人，而是一些列相关案例的合集，本质上和一般乐子没什么区别。
    </p>
    <UserCardComponent :users="collection" />
</template>

<style scoped lang="less"></style>
