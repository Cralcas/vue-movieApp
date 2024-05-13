<script setup lang="ts">
import { IMovie } from "@/models/IMovie";
import { getMovies } from "@/services/movieService";
import { onMounted, ref } from "vue";

const movies = ref<IMovie[]>([]);

onMounted(async () => {
  movies.value = await getMovies("bad");
});
</script>

<template>
  <div>
    <h2>Movies:</h2>
    <ul>
      <li v-for="movie in movies" :key="movie.imdbID">{{ movie.Title }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
