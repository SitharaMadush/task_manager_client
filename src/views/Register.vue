<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card class="pa-6 rounded-lg" elevation="12" width="400">
      <v-card-title class="text-h5 text-center mb-4">Register</v-card-title>

      <v-form @submit.prevent="submit">
        <v-text-field v-model="name" label="Name" required />
          <v-text-field v-model="email" label="Email" required type="email" />
          <v-text-field v-model="password" label="Password" required type="password" />
        <v-card-actions>
          <RouterLink to="/login">Already have an account?</RouterLink>
        </v-card-actions>

        <v-btn block class="mt-4" color="primary" type="submit">Register</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'
  import { useAuthStore } from '@/stores/auth'

  const name = ref('')
  const email = ref('')
  const password = ref('')
  const auth = useAuthStore()

  const submit = () => {
    auth.register({ name: name.value, email: email.value, password: password.value })
  }
</script>
