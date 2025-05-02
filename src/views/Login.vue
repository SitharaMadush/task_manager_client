<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card elevation="12" width="400" class="pa-6 rounded-lg">
      <v-card-title class="text-h5 text-center mb-4">Login</v-card-title>
      <LoginForm />
    </v-card>
  </v-container>
</template>

<script setup>
import LoginForm from '@/components/auth/LoginForm.vue';
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
}
</style>
