<script setup lang="ts">

const user = useUserStore();
</script>

<template>
  <div class="p-3">
    <nav style="display: flex;gap: 10px">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
      <a v-if="user.isLoggedIn" href="#" @click.prevent="user.isLoggedIn = false">logout</a>
    </nav>
    <slot></slot>
  </div>
</template>

<style scoped>

</style>