<script setup lang="ts">
import MainLogo from './icons/MainLogo.vue'

const navLinks = [
    {
        href: '#',
        text: 'Облачные решения'
    },
    {
        href: '#',
        text: 'Кибербезопасность'
    },
    {
        href: '#',
        text: 'Импортозамещение'
    },
    {
        href: '#',
        text: 'Цифровая трансформация'
    }
]
</script>

<template>
    <header class="header">
        <MainLogo class="header__logo" />
        <nav class="header__nav">
            <a
                v-for="{ href, text } in navLinks"
                :key="text"
                :href
                >{{ text }}</a
            >
        </nav>
    </header>
</template>

<style scoped lang="scss">
.header {
    border: 1px solid #d9d9d9;
    padding: 30px 70px;
    display: flex;
    gap: 16px;
    justify-content: space-between;

    &__nav {
        font-size: 18px;
        font-weight: 600;
        display: flex;
        gap: 20px;
    }

    &__logo {
        flex-shrink: 0;
    }
}

@media (max-width: 767px) {
    .header {
        padding: 16px 5px;
        flex-direction: column;

        &__nav {
            font-size: 14px;
            gap: 5px 10px;
            flex-wrap: wrap;
        }
    }
}
</style>
