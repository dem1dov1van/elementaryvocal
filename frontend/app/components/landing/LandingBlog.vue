<script setup lang="ts">
type BlogPage = {
  blog: {
    title: string
    description: string
  }
}

defineProps<{
  page: BlogPage
}>()
</script>

<template>
  <UPageSection
    :title="page.blog.title"
    :description="page.blog.description"
    :ui="{
      container: 'p-0!',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-3 text-sm sm:text-md lg:text-sm text-muted'
    }"
  />
</template>
