<template>
  <v-form @submit.prevent="submit">
    <v-text-field
      v-model="name"
      label="Name"
      required
      class="mb-4"
    />
    <v-text-field
      v-model="email"
      label="Email"
      type="email"
      required
      class="mb-4"
    />
    <v-text-field
      v-model="password"
      label="Password"
      type="password"
      required
      class="mb-4"
    />
    <v-card-actions class="mb-4">
      <RouterLink to="/login">Already have an account?</RouterLink>
    </v-card-actions>
    <v-btn block color="primary" type="submit">Register</v-btn>
  </v-form>
</template>

<script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '@/stores/auth';

  const name = ref('');
  const email = ref('');
  const password = ref('');
  const auth = useAuthStore();

  const submit = () => {
    auth.register({
      name: name.value,
      email: email.value,
      password: password.value,
    });
  };
</script>
