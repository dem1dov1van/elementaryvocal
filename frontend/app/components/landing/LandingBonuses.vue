<template>
  <UPageSection
    id="bonuses"
    title="Приятные бонусы и комьюнити"
    description="Кроме уроков вы получите следующие бонусы"
    :ui="{
      features: 'sm:grid-cols-2 lg:grid-cols-4 gap-8'
    }"
    :features="[
      {
        title: 'Общение',
        icon: 'i-lucide-users',
        description: 'Участие в чате вокалистов, где проходят важные дискуссии и вокальные челленджи'
      },
      {
        title: 'Караоке',
        icon: 'i-lucide-mic',
        description: 'Походы в караоке вместе с другими вокалистами'
      },
      {
        title: 'Мероприятия',
        icon: 'i-lucide-calendar-days',
        description: 'Участие в отчётных концертах, вокальные дуэты'
      },
      {
        title: 'Медиа',
        icon: 'i-lucide-clapperboard',
        description: 'Возможность сняться в Reels и поучаствовать в совместных проектах'
      }
    ]"
  />
</template>
