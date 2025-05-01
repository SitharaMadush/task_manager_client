// stores/notification.ts
import { defineStore } from 'pinia'

// Define Pinia store
export const useNotificationStore = defineStore('notification', {
  state: () => ({
    message: '',
    color: 'error',
  }),
  actions: {
    // sets message & color
    show (message, color = 'error') {
      this.message = message
      this.color = color
    },
    // Reset message & color
    clear () {
      this.message = '';
      this.color = 'error';
    },
  },
})
