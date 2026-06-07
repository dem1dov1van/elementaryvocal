<template>
  <div class="text-sm text-gray-500 px-2 rounded-xl bg-gray-100">
    {{ tag }}
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  tag: string
}>()
</script>

<style>

</style>