<script setup lang="ts">
const items = [
    {
        accentText: '>30 лет',
        text: 'на IT-рынке'
    },
    {
        accentText: '4600',
        text: 'сотрудников в России'
    },
    {
        accentText: '25',
        text: 'городов России'
    },
    {
        accentText: '2000',
        text: 'разработчиков'
    },
    {
        accentText: '3000+',
        text: 'сотрудников ежегодно проходят оценку и обучение'
    }
]
</script>
<template>
    <section class="advantages">
        <div
            v-for="item in items"
            :key="item.text"
            class="advantages__item"
        >
            <span class="advantages__item-accent-text">{{ item.accentText }}</span>
            <p class="advantages__item-text">{{ item.text }}</p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.advantages {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px 8px;

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        flex-grow: 1;
        max-width: 180px;
    }

    &__item-text {
        font-size: 16px;
        line-height: 1.5;
    }

    &__item-accent-text {
        color: var(--red);
        font-size: 40px;
        font-weight: 600;
    }
}
</style>
