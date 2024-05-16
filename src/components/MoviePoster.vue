<script setup lang="ts">
import { ref } from "vue";
import type { IMovieProps } from "@/models/IMovieProps";
import MovieModal from "./MovieModal.vue";

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
      ></MovieModal>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movie-poster {
  width: 100%;
  padding: 5px;

  background: #181717;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  h3 {
    padding: 0 5px;
  }
  .image-container {
    width: 80%;

    img {
      width: 100%;
    }
  }
}

@media (min-width: 600px) {
  .movie-poster {
    width: 25%;
  }
}
</style>
