<template>
  <div>
    <h1 class="text-red-500">
      Распевки
    </h1>
    <div class="w-[600px]">
      <audioItem
        v-for="i in 6"
        :key="i"
        :track="audio"
      />
    </div>
    <UPageHero
      title="Распевки для комфортного звучания"
      description="Практические упражнения для разогрева голоса перед занятием, репетицией или выступлением. *"
      :links="[{
        label: 'Записаться на занятие',
        to: 'https://t.me/rodinaalexandra',
        target: '_blank',
        trailingIcon: 'i-lucide-arrow-right',
        size: 'xl'
      }, {
        label: 'Telegram-канал',
        to: 'https://t.me/rodinaalexandra',
        target: '_blank',
        icon: 'i-simple-icons-telegram',
        size: 'xl',
        color: 'neutral',
        variant: 'subtle'
      }]"
    />

    <UPageSection
      id="features"
      title="Что дают регулярные распевки"
      description="Короткие упражнения помогают голосу звучать свободнее и стабильнее. *"
      :features="[{
        icon: 'i-lucide-rocket',
        title: 'Быстрый вход в пение',
        description: 'Распевки мягко подготавливают голос и помогают начать занятие без напряжения. *'
      }, {
        icon: 'i-lucide-palette',
        title: 'Чистая интонация',
        description: 'Регулярная практика развивает слух и точность попадания в ноты. *'
      }, {
        icon: 'i-lucide-zap',
        title: 'Устойчивое дыхание',
        description: 'Упражнения помогают выстроить дыхательную опору и ровное звукоизвлечение. *'
      }, {
        icon: 'i-lucide-blocks',
        title: 'Свобода в верхних нотах',
        description: 'Постепенная работа с диапазоном снимает зажимы и добавляет уверенности. *'
      }, {
        icon: 'i-lucide-code-2',
        title: 'Контроль тембра',
        description: 'Вы учитесь управлять окраской голоса под стиль и задачу песни. *'
      }, {
        icon: 'i-lucide-shield-check',
        title: 'Подготовка к выступлению',
        description: 'Распевки перед сценой помогают звучать увереннее и спокойнее. *'
      }]"
    />

    <UPageSection>
      <UPageCTA
        title="Готовы начать занятия вокалом?"
        description="Записывайтесь на первое занятие и получите индивидуальные рекомендации по развитию голоса."
        variant="subtle"
        :links="[{
          label: 'Записаться в Telegram',
          to: 'https://t.me/rodinaalexandra',
          target: '_blank',
          trailingIcon: 'i-lucide-arrow-right',
          color: 'neutral'
        }, {
          label: 'Написать на почту',
          to: 'mailto:Elementaryvocal@ya.ru',
          target: '_blank',
          icon: 'i-lucide-mail',
          color: 'neutral',
          variant: 'outline'
        }]"
      />
    </UPageSection>
  </div>
</template>

<script setup>
import audioItem from '~/components/AudioItem.vue'

const audio = ref({
  title: 'Распевка 1',
  src: '/audio/warm-up.mp3'
})
</script>
