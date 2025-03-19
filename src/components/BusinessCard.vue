<script setup lang="ts">
import { ref } from 'vue'
import IconArrow from './icons/IconArrow.vue'

interface ICard {
    title: string
    text: string
    img: string
}

defineProps<{
    card: ICard
}>()

const isOpen = ref(false)
</script>

<template>
    <div
        @click="isOpen = !isOpen"
        class="business-card"
        :class="{ 'business-card_open': isOpen }"
    >
        <div class="business-card__info">
            <div class="business-card__head">
                <p
                    class="business-card__title"
                    v-html="card.title"
                ></p>
                <IconArrow
                    class="business-card__arrow"
                    :class="{ 'business-card__arrow_active': isOpen }"
                />
            </div>

            <p class="business-card__text">{{ card.text }}</p>
        </div>
        <img
            :src="card.img"
            :alt="card.title"
            class="business-card__img"
        />
    </div>
</template>

<style scoped lang="scss">
.business-card {
    position: relative;
    overflow: hidden;

    @media (hover: hover) {
        &:hover {
            .business-card {
                &__info {
                    top: 0;
                    padding-top: 28px;
                }
                &__title {
                    height: auto;
                    margin-bottom: 20px;
                }
            }
        }
    }

    &__head {
        svg {
            display: none;
        }
    }

    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &__info {
        color: #fff;
        background: rgba(45, 54, 83, 0.6);
        position: absolute;
        padding: 0 20px 28px;
        width: 100%;
        height: 100%;
        top: calc(100% - 80px);
        transition: 0.3s;
    }

    &__title {
        font-size: 24px;
        font-weight: 600;
        height: 80px;
        display: flex;
        align-items: center;
        transition: 0.3s;
    }

    &__text {
        font-size: 17px;
        line-height: 1.4;
        max-width: 480px;
    }
}

@media (max-width: 767px) {
    .business-card {
        height: 60px;

        &_open {
            height: auto;

            .business-card {
                &__info {
                    padding-top: 20px;
                }

                &__head {
                    margin-bottom: 10px;
                }

                &__title {
                    height: auto;
                }
            }
        }

        &__head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;

            svg {
                display: block;
            }
        }

        &__info {
            position: relative;
            z-index: 2;
            top: 0;
            left: 0;
            padding-left: 10px;
            padding-right: 10px;
            transition: none;
            min-height: 240px;
        }

        &__title {
            font-size: 20px;
            height: 60px;
            transition: none;
        }

        &__text {
            font-size: 16px;
        }

        &__img {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
        }

        &__arrow {
            &_active {
                transform: rotate(180deg);
            }
        }
    }
}
</style>
