<script setup lang="ts">
throw createError({
  statusCode: 404,
  statusMessage: 'Page Not Found',
  message: 'Такой страницы нет или она была перемещена.',
  fatal: true
})
</script>
