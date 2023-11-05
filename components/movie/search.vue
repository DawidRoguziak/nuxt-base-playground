<script lang="ts" setup>
import type {Moive} from "~/types/movie";

const query = ref<string>("batman");
const movies = ref<Moive[]>([]);
const search = async () => {
  //@ts-ignore
  const {Search} = await $fetch(`http://www.omdbapi.com/?apikey=a7ffe190&s=${query.value}`);
  movies.value = Search;
}

search();
</script>


<template>
  <div>
    <form @submit.prevent="search" class="flex gap-2">
      <input type="text" class="border border-amber-600 px-2 py-1 rounded" v-model="query">
      <button class="bg-teal-600 rounded px-2 py-1">Search</button>
    </form>
    <ul class="flex flex-wrap gap-20 list-none mt-3">
      <li v-for="movie in movies" :key="movie.imdbID" >
        <NuxtLink :to="`/movies/${movie.imdbID}`">
          <NuxtImg :src="movie.Poster" :alt="movie.Title" format="webp" width="300"
          />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
