import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTasksStore = defineStore('task', () => {
  const tasks = ref([])

  const storedTasks = localStorage.getItem('tasks')
  if (storedTasks !== null) {
    tasks.value = JSON.parse(storedTasks)
  }

  const incompleteTasks = computed(() => {
    return tasks.value.filter((task) => !task.completed)
  })
  const completedTasks = computed(() => {
    return tasks.value.filter((task) => task.completed)
  })

  function addTask(title) {
    const newTask = {
      id: `${new Date()}`,
      title: title,
      creationDate: new Date(),
      completationDate: null,
      completed: false,
    }
    tasks.value.push(newTask)
    updateStore()
  }

  function completeTask(id) {
    const index = tasks.value.findIndex((t) => t.id === id)
    tasks.value[index].completed = true
    tasks.value[index].completionDate = new Date()
    updateStore()
  }

  function decompleteTask(id) {
    const index = tasks.value.findIndex((t) => t.id === id)
    tasks.value[index].completed = false
    tasks.value[index].completionDate = null
    updateStore()
  }

  function deleteTask(id) {
    const index = tasks.value.findIndex((t) => t.id === id)
    tasks.value.splice(index, 1)
    updateStore()
  }

  function updateTask(id, newTitle) {
    const index = tasks.value.findIndex((t) => t.id === id)
    tasks.value[index].title = newTitle
    updateStore()
  }

  function updateStore() {
    localStorage.setItem('tasks', JSON.stringify(tasks.value))
  }

  return {
    tasks,
    incompleteTasks,
    completedTasks,
    addTask,
    completeTask,
    decompleteTask,
    deleteTask,
    updateTask,
  }
})
