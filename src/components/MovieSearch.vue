<script setup lang="ts">
import { ref } from "vue";

const searchText = ref("");

const emit = defineEmits<{ (e: "movieSearch", text: string): void }>();

const handleSubmit = () => {
  if (searchText.value !== "") {
    emit("movieSearch", searchText.value);
  } else {
    console.log("Input får inte vara tom");
  }
};
</script>
<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="searchText" />
    </form>
  </div>
</template>
