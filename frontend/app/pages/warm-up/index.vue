<template>
  <div>
    <UPageHero
      title="Распевки для комфортного звучания"
      description="Практические упражнения для разогрева голоса перед занятием, репетицией или выступлением. *"
      :links="[{
        label: 'Записаться на занятие',
        to: 'https://n2254899.yclients.com',
        target: '_blank',
        size: 'xl'
      }, {
        label: 'Telegram-канал',
        to: 'https://t.me/elementaryvocal',
        target: '_blank',
        icon: 'i-simple-icons-telegram',
        size: 'xl',
        color: 'neutral',
        variant: 'subtle'
      }]"
    />

    <AppContainer class="!pt-0">
      <div class="min-w-full max-w-[600px] mx-auto">
        <p v-if="pending">
          Загружаем распевки...
        </p>
        <p
          v-else-if="error"
          class="text-red-500"
        >
          Не удалось загрузить распевки
        </p>

        <div class="max-w-[100%] w-full mx-auto p-4">
          <UInputTags
            class="max-w-[100%] w-full mx-auto p-4"
            placeholder="Введи теги..."
          />
        </div>
        <AudioItem
          v-for="track in tracks"
          :key="track.id"
          :track="track"
        />
      </div>
    </AppContainer>

    <UPageSection
      id="features"
      class="!pb-0"
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
        description="Записывайтесь на&nbsp;первое занятие и&nbsp;получите индивидуальные рекомендации по&nbsp;развитию голоса."
        variant="subtle"
        :links="[{
          label: 'Записаться',
          to: 'https://n2254899.yclients.com',
          target: '_blank',
          color: 'neutral'
        }, {
          label: 'Написать на почту',
          to: 'mailto:Elementaryvocal@ya.ru',
          target: '_blank',
          color: 'neutral',
          variant: 'outline'
        }]"
      />
    </UPageSection>
  </div>
</template>

<script setup lang="ts">
type WarmUpRecord = {
  id: string
  collectionId: string
  title: string
  description: string
  audio: string
  tags?: string
}

type WarmUpResponse = {
  items: WarmUpRecord[]
}

const config = useRuntimeConfig()
const apiBase = import.meta.server
  ? 'http://pocketbase:8090/api'
  : config.public.pocketbaseUrl

const { data: warmUpResponse, pending, error } = await useAsyncData<WarmUpResponse>(
  'warmups',
  async () => {
    const response = await fetch(`${apiBase}/collections/warmups/records?sort=-created`)

    if (!response.ok) {
      throw new Error(`PocketBase request failed with status ${response.status}`)
    }

    return await response.json() as WarmUpResponse
  },
  {
    default: () => ({
      items: []
    })
  }
)

const tracks = computed(() => {
  return (warmUpResponse.value?.items ?? []).map(record => ({
    id: record.id,
    title: record.title,
    src: `${config.public.pocketbaseUrl}/files/${record.collectionId}/${record.id}/${record.audio}`,
    description: record.description,
    tags: record.tags?.split(', ') ?? []
  }))
})
</script>
