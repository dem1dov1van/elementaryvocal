<script setup lang="ts">
const plans = [
  {
    title: 'Академический час',
    description: '55 минут',
    price: 'от 2 500 ₽',
    billingPeriod: 'за один урок'
  },
  {
    title: '1,5 часовой',
    description: '90 минут',
    price: 'от 3 500 ₽',
    billingPeriod: 'за один урок',
    highlight: true
  },
  {
    title: '2 часовой',
    description: '120 минут',
    price: 'от 5 000 ₽',
    billingPeriod: 'за один урок'
  }
]
</script>

<template>
  <UPageSection
    id="pricing"
    title="Услуги и прайс-лист"
    description="Цена за один урок"
    :ui="{
      container: 'gap-8'
    }"
  >
    <UPricingPlans
      :plans="plans"
      orientation="horizontal"
      class="w-full"
    />

    <p class="text-sm text-muted text-center max-w-2xl mx-auto">
      Перенос не позднее 24 часов до разового занятия и занятий по абонементам, в пределах срока действия абонемента.
    </p>

    <div class="flex justify-center">
      <UButton
        label="Записаться на занятие"
        to="https://n2254899.yclients.com"
        target="_blank"
        size="xl"
        color="primary"
      />
    </div>
  </UPageSection>
</template>
