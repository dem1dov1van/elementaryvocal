<template>
  <div class="main-hero pt-18 sm:pt-24 lg:pt-32">
    <AppContainer class="!py-0 !gap-0">
      <h2 class="tracking-tight font-bold text-highlighted text-pretty text-3xl sm:text-4xl lg:text-5xl text-shadow-md max-w-lg">
        Школа вокала Александры Родиной
      </h2>
      <p class="text-md max-w-2xl sm:text-md text-balance mt-6">
        Пой легко и с удовольствием. Обучение для начинающих и профессионалов от эксперта с 20-летним опытом.
      </p>
      <UButton
        label="Записаться на занятие"
        to="https://n2254899.yclients.com"
        target="_blank"
        color="neutral"
        class="max-w-max mt-4"
      />
    </AppContainer>
    <!-- <div class="main-hero__image-wrap" /> -->
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.main-hero {
  background-image: url('/images/hero-mobile.webp');
  background-size: cover;
  height: 50vh;
  background-position: center ;
  background-position-x: 100%;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
  max-height: 900px;
}
</style>
