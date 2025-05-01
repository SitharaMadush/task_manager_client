<template>
  <v-app>
    <v-main>
      <router-view />
      <snack-bar />
    </v-main>
  </v-app>
</template>

<script setup>
  import SnackBar from './components/SnackBar.vue';
</script>
