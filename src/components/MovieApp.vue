<script setup lang="ts">
import { IMovie } from "@/models/IMovie";
import { getMovies } from "@/services/movieService";
import { ref } from "vue";
import MovieSearch from "./MovieSearch.vue";

import MoviePoster from "./MoviePoster.vue";

const movies = ref<IMovie[]>([]);

const handleSearch = async (searchText: string) => {
  movies.value = await getMovies(searchText);
};
</script>

<template>
  <div>
    <MovieSearch @movie-search="handleSearch" />
    <h2>Movies:</h2>
    <div class="movie-containter">
      <MoviePoster
        v-for="movie in movies"
        :movie="movie"
        :key="movie.imdbID"
      ></MoviePoster>
    </div>
  </div>
</template>

<style scoped></style>
