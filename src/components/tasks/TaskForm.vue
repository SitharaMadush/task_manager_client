<template>
  <v-form @submit.prevent="submit">
    <v-row class="align-center mb-4">
      <v-col cols="10">
        <v-text-field
          v-model="newTask"
          label="Add a new task"
          hide-details
          density="compact"
          required
        />
      </v-col>
      <v-col cols="2">
        <v-btn type="submit" color="primary" block>Submit</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/tasks'

const taskStore = useTaskStore()
const newTask = ref('')

const submit = () => {
  if (newTask.value.trim()) {
    taskStore.createTask(newTask.value)
    newTask.value = ''
  }
}
</script>
