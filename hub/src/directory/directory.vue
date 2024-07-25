<script setup lang="ts">
import UserCardComponent from './../components/UserCard.vue'

const users: {
    title: string
    desc: string
    img?: any
    intr: string
}[] = []

for (let i = 0; i < 10; i++) {
    users.push({
        title: 'User ' + i,
        desc: '专业架构师、架构师、架构师',
        img: `https://www.loliapi.com/acg/pp?s=${i}`,
        intr: '尤雨溪是出生于中国江苏省无锡市的程序员，为JavaScript编程语言所使用Web应用框架“Vue.js”的发起者和开发者。'
    })
}
</script>

<template>
    <UserCardComponent :users="users" />
</template>

<style scoped lang="less"></style>
