<script setup>
import { nextTick, ref, useTemplateRef } from 'vue'

import TodoListItem from './TodoListItem.vue'

const props = defineProps({ tasks: { type: Array, default: () => [] }, hideAdd: Boolean })
const emit = defineEmits(['on-complete-task', 'on-decomplete-task', 'on-add-task'])

const creating = ref(false)
const inputRef = useTemplateRef('input')

function handleCreateTask() {
  creating.value = true
  nextTick(() => {
    inputRef.value.focus()
  })
}

function handleAddTask() {
  if (inputRef.value.value === '') return
  creating.value = false
  emit('on-add-task', inputRef.value.value)
  inputRef.value.value = ''
}
function handleCancelCreateTask() {
  creating.value = false
  inputRef.value.value = ''
}
</script>

<template>
  <div class="todo-list">
    <todo-list-item
      v-for="task in tasks"
      :key="task.id"
      :id="task.id"
      :title="task.title"
      :creation-date="task.creationDate"
      :completion-date="task.completionDate"
      :completed="task.completed"
      @on-complete="(id) => emit('on-complete-task', id)"
      @on-decomplete="(id) => emit('on-decomplete-task', id)"
    />
    <template v-if="!hideAdd">
      <v-card
        v-if="!creating"
        class="todo-list-creation-item bg-transparent text-primary"
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
          @keypress.enter="handleAddTask"
        />
        <base-btn color="background-dark" @click="handleCancelCreateTask">Cancelar</base-btn>
        <base-btn @click="handleAddTask">Añadir</base-btn>
      </div>
    </template>
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
  border-color: var(--clr-primary);
  border-style: dashed;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
</style>
