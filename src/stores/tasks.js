import { defineStore } from 'pinia'
import api from '@/services/api'
import { useNotificationStore } from './notification'
// Define Pinia store
export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    filter: '',
    isLoading: false,
  }),

  actions: {
    // Load tasks from the API with optional status filtering
    async loadTasks () {
      this.isLoading = true
      try{
        const res = await api.get('/tasks', {
          params: { status: this.filter },
        })
        this.tasks = res.data
      } catch (error) {
        console.error('Error loading tasks:', error)
        useNotificationStore().show('Error loading tasks');
      } finally {
        this.isLoading = false
      }
    },
    // Create a new task and reload the task list
    async createTask (title) {
      this.isLoading = true
      try {
        await api.post('/tasks', { title })
        this.loadTasks()
        useNotificationStore().show('Task created successfully.', 'success');
      } catch(error){
        console.error('Error creating task:', error)
        useNotificationStore().show('Error creating task');

      } finally {
        this.isLoading = false
      }
    },

    // Mark a task as completed and reload the task list
    async completeTask (id) {
      this.isLoading = true
      try {
        await api.patch(`/tasks/${id}/complete`)
        this.loadTasks()
        useNotificationStore().show('Task completed successfully.', 'success');
      } catch(error){
        console.error('Error completing task:', error)
        useNotificationStore().show('Error completing task');
      } finally {
        this.isLoading = false
      }
    },

    // Delete a task by its ID and reload the task list
    async deleteTask (id) {
      this.isLoading = true
      try {
        await api.delete(`/tasks/${id}`)
        this.loadTasks()
        useNotificationStore().show('Task deleted successfully.', 'success');
      } catch(error){
        console.error('Error deleting task:', error)
        useNotificationStore().show('Error deleting task');
      } finally {
        this.isLoading = false
      }
    },

    // Set the current filter and reload the task list
    setFilter (status) {
      this.filter = status
      this.loadTasks()
    },
  },
})
