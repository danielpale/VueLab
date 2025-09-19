<script setup>
defineProps({ title: String })
</script>

<template>
  <v-card class="list-item bg-transparent">
    <v-checkbox hide-details density="compact" color="primary" :ripple="false" />
    <p class="text-t-primary">{{ title }}</p>
  </v-card>
</template>

<style lang="scss" scoped>
.list-item {
  padding: 0px 8px;
  border-width: 1px;
  border-color: var(--clr-border-primary);
  border-style: solid;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>

<style lang="scss">
.v-checkbox .v-selection-control__input::before {
  border-radius: 0;
}
</style>
