<script setup lang="ts">
import BusinessCard from './BusinessCard.vue'
import img1 from '../assets/img/business/1.jpg'
import img2 from '../assets/img/business/2.jpg'
import img3 from '../assets/img/business/3.jpg'
import img4 from '../assets/img/business/4.jpg'
import img5 from '../assets/img/business/5.jpg'
import img6 from '../assets/img/business/6.jpg'

const items = [
    {
        title: 'Решения Softline',
        text: 'ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности.',
        img: img1
    },
    {
        title: 'Кибербезопасность',
        text: 'Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации. ',
        img: img2
    },
    {
        title: 'Импортозамещение',
        text: 'ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства.',
        img: img3
    },
    {
        title: 'Облачные решения',
        text: 'Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация.',
        img: img4
    },
    {
        title: 'Цифровая трансформация<br> и разработка ПО',
        text: 'Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия.',
        img: img5
    },
    {
        title: 'Техническая поддержка Softline',
        text: '200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство с 30+ мировыми производителями.',
        img: img6
    }
]
</script>

<template>
    <section class="business">
        <h2 class="business__title">Направления бизнеса</h2>
        <div class="business__cards">
            <BusinessCard
                v-for="card in items"
                :key="card.title"
                :card
            />
        </div>
    </section>
</template>

<style scoped lang="scss">
.business {
    &__title {
        text-align: center;
        margin-bottom: 55px;
    }

    &__cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 260px;
        gap: 20px;
    }
}

@media (max-width: 767px) {
    .business {
        &__title {
            margin-bottom: 15px;
        }

        &__cards {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }
}
</style>
