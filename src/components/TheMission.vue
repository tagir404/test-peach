<script setup lang="ts">
import LeftPattern from './icons/LeftPattern.vue'
import RightPattern from './icons/RightPattern.vue'
</script>

<template>
    <section class="mission">
        <h2 class="mission__title">Миссия Softline</h2>
        <p class="mission__text">
            Мы помогаем организациям трансформироваться, работать эффективно и безопасно в условиях
            цифровой экономики.
        </p>

        <LeftPattern class="mission__left-pattern" />
        <RightPattern class="mission__right-pattern" />
    </section>
</template>

<style scoped lang="scss">
.mission {
    color: #fff;
    padding: 140px 70px;
    background: var(--red);
    display: flex;
    flex-direction: column;
    gap: 40px;
    text-align: center;
    position: relative;
    overflow: hidden;

    &__title {
        line-height: 1;
        position: relative;
        z-index: 2;
    }

    &__text {
        font-size: 32px;
        line-height: 1.5;
        position: relative;
        z-index: 2;
    }

    &__left-pattern,
    &__right-pattern {
        position: absolute;
        z-index: 1;
        top: 50%;
        transform: translateY(-50%);
    }

    &__left-pattern {
        left: 0;
    }

    &__right-pattern {
        right: 0;
    }
}

@media (max-width: 767px) {
    .mission {
        padding: 32px 5px;
        gap: 10px;

        &__text {
            font-size: 16px;
            line-height: 1.3;
        }

        &__left-pattern,
        &__right-pattern {
            height: 80%;
            width: auto;
        }

        &__left-pattern {
            left: -47px;
        }

        &__right-pattern {
            right: -47px;
        }
    }
}
</style>
