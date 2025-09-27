import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTasksStore = defineStore('task', () => {
  const tasks = ref([
    {
      id: 'd07684cc-4930-4650-8a6d-d17965ffd9d6',
      title: 'Task uncompleted',
      completed: false,
      creationDate: new Date(),
      completionDate: null,
    },
    {
      id: '2ad7717a-f681-4a1f-ac07-551fb184dcdb',
      title: 'Task completed',
      completed: true,
      creationDate: new Date(),
      completionDate: new Date(),
    },
  ])

  const incompleteTasks = computed(() => {
    return tasks.value.filter((task) => !task.completed)
  })
  const completedTasks = computed(() => {
    return tasks.value.filter((task) => task.completed)
  })

  function addTask(title) {
    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      creationDate: new Date(),
      completationDate: null,
      completed: false,
    }
    tasks.value.push(newTask)
  }

  function completeTask(id) {
    const index = tasks.value.findIndex((t) => t.id === id)
    tasks.value[index].completed = true
    tasks.value[index].completionDate = new Date()
  }

  function decompleteTask(id) {
    const index = tasks.value.findIndex((t) => t.id === id)
    tasks.value[index].completed = false
    tasks.value[index].completionDate = null
  }

  function deleteTask(id) {
    const index = tasks.value.findIndex((t) => t.id === id)
    tasks.value.splice(index, 1)
  }

  return {
    tasks,
    incompleteTasks,
    completedTasks,
    addTask,
    completeTask,
    decompleteTask,
    deleteTask,
  }
})
