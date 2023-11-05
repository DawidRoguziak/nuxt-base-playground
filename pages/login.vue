<script setup lang="ts">

definePageMeta({
  layout: 'plain',
})

const user = useUserStore();

</script>

<template>
  <form @submit.prevent="user.submit()"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 bg-teal-300 p-3 rounded">
    <h1>Login</h1>
    <label for="email">Email</label>
    <input type="email" id="email" name="email"/>
    <label for="password">Password</label>
    <input type="password" id="password" name="password"/>
    <button type="submit">Login</button>
  </form>
</template>

<style scoped>

</style>