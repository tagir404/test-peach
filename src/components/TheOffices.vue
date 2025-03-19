<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import IconMap from './icons/IconMap.vue'
import { officesData, type IDistrictValues } from '@/data/offices'
import IconChevron from './icons/IconChevron.vue'

interface ITab {
    text: string
    value: IDistrictValues | null
}

const tabs: ITab[] = [
    {
        text: 'Все',
        value: null
    },
    {
        text: 'Москва',
        value: 'moscow'
    },
    {
        text: 'Центр',
        value: 'center'
    },
    {
        text: 'Северо-Запад',
        value: 'northwest'
    },
    {
        text: 'Юг',
        value: 'south'
    },
    {
        text: 'Волга',
        value: 'volga'
    },
    {
        text: 'Урал',
        value: 'ural'
    },
    {
        text: 'Сибирь',
        value: 'sibir'
    },
    {
        text: 'Дальний восток',
        value: 'far_east'
    }
]

const activeDistrict = ref(null)

const offices = ref(officesData)

const filteredOffices = computed(() =>
    activeDistrict.value
        ? offices.value.filter(office => office.district === activeDistrict.value)
        : offices.value
)

const isDropdownOpen = ref(false)

const getDistrictOffices = (district: IDistrictValues | null) =>
    offices.value.filter(office => office.district === district)

const initialColState = ref(false)

onMounted(() => {
    initialColState.value = window.innerWidth > 767
})
</script>

<template>
    <section class="offices">
        <div class="offices__header">
            <div class="offices__header-main">
                <div
                    class="offices__header-menu"
                    @click="isDropdownOpen = !isDropdownOpen"
                >
                    <p class="offices__header-menu-text">Офисы Softline</p>
                    <IconChevron
                        class="offices__header-menu-chevron"
                        :class="{ 'offices__header-menu-chevron_open': isDropdownOpen }"
                    />
                </div>

                <div
                    class="offices__tabs"
                    :class="{ offices__tabs_faded: isDropdownOpen }"
                >
                    <label
                        v-for="{ text, value } in tabs"
                        :key="text"
                        class="offices__tab"
                    >
                        <input
                            v-model="activeDistrict"
                            type="radio"
                            name="offices__tab"
                            class="offices__tab-input"
                            :value
                        />
                        <p class="offices__tab-text">
                            {{ text }}
                        </p>
                    </label>
                </div>
            </div>
            <Transition>
                <div
                    v-show="isDropdownOpen"
                    class="offices__header-dropdown"
                >
                    <details
                        v-for="tab in tabs.filter(tab => !!tab.value)"
                        :key="tab.text"
                        class="offices__header-dropdown-col"
                        :open="initialColState"
                    >
                        <summary class="offices__header-dropdown-col-title">{{ tab.text }}</summary>
                        <div
                            v-if="getDistrictOffices(tab.value).length > 1"
                            class="offices__header-dropdown-col-list"
                        >
                            <p
                                v-for="office in getDistrictOffices(tab.value)"
                                :key="office.city"
                                class="offices__header-dropdown-col-item"
                            >
                                {{ office.city }}
                            </p>
                        </div>
                    </details>
                </div>
            </Transition>
        </div>
        <div class="offices__main">
            <div
                class="offices__map"
                :class="{ offices__map_faded: isDropdownOpen }"
            >
                <IconMap />
                <div
                    v-for="office in filteredOffices"
                    :key="office.city"
                    class="offices__item"
                    :class="{ offices__item_reverse: office.reverse }"
                    :style="{
                        fontSize: `${office.textSize}px`,
                        top: `${office.pos.y}px`,
                        left: `${office.pos.x}px`
                    }"
                >
                    {{ office.city }}
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.offices {
    position: relative;
    &_faded {
        &::after {
            content: '';
            width: 100%;
            height: 100%;
        }
    }

    &__header {
        margin-bottom: 90px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        position: relative;
    }

    &__header-main {
        box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.06);
        padding: 0 70px;
        height: 80px;
        display: flex;
        justify-content: space-between;
        background: #fff;
    }

    &__header-menu {
        display: flex;
        align-items: center;
        gap: 16px;
        cursor: pointer;
    }

    &__header-menu-text {
        font-size: 24px;
        font-weight: 600;
    }

    &__header-menu-chevron {
        transition: 0.3s;

        &_open {
            transform: rotate(180deg);
        }
    }

    &__header-dropdown {
        font-family: 'Proxima Nova';
        box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.06);
        padding: 30px 10px;
        display: flex;
        justify-content: center;
        gap: 24px;
        position: absolute;
        z-index: 1;
        top: 100px;
        left: 0;
        background: #fff;
        width: 100%;
    }

    &__header-dropdown-col {
        font-size: 18px;
        line-height: 1.1;
        display: flex;
        flex-direction: column;
        pointer-events: none;
    }

    &__header-dropdown-col-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 10px;
    }

    &__header-dropdown-col-title {
        font-weight: 600;
        list-style: none;

        &::-webkit-details-marker {
            display: none;
        }
    }

    &__tabs {
        display: flex;
        gap: 30px;
        transition: 0.3s;

        &_faded {
            opacity: 0.1;
            pointer-events: none;
        }
    }

    &__tab-input {
        position: absolute;
        opacity: 0;

        &:checked ~ {
            .offices__tab-text {
                color: var(--red);

                &::after {
                    background: var(--red);
                }
            }
        }
    }

    &__tab-text {
        font-size: 18px;
        font-weight: 600;
        line-height: 1.1;
        transition: 0.3s;
        cursor: pointer;
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: transparent;
            transition: 0.3s;
        }

        &:hover {
            color: var(--red);
        }
    }

    &__main {
        padding: 0 30px;
    }

    &__map {
        position: relative;
        transition: 0.3s;

        &_faded {
            opacity: 0.3;
        }
    }

    &__item {
        font-weight: 600;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translateX(calc(-50% + 4px));

        &_reverse {
            flex-direction: column-reverse;
            transform: translateX(calc(-50% + 4px)) translateY(calc(-50% - 4px));
        }

        &::before {
            content: '';
            width: 8px;
            height: 8px;
            background: var(--black);
            border-radius: 50%;
        }
    }
}

@media (max-width: 767px) {
    .offices {
        &__header {
            margin-bottom: 8px;
        }

        &__header-main {
            flex-direction: column;
            gap: 20px;
            height: auto;
            padding: 18px 5px 0;
            box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.06);
        }

        &__header-menu {
            gap: 6px;
        }

        &__header-menu-text {
            font-size: 20px;
        }

        &__header-dropdown {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px 5px;
            top: 50px;
            padding: 20px 5px;
            box-shadow: 0px 20px 16px 0px rgba(0, 0, 0, 0.06);
        }

        &__header-dropdown-col {
            font-size: 14px;
            pointer-events: auto;
            &[open] {
                .offices__header-dropdown-col-title {
                    color: var(--red);

                    &::after {
                        border-top: none;
                        border-bottom: 4px solid #444;
                    }
                }
            }
        }

        &__header-dropdown-col-title {
            display: flex;
            align-items: center;
            gap: 3px;

            &::after {
                content: '';
                width: 0;
                height: 0;
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-top: 4px solid #444;
            }
        }

        &__main {
            padding: 0;
        }

        &__map {
            overflow-x: auto;
        }

        &__tabs {
            overflow-x: auto;
            gap: 16px;
        }

        &__tab {
            flex-shrink: 0;
        }

        &__tab-text {
            font-size: 14px;
            padding-bottom: 20px;
        }
    }
}
</style>
