<script setup lang="ts">
import { getMovies } from "@/services/movieService";
import { onMounted } from "vue";

onMounted(async () => {
  await getMovies("bad");
});
</script>

<template>
  <h2>Hello!</h2>
</template>

<style scoped></style>
