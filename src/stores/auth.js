import { defineStore } from 'pinia'
import api from '@/services/api'
import router from '@/router'
import { useNotificationStore } from './notification'

// Define Pinia store
export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    user: localStorage.getItem('user') || '',
  }),
  actions: {
    // Send login request, save received token & user in local storage
    async login (credentials) {
      try {
        const res = await api.post('/login', credentials)
        this.token = res.data.token
        this.user = res.data.user
        localStorage.setItem('token', this.token)
        localStorage.setItem('user', this.user)
        router.push('/dashboard')
      } catch(error){
        useNotificationStore().show(error?.response?.data?.message ? error.response.data.message : 'Login Failed');
      }
    },
    // Send register request, save received token & user in local storage
    async register (data) {
      try{
        const res = await api.post('/register', data)
        this.token = res.data.token
        this.user = res.data.user
        localStorage.setItem('token', this.token)
        localStorage.setItem('user', this.user)
        router.push('/dashboard')
      }catch(error){
        useNotificationStore().show(error?.response?.data?.message ? error.response.data.message : 'Registration Failed');
      }
    },
    // Remove the token from local storage & redirect to login
    logout () {
      try{
        this.token = ''
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        router.push('/login')
      }catch(error){
        useNotificationStore().show('Failed to Logout');
      }
    },
  },
})
