<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { name: 'apple-mobile-web-app-title', content: 'Elementary' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ],
  htmlAttrs: {
    lang: 'ru'
  }
})

const title = 'Elementaryvocal - школа вокала Александры Родиной'
const description = 'Добро пожаловать в вокальную школу Elementeryvocal. Александра Родина помогает вокалистам звучать свободнее, комфортнее и увереннее.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/images/avatar.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <UMain class="relative flex min-h-0 flex-1 flex-col">
        <NuxtPage />
      </UMain>
    </NuxtLayout>
  </UApp>
</template>
