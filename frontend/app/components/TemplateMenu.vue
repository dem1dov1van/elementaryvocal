<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()

const navLinks: NavigationMenuItem[] = [{
  label: 'Главная',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'Проекты',
  icon: 'i-lucide-folder',
  to: '/projects'
}, {
  label: 'Новости',
  icon: 'i-lucide-file-text',
  to: '/blog'
}, {
  label: 'Распевки',
  icon: 'i-lucide-mic',
  to: '/speaking'
}, {
  label: 'Обо мне',
  icon: 'i-lucide-user',
  to: '/about'
}]
</script>

<template>
  <div class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10">
    <UNavigationMenu
      :items="navLinks"
      variant="link"
      color="neutral"
      class="bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5"
      :ui="{
        link: 'px-2 py-1',
        linkLeadingIcon: 'hidden'
      }"
    >
      <template #list-trailing>
        <ColorModeButton />
      </template>
    </UNavigationMenu>
  </div>
</template>