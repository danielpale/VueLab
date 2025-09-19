<script setup>
import TheAppBar from '@/components/layouts/TheAppBar.vue'
import TodoList from '@/components/common/TodoList.vue'
</script>

<template>
  <v-app class="bg-background-light">
    <the-app-bar />
    <v-main class="d-flex flex-column">
      <base-section class="d-flex flex-column ga-4">
        <h6 class="caption ff-text text-uppercase text-t-secondary">[Pendientes]</h6>
        <todo-list />
      </base-section>
      <base-divider />
      <base-section class="d-flex flex-column ga-4">
        <h6 class="caption ff-text text-uppercase text-t-secondary">[Terminados]</h6>
      </base-section>
    </v-main>
  </v-app>
</template>

<style scoped></style>
