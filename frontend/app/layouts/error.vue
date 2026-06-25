<script setup lang="ts">
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <AppHeader />
    <div class="flex min-h-0 flex-1 flex-col pt-14 sm:pt-16">
      <slot />
    </div>
    <AppFooter class="shrink-0" />
  </div>
</template>
