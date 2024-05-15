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
  <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <label for="movie-input"> Search movie: </label>
      <input id="movie-input" type="text" v-model="searchText" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form-container {
  margin: 0 auto;
  margin-bottom: 10px;
  label {
    margin-right: 10px;
  }
  input {
    padding: 5px 5px;
    border: none;
  }
}
</style>
