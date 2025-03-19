<script setup lang="ts">
import img1 from '../assets/img/corporate_life/1.jpg'
import img1mob from '../assets/img/corporate_life/1-mob.jpg'
import img2 from '../assets/img/corporate_life/2.jpg'
import img2mob from '../assets/img/corporate_life/2-mob.jpg'
import img3 from '../assets/img/corporate_life/3.jpg'
import img3mob from '../assets/img/corporate_life/3-mob.jpg'
import img4 from '../assets/img/corporate_life/4.jpg'
import img4mob from '../assets/img/corporate_life/4-mob.jpg'
import img5 from '../assets/img/corporate_life/5.jpg'
import img5mob from '../assets/img/corporate_life/5-mob.jpg'
import SwiperArrow from './icons/SwiperArrow.vue'
import { ref, useTemplateRef } from 'vue'
import { type SwiperContainer } from 'swiper/element'

const slides = [
    {
        desktop: img1,
        mobile: img1mob
    },
    {
        desktop: img2,
        mobile: img2mob
    },
    {
        desktop: img3,
        mobile: img3mob
    },
    {
        desktop: img4,
        mobile: img4mob
    },
    {
        desktop: img5,
        mobile: img5mob
    }
]

const swiperRef = useTemplateRef<SwiperContainer>('swiper')
const swiperActiveIndex = ref(0)

const onSwiperSlideChange = (e: CustomEvent) => {
    const [swiper] = e.detail
    swiperActiveIndex.value = swiper.activeIndex
}
</script>

<template>
    <section class="corporate-life">
        <div class="corporate-life__head">
            <h2 class="corporate-life__title">Корпоративная жизнь</h2>
            <div class="corporate-life__btns">
                <button
                    class="corporate-life__btn corporate-life__btn_prev"
                    @click="swiperRef?.swiper.slidePrev()"
                    :disabled="swiperActiveIndex === 0"
                >
                    <SwiperArrow />
                </button>
                <button
                    class="corporate-life__btn corporate-life__btn_next"
                    @click="swiperRef?.swiper.slideNext()"
                    :disabled="swiperActiveIndex + 1 === swiperRef?.swiper.slides.length"
                >
                    <SwiperArrow />
                </button>
            </div>
        </div>

        <swiper-container
            ref="swiper"
            speed="500"
            pagination="true"
            css-mode="true"
            class="corporate-life__swiper"
            @swiperslidechange="onSwiperSlideChange"
        >
            <swiper-slide
                v-for="(img, i) in slides"
                :key="i"
            >
                <picture>
                    <source
                        :srcset="img.mobile"
                        media="(max-width: 500px)"
                    />
                    <img
                        :src="img.desktop"
                        alt="Тест"
                        class="corporate-life__slide-img"
                    />
                </picture>
            </swiper-slide>
        </swiper-container>
    </section>
</template>

<style scoped lang="scss">
.corporate-life {
    &__head {
        margin-bottom: 55px;
        display: flex;
        justify-content: space-between;
    }

    &__btns {
        display: flex;
        gap: 20px;
    }

    &__btn {
        width: 56px;
        height: 56px;
        background: #f0f0f0;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:disabled {
            opacity: 0.4;
            cursor: default;
        }

        &_next {
            svg {
                transform: rotate(180deg);
            }
        }
    }

    &__swiper::part(pagination) {
        position: static;
        display: flex;
        gap: 10px;
        margin-top: 28px;
    }

    &__swiper::part(bullet),
    &__swiper::part(bullet-active) {
        flex: 1;
        width: 100%;
        height: 6px;
        border-radius: 0;
        transition: 0.3s;
        margin: 0;
    }

    &__swiper::part(bullet) {
        background: rgba(0, 0, 0, 0.1);
    }

    &__swiper::part(bullet-active) {
        background: var(--red);
    }

    &__slide-img {
        width: 100%;
    }
}

@media (max-width: 767px) {
    .corporate-life {
        &__head {
            margin-bottom: 15px;
        }

        &__btns {
            display: none;
        }

        &__swiper::part(pagination),
        &__swiper::part(button-prev),
        &__swiper::part(button-next) {
            display: none;
        }
    }
}
</style>
