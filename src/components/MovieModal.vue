<script setup>
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <button @click="open = true">Open Modal</button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <div>
        <h3>Movie Title</h3>
        <button @click="open = false">Close</button>
      </div>
    </div>
  </Teleport>
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
