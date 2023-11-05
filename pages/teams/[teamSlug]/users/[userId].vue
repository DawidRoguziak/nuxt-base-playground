<script setup lang="ts">
const route = useRoute();

</script>

<template>
<div>
  <h1>{{ route.params.teamSlug }}</h1>
  <h2>{{ route.params.userId }}</h2>
</div>
</template>

<style scoped>

</style>