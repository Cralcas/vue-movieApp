<script setup lang="ts">
import type { IMovieProps } from "@/models/IMovieProps";
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
    <button class="modal--button" @click="openModal">Details</button>
    <Teleport to="body">
      <div v-if="open" class="modal">
        <div class="modal--content">
          <img class="modal__image" :src="movie.Poster" />
          <h3>{{ movie.Title }}</h3>
          <p>{{ movie.Year }}</p>
          <button class="modal--button" @click="closeModal">Close</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped lang="scss">
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

  .modal--content {
    text-align: center;
    background: #181717;
    padding: 20px;
    border-radius: 10px;
  }
}

.modal--button {
  background: #cf3232;
  color: #fff;
  border: none;
  padding: 4px 8px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
}
</style>
