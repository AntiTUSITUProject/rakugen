<script setup lang="ts">
import UserCardComponent from './../components/UserCard.vue'

const users: {
    title: string
    desc: string
    img?: any
    intr: string
    link?: string
    tag: {
        show: boolean
        content: string
        color: 'pink' | 'blue' | 'green' | 'cyan' | 'red' | 'purple' | 'orange'
    }
}[] = []

for (let i = 0; i < 3; i++) {
    users.push({
        title: 'User ' + i,
        desc: '专业架构师、架构师、架构师',
        img: `https://www.loliapi.com/acg/pp?s=${i}`,
        intr: '尤雨溪是出生于中国江苏省无锡市的程序员，为JavaScript编程语言所使用Web应用框架“Vue.js”的发起者和开发者。',
        link: '/test',
        tag: {
            show: true,
            content: '典中典',
            color: 'blue'
        }
    })
}
</script>

<template>
    <h2>连续剧</h2>
    <p>连续剧是指经过大量时间长期像连续剧一样持续收集的乐子，一般会有很长的时间线。</p>
    <UserCardComponent :users="users" />

    <h2>一般乐子</h2>
    <p>一般乐子指一般短期收集到的乐子。</p>
    <UserCardComponent :users="users" />

    <h2>合集</h2>
    <p>
        合集指积聚微小的乐子，一般不会泛指某一人，而是一些列相关案例的合集，本质上和一般乐子没什么区别。
    </p>
    <UserCardComponent :users="users" />
</template>

<style scoped lang="less"></style>
