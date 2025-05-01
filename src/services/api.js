import axios from 'axios'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'

const api = axios.create({
  baseURL: 'http://dev.laravel.com/api',
});

// Attach token to request
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
});

// Handle 401 errors globally
api.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {

      try {
        const refreshResponse = await axios.post('/api/refresh');
        const newToken = refreshResponse.data.token;
        localStorage.setItem('token', newToken);
        error.config.headers['Authorization'] = `Bearer ${newToken}`;
        return axios(error.config);
      } catch (refreshError) {
        const auth = useAuthStore()
        auth.logout()
        router.push('/login')
      }
    }
    return Promise.reject(error)
  }
)

export default api
