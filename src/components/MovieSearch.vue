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
  <div class="input-container">
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="searchText" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.input-container {
  margin: 0 auto;
}
</style>
