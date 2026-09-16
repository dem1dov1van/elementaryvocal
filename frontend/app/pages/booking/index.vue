<script setup lang="ts">
definePageMeta({
  layout: 'booking'
})

const { global } = useAppConfig()
const bookingLink = global.bookingLink
</script>

<template>
  <div class="relative min-h-0 flex-1">
    <iframe
      :src="bookingLink"
      class="absolute inset-0 h-full w-full border-0"
      title="Запись на занятие"
    />
  </div>
</template>
