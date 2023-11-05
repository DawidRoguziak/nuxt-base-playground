<script setup lang="ts">
const route = useRoute();

const {data} = await useFetch(
    `http://www.omdbapi.com/?apikey=API_KEY&i=${route.params.id}`,
    {
      pick: ['Title', 'Plot', 'Error', 'Poster']
    });

if (data.value.Error === 'Incorrect IMDb ID.') {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    stack: undefined
  })
}

useHead({
  title: data.value.Title,
  meta: [
    { name: 'description', content: data.value.Plot},
    { property: 'og:description', content: data.value.Plot},
    { property: 'og:img', content: data.value.Poster},
    { property: 'twitter:card', content: 'summary_large_image'},
    { property: 'twitter:description', content: data.value.Plot},
    { property: 'twitter:image', content: data.value.Poster}
  ]
})

</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

<style scoped>

</style>