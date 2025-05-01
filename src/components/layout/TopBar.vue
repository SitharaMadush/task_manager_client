<template>
  <v-app-bar app color="primary" dark flat>
    <v-app-bar-title>Task Manager</v-app-bar-title>
    <v-spacer />
    <v-icon class="mr-2">mdi-account</v-icon>
    <span class="mr-4">{{ auth.user.name }}</span>
    <v-btn class="ml-2" @click="auth.logout" variant="text" color="white">
      <v-icon start>mdi-logout</v-icon> Logout
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
const auth = useAuthStore()
</script>
