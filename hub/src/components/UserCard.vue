<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    users: {
        title: string
        desc: string
        img: any
        intr: string
        link?: string
        tag: {
            show: boolean
            content: string
            color: 'pink' | 'blue' | 'green' | 'cyan' | 'red' | 'purple' | 'orange'
        }
    }[]
}>()
</script>

<template>
    <div class="user-card-group">
        <div class="user-card" v-for="user in props.users" :key="user.title">
            <div class="top">
                <div class="img">
                    <div v-if="typeof user.img == 'object'">
                        <component :is="user.img" />
                    </div>
                    <div v-else>
                        <img :src="user.img" alt="user image" />
                    </div>
                </div>
                <div class="info">
                    <div class="title">
                        <h3>{{ user.title }}</h3>
                        <div v-if="user.tag.show" :class="['tag', user.tag.color]">
                            {{ user.tag.content }}
                        </div>
                    </div>
                    <div class="desc">
                        <p>{{ user.desc }}</p>
                    </div>
                </div>
            </div>
            <div class="intr">
                <p>
                    {{ user.intr }}
                    <a v-if="user.link" :href="user.link">相关页面</a>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
@import url('./../assets/style/tagColor.less');

.user-card-group {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    .user-card {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

        .top {
            display: flex;
            gap: 1rem;

            .img {
                width: 100%;
                max-width: 80px;
                border-radius: 0.5rem;
            }

            .info {
                .title {
                    display: flex;

                    h3 {
                        margin: 0;
                    }

                    .tag {
                        box-sizing: border-box;
                        height: 25px;
                        margin-left: 8px;
                        padding: 0 5px;
                        border-radius: 4px;
                        font-size: 12px;
                        line-height: 25px;
                        // background-color: #ff5500;
                        // color: white;
                    }
                }

                .desc {
                    p {
                        margin: 0;
                        max-width: 200px;
                    }
                }
            }
        }

        .intr {
            p {
                margin: 0;
                max-width: 300px;
            }
        }
    }
}
</style>
