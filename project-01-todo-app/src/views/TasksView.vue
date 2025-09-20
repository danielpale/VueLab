<script setup>
import TodoList from '@/components/common/TodoList.vue'

import { useTasksStore } from '@/stores/tasks'
import { storeToRefs } from 'pinia'

const tasksStore = useTasksStore()

const { completedTasks, incompleteTasks } = storeToRefs(tasksStore)
</script>

<template>
  <div class="task-view">
    <base-section class="d-flex flex-column ga-4">
      <h6 class="caption ff-text text-uppercase text-t-secondary">[Tareas Pendientes]</h6>
      <todo-list
        :tasks="incompleteTasks"
        @on-add-task="tasksStore.addTask"
        @on-complete-task="tasksStore.completeTask"
      />
    </base-section>
    <base-divider />
    <base-section class="d-flex flex-column ga-4">
      <h6 class="caption ff-text text-uppercase text-t-secondary">[Tareas Terminadas]</h6>
      <todo-list :tasks="completedTasks" hide-add @on-decomplete-task="tasksStore.decompleteTask" />
    </base-section>
  </div>
</template>

<style lang="scss" scoped>
.task-view {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
