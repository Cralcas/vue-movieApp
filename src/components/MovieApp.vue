<script setup lang="ts">
import type { IMovie } from "@/models/IMovie";
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
  <div class="container">
    <MovieSearch @movie-search="handleSearch"></MovieSearch>
    <div class="movie-container">
      <MoviePoster
        v-for="movie in movies"
        :movie="movie"
        :key="movie.imdbID"
      ></MoviePoster>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  padding-top: 24px;

  .movie-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  @media (min-width: 600px) {
    .movie-container {
      width: 100%;
      flex-direction: row;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
  }
}
</style>
