<script setup lang="ts">
const { footer } = useAppConfig()

const author = computed(() => footer?.author ?? {
  name: 'dem1dov1van',
  url: 'https://t.me/dem1dov1van'
})

const year = new Date().getFullYear()
</script>

<template>
  <UFooter
    class="relative z-20 bg-default"
    :ui="{
      left: 'text-muted text-xs',
      top: 'py-4 lg:py-2'
    }"
  >
    <template
      v-if="footer?.legalLinks?.length"
      #top
    >
      <div class="flex flex-col items-center gap-y-1 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-x-4 lg:gap-y-1">
        <UButton
          v-for="(link, index) of footer.legalLinks"
          :key="index"
          v-bind="{ size: 'xs', color: 'neutral', variant: 'link', ...link }"
        />
      </div>
    </template>

    <template #left>
      <span class="text-muted text-xs">
        Built by
        <a
          :href="author.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-muted hover:text-default underline"
        >
          {{ author.name }}
        </a>
        • {{ year }}
      </span>
    </template>

    <template #right>
      <template v-if="footer?.links?.length">
        <UButton
          v-for="(link, index) of footer.links"
          :key="index"
          v-bind="{ size: 'xs', color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </UFooter>
</template>
