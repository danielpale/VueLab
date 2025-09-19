<script setup>
import { nextTick, ref, useTemplateRef } from 'vue'

import TodoListItem from './TodoListItem.vue'

const items = ref(['Terminar curso de Vue', 'Aprender Vuetify', 'Aprender Vuex'])
const creating = ref(false)
const inputRef = useTemplateRef('input')

function handleCreateTask() {
  creating.value = true
  nextTick(() => {
    inputRef.value.focus()
  })
}

function handleAddTask() {
  creating.value = false
  items.value.push(inputRef.value.value)
  inputRef.value.value = ''
}
</script>

<template>
  <div class="todo-list">
    <todo-list-item v-for="item in items" :key="item" :title="item" />
    <v-card
      v-if="!creating"
      class="todo-list-creation-item bg-transparent text-t-secondary"
      @click="handleCreateTask"
    >
      <p>Añadir tarea</p>
      <v-icon icon="add" size="20" />
    </v-card>
    <div v-else class="d-flex align-center ga-2">
      <v-text-field
        ref="input"
        rounded="0"
        base-color="border-primary"
        variant="outlined"
        density="compact"
        placeholder="Escribe la tarea aquí"
        hide-details
      />
      <base-btn @click="handleAddTask">Añadir</base-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.todo-list-creation-item {
  padding: 8px;
  border-width: 1px;
  border-color: var(--clr-border-secondary);
  border-style: dashed;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
</style>
