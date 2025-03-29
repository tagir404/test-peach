<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
    item: {
        title: string
        icon: Component
    }
}>()
</script>

<template>
    <div class="compensation-item">
        <div class="compensation-item__icon">
            <component :is="item.icon" />
        </div>
        <p class="compensation-item__title">{{ item.title }}</p>
    </div>
</template>

<style scoped lang="scss">
.compensation-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    &__icon {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.05);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__title {
        font-size: 18px;
        line-height: 1.1;
        text-align: center;
    }
}

@media (max-width: 767px) {
    .compensation-item {
        &__icon {
            width: 80px;
            height: 80px;

            svg {
                width: 35px;
            }
        }

        &__title {
            font-size: 16px;
        }
    }
}
</style>
