<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

// For Registration
const newUsername = ref('');
const newPassword = ref('');
const registerMessage = ref('');

const login = async () => {
  try {
    const response = await axios.post('http://localhost:8888/auth/login', {
      username: username.value,
      password: password.value,
    });
    
    const token = response.data.accessToken; // Assuming backend returns { accessToken: "..." }
    localStorage.setItem('jwt_token', token);
    
    router.push('/reservations'); // Redirect to reservations page
  } catch (error) {
    errorMessage.value = 'Login failed. Please check your credentials.';
    console.error('Login error:', error);
  }
};

const register = async () => {
  try {
    const response = await axios.post('http://localhost:8888/auth/register', {
      username: newUsername.value,
      password: newPassword.value,
    });
    registerMessage.value = 'Registration successful! You can now log in.';
    newUsername.value = ''; // Clear form
    newPassword.value = ''; // Clear form
  } catch (error) {
    registerMessage.value = 'Registration failed. User might already exist or an error occurred.';
    console.error('Registration error:', error);
  }
};
</script>

<template>
  <div>
    <h3>Login</h3>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>

    <hr>

    <h3>Register</h3>
    <form @submit.prevent="register">
      <div>
        <label for="newUsername">New Username:</label>
        <input type="text" id="newUsername" v-model="newUsername" required />
      </div>
      <div>
        <label for="newPassword">New Password:</label>
        <input type="password" id="newPassword" v-model="newPassword" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <p v-if="registerMessage" style="color: green;">{{ registerMessage }}</p>

    <hr>
    <h3>mywebpage menu</h3>
    <ul>
      <li>menu1</li>
      <li>menu2</li>
      <li>menu3</li>
    </ul>
  </div>
</template>
