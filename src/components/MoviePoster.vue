<script setup lang="ts">
import type { IMovie } from "@/models/IMovie";

interface MovieProps {
  movie: IMovie;
}

defineProps<MovieProps>();
</script>

<template>
  <div>{{ movie.Title }}</div>
</template>

<style scoped></style>
