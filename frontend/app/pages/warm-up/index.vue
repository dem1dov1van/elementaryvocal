<template>
  <div>
    <UPageHero
      title="Распевки для комфортного звучания"
      description="Практические упражнения для разогрева голоса перед занятием, репетицией или выступлением."
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

        <template v-else-if="warmUpResponse">
          <div class="max-w-[100%] w-full mx-auto p-4">
            <UFieldGroup
              orientation="horizontal"
              size="xl"
              class="w-full"
            >
              <UInputTags
                v-model="searchTags"
                class="min-w-0 flex-1"
                placeholder="Введи теги..."
              >
                <template #item-delete>
                  <span
                    class="inline-flex size-3.5 shrink-0 items-center justify-center text-base leading-none text-dimmed"
                    aria-hidden="true"
                  >×</span>
                </template>
              </UInputTags>
              <UButton
                v-if="searchTags.length > 0"
                square
                variant="outline"
                color="neutral"
                aria-label="Сбросить все теги"
                @click="searchTags = []"
              >
                <span
                  class="inline-flex items-center justify-center text-base leading-none"
                  aria-hidden="true"
                >×</span>
              </UButton>
            </UFieldGroup>
            <div v-if="filteredTracks.length > 0">
              <AudioItem
                v-for="track in filteredTracks"
                :key="track.id"
                :track="track"
              />
            </div>
            <div v-else>
              <p class="text-center text-gray-500 mt-6">
                Не найдено распевок с такими тегами
                <UButton
                  variant="link"
                  size="sm"
                  @click="searchTags = []"
                >
                  Сбросить фильтр
                </UButton>
              </p>
            </div>
          </div>
        </template>
      </div>
    </AppContainer>

    <UPageSection
      id="features"
      class="!pb-0"
      title="Что дают регулярные распевки"
      description="Короткие упражнения помогают голосу звучать свободнее и стабильнее."
      :features="[{
        icon: 'i-lucide-rocket',
        title: 'Быстрый вход в пение',
        description: 'Распевки мягко подготавливают голос и помогают начать занятие без напряжения.'
      }, {
        icon: 'i-lucide-sparkles',
        title: 'Чистая интонация',
        description: 'Регулярная практика развивает слух и точность попадания в ноты.'
      }, {
        icon: 'i-lucide-zap',
        title: 'Устойчивое дыхание',
        description: 'Упражнения помогают выстроить дыхательную опору и ровное звукоизвлечение.'
      }, {
        icon: 'i-lucide-music-2',
        title: 'Свобода в верхних нотах',
        description: 'Постепенная работа с диапазоном снимает зажимы и добавляет уверенности.'
      }, {
        icon: 'i-lucide-volume-2',
        title: 'Контроль тембра',
        description: 'Вы учитесь управлять окраской голоса под стиль и задачу песни.'
      }, {
        icon: 'i-lucide-mic-vocal',
        title: 'Подготовка к выступлению',
        description: 'Распевки перед сценой помогают звучать увереннее и спокойнее.'
      }]"
    />
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
      throw createError({
        statusCode: response.status >= 500 ? 502 : response.status,
        statusMessage: 'Load Error',
        message: 'Не удалось загрузить распевки. Попробуйте обновить страницу позже.',
        fatal: true
      })
    }

    return await response.json() as WarmUpResponse
  },
  {
    default: () => ({
      items: []
    })
  }
)

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode ?? 502,
    statusMessage: 'Load Error',
    message: 'Не удалось загрузить распевки. Попробуйте обновить страницу позже.',
    fatal: true
  })
}

const searchTags = ref<string[]>([])

const tracks = computed(() => {
  return (warmUpResponse.value?.items ?? []).map(record => ({
    id: record.id,
    title: record.title,
    src: `${config.public.pocketbaseUrl}/files/${record.collectionId}/${record.id}/${record.audio}`,
    description: record.description,
    tags: record.tags?.split(', ') ?? []
  }))
})

const filteredTracks = computed(() => {
  if (searchTags.value.length === 0) {
    return tracks.value
  }

  return tracks.value.filter((track) => {
    const title = track.title.toLowerCase()

    return searchTags.value.some((tag) => {
      const normalizedTag = tag.toLowerCase().trim()

      if (!normalizedTag) {
        return false
      }

      return track.tags.includes(tag)
        || title.includes(normalizedTag)
    })
  })
})
</script>
