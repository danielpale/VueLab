<script setup>
import TheAppBar from '@/components/layouts/TheAppBar.vue'
</script>

<template>
  <v-app class="bg-background-light">
    <the-app-bar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped></style>
