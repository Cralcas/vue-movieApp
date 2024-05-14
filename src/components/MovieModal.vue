<script setup lang="ts">
import { IMovieProps } from "@/models/IMovieProps";
import { Teleport, ref } from "vue";

defineProps<IMovieProps>();

const open = ref(false);

const emit = defineEmits(["modal-close", "modal-open"]);

const closeModal = () => {
  emit("modal-close");
  open.value = false;
};

const openModal = () => {
  emit("modal-close");
  open.value = true;
};
</script>

<template>
  <div>
    <button @click="openModal">Details</button>
    <Teleport to="body">
      <div v-if="open" class="modal">
        <div class="modal--content">
          <img class="modal__image" :src="movie.Poster" />
          <h3>{{ movie.Title }}</h3>
          <p>{{ movie.Year }}</p>
          <button @click="closeModal">Close</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal--content {
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}
</style>
