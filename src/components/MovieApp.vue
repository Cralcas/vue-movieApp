<script setup lang="ts">
import { IMovie } from "@/models/IMovie";
import { getMovies } from "@/services/movieService";
import { ref } from "vue";

import MovieSearch from "./MovieSearch.vue";

const movies = ref<IMovie[]>([]);

const handleSearch = async (searchText: string) => {
  movies.value = await getMovies(searchText);
};
</script>

<template>
  <div>
    <MovieSearch @movie-search="handleSearch" />
    <h2>Movies:</h2>
    <ul>
      <li v-for="movie in movies" :key="movie.imdbID">{{ movie.Title }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
