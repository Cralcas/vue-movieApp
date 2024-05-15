<script setup lang="ts">
import { ref } from "vue";
import MovieModal from "./MovieModal.vue";
import type { IMovieProps } from "@/models/IMovieProps";

defineProps<IMovieProps>();

const isModalOpened = ref(false);

const closeModal = () => {
  isModalOpened.value = false;
};
const openModal = () => {
  isModalOpened.value = true;
};
</script>

<template>
  <div class="movie-poster">
    <h3>{{ movie.Title }}</h3>
    <div class="image-container">
      <img :src="movie.Poster" />
    </div>
    <div>
      <MovieModal
        @modal-open="openModal"
        @modal-close="closeModal"
        :movie="movie"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movie-poster {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image-container {
    width: 80%;

    img {
      width: 100%;
    }
  }
}
</style>
