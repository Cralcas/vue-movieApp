<script setup lang="ts">
import type { IMovie } from "@/models/IMovie";
import { ref } from "vue";
import MovieModal from "./MovieModal.vue";

interface MovieProps {
  movie: IMovie;
}

defineProps<MovieProps>();

const isModalOpened = ref(false);

const closeModal = () => {
  isModalOpened.value = false;
};
const openModal = () => {
  isModalOpened.value = true;
};
</script>

<template>
  <div>
    <h3>{{ movie.Title }}</h3>
    <img :src="movie.Poster" />
    <div>
      <MovieModal
        @modal-open="openModal"
        @modal-close="closeModal"
        :movie="movie"
      />
    </div>
  </div>
</template>

<style scoped></style>
