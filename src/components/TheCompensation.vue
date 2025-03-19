<script setup lang="ts">
import IconBirthday from './icons/IconBirthday.vue'
import IconDMS from './icons/IconDMS.vue'
import IconHandshake from './icons/IconHandshake.vue'
import IconMortgage from './icons/IconMortgage.vue'
import IconOrgtech from './icons/IconOrgtech.vue'
import IconPhone from './icons/IconPhone.vue'
import IconTraining from './icons/IconTraining.vue'

const packages = [
    {
        title: 'ДМС',
        icon: IconDMS
    },
    {
        title: 'Выходной в день рождения',
        icon: IconBirthday
    },
    {
        title: 'Корпоративная мобильная связь',
        icon: IconPhone
    },
    {
        title: 'Корпоративные скидки на спорт',
        icon: IconTraining
    },
    {
        title: 'LTI',
        icon: IconHandshake
    }
]

const motivationItems = [
    {
        title: 'Оргтехники',
        icon: IconOrgtech
    },
    {
        title: 'ДМС',
        icon: IconDMS
    },
    {
        title: 'Ипотека',
        icon: IconMortgage
    }
]
</script>

<template>
    <section class="compensation">
        <div class="compensation__head">
            <h2 class="compensation__title">Компенсационный пакет</h2>
            <div class="compensation__list">
                <div
                    v-for="item in packages"
                    :key="item.title"
                    class="compensation__item"
                >
                    <div class="compensation__item-icon">
                        <component :is="item.icon" />
                    </div>
                    <p class="compensation__item-title">{{ item.title }}</p>
                </div>
            </div>
        </div>
        <hr class="compensation__divider" />
        <div class="compensation__program">
            <h3 class="compensation__program-title">
                Программа дополнительной мотивации <br /><span>доплата 12% от суммы</span>
            </h3>
            <div class="compensation__program-list">
                <div
                    v-for="item in motivationItems"
                    :key="item.title"
                    class="compensation__item"
                >
                    <div class="compensation__item-icon">
                        <component :is="item.icon" />
                    </div>
                    <p class="compensation__item-title">{{ item.title }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.compensation {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 30px;
    box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.06);
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;

    &__head {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    &__title {
        text-align: center;
    }

    &__list {
        display: flex;
        gap: 16px;
        justify-content: center;
    }

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 178px;
    }

    &__item-icon {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.05);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__item-title {
        font-size: 18px;
        line-height: 1.1;
        text-align: center;
    }

    &__divider {
        width: 100%;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        margin-top: 75px;
        margin-bottom: 70px;
    }

    &__program {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }

    &__program-list {
        display: flex;
        gap: 16px;
        justify-content: center;
    }

    &__program-title {
        font-size: 40px;
        font-weight: 600;
        line-height: 1.2;
        text-align: center;

        span {
            color: var(--red);
            font-weight: inherit;
        }
    }
}

@media (max-width: 767px) {
    .compensation {
        padding: 24px 5px;
        box-shadow: none;

        &__head {
            gap: 40px;
        }

        &__list {
            flex-wrap: wrap;
            gap: 25px 10px;
        }

        &__item {
            width: 120px;
        }

        &__item-icon {
            width: 80px;
            height: 80px;

            svg {
                width: 35px;
            }
        }

        &__item-title {
            font-size: 16px;
        }

        &__divider {
            margin-top: 24px;
            margin-bottom: 24px;
        }

        &__program {
            gap: 25px;
        }

        &__program-title {
            font-size: 22px;
        }

        &__program-list {
            flex-wrap: wrap;
            gap: 25px;

            .compensation__item {
                width: 80px;
            }
        }
    }
}
</style>
