<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card class="pa-6 rounded-lg" elevation="12" width="400">
      <v-card-title class="text-h5 text-center mb-4">Register</v-card-title>
      <RegisterForm />
    </v-card>
  </v-container>
</template>

<script setup>
  import RegisterForm from '@/components/auth/RegisterForm.vue';
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
}
</style>
