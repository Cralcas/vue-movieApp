<script setup lang="ts">
import { Teleport, ref } from "vue";

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
    <button @click="openModal">Open Modal</button>
    <Teleport to="body">
      <div v-if="open" class="modal">
        <div>
          <h3>Movie Title</h3>
          <button @click="closeModal">Close</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal > div {
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
}
</style>
