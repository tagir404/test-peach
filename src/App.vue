<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import TheAdvantages from './components/TheAdvantages.vue'
import TheBusiness from './components/TheBusiness.vue'
import TheCompensation from './components/TheCompensation.vue'
import TheCorporateLife from './components/TheCorporateLife.vue'
import TheHeader from './components/TheHeader.vue'
import TheHeadline from './components/TheHeadline.vue'
import TheMission from './components/TheMission.vue'
import TheOffices from './components/TheOffices.vue'

const isMobile = ref(false)
const checkMobile = () => (isMobile.value = window.innerWidth < 768)
onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
})
</script>

<template>
    <main class="wrapper">
        <TheHeader class="section-header" />
        <TheHeadline class="section-headline" />
        <TheAdvantages v-if="isMobile" />
        <TheOffices />
        <TheMission />
        <TheBusiness />
        <TheCompensation />
        <TheCorporateLife />
    </main>
</template>

<style scoped>
.wrapper {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 67px;
    overflow: hidden;
}

.section-header,
.section-headline {
    margin-bottom: 79px;
}

@media (max-width: 767px) {
    .wrapper {
        padding-bottom: 50px;
    }
    .section-header {
        margin-bottom: 27px;
    }

    .section-headline {
        margin-bottom: 50px;
    }
}
</style>
