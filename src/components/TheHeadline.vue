<template>
    <section class="headline">
        <h1 class="headline__title">Softline</h1>
        <p class="headline__text">
            Ведущий поставщик IT-решений и сервисов.* Мы предлагаем комплексные IT-решения, облака,
            программное и аппаратное обеспечение, решения по цифровой трансформации
            и кибербезопасности, а также широкий спектр IT-услуг.
        </p>
    </section>
</template>

<style scoped lang="scss">
.headline {
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: center;

    &__title {
        color: var(--red);
        font-size: 56px;
        font-weight: bold;
    }

    &__text {
        font-size: 32px;
        line-height: 1.2;
    }
}

@media (max-width: 767px) {
    .headline {
        gap: 10px;
        text-align: left;

        &__title {
            font-size: 28px;
        }

        &__text {
            font-size: 16px;
        }
    }
}
</style>
