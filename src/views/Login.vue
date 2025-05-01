<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card elevation="12" width="400" class="pa-6 rounded-lg">
      <v-card-title class="text-h5 text-center mb-4">Login</v-card-title>

      <v-form @submit.prevent="submit">
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          prepend-inner-icon="mdi-email"
          class="mb-4"
        />

        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          prepend-inner-icon="mdi-lock"
          class="mb-4"
        />
        <v-card-actions>
          <RouterLink to="/register">Create an account</RouterLink>
        </v-card-actions>

        <v-btn type="submit" block color="primary" size="large">Login</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'
  import { useAuthStore } from '@/stores/auth'


  const email = ref('')
  const password = ref('')

  const auth = useAuthStore()

  const submit = () => {
    auth.login({
      email: email.value,
      password: password.value
    })
  }
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
}
</style>
