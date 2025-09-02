import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'; // Import axios

import './assets/main.css'

const app = createApp(App)

// Add Axios interceptor
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

app.use(router)

app.mount('#app')