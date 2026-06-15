<script setup lang="ts">
import type { NuxtError } from '#app'
import { ru } from '@nuxt/ui/locale'

const props = defineProps<{
  error: NuxtError
}>()

const statusCode = computed(() => props.error.statusCode ?? 500)

const errorDetails = computed(() => {
  if (statusCode.value === 404) {
    return {
      statusMessage: 'Страница не найдена',
      message: 'Такой страницы нет или она была перемещена. Проверьте адрес или выберите один из разделов ниже.'
    }
  }

  if (statusCode.value >= 500) {
    return {
      statusMessage: 'Ошибка сервера',
      message: props.error.message || 'Что-то пошло не так на нашей стороне. Попробуйте обновить страницу чуть позже.'
    }
  }

  return {
    statusMessage: props.error.statusMessage || 'Что-то пошло не так',
    message: props.error.message && props.error.message !== props.error.statusMessage
      ? props.error.message
      : 'Попробуйте обновить страницу или вернуться на главную.'
  }
})

const pageTitle = computed(() => (
  statusCode.value === 404 ? 'Страница не найдена' : `Ошибка ${statusCode.value}`
))

useHead({
  htmlAttrs: {
    lang: 'ru'
  }
})

useSeoMeta({
  title: pageTitle,
  robots: 'noindex, nofollow'
})

function goHome() {
  clearError({ redirect: '/' })
}

function goToWarmUp() {
  clearError({ redirect: '/warm-up' })
}
</script>

<template>
  <UApp :locale="ru">
    <NuxtLayout>
      <UMain class="relative">
        <UError
          :error="{
            statusCode,
            statusMessage: errorDetails.statusMessage,
            message: errorDetails.message
          }"
          :clear="false"
          :ui="{
            root: 'min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24',
            statusMessage: 'mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-highlighted text-balance max-w-2xl',
            message: 'mt-4 text-base sm:text-lg text-muted text-balance max-w-xl',
            links: 'mt-10 flex flex-col sm:flex-row items-center justify-center gap-3'
          }"
        >
          <template #statusCode>
            <span class="inline-flex items-center justify-center size-24 sm:size-28 rounded-2xl bg-primary/10 text-4xl sm:text-5xl font-bold text-primary tabular-nums">
              {{ statusCode }}
            </span>
          </template>
          <template #links>
            <UButton
              size="xl"
              color="primary"
              label="На главную"
              @click="goHome"
            />
            <UButton
              size="xl"
              color="neutral"
              variant="outline"
              label="Распевки"
              @click="goToWarmUp"
            />
          </template>
        </UError>
      </UMain>
    </NuxtLayout>
  </UApp>
</template>
