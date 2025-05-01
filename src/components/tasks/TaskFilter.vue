<template>
  <v-row class="mb-2 justify-end">
    <v-col cols="12" md="3" sm="4">
      <v-select
        :items="statusOptions"
        v-model="filter"
        label="Status Filter"
        density="compact"
        hide-details
        clearable
        @update:modelValue="taskStore.setFilter"
      />
    </v-col>
  </v-row>
</template>

<script setup>
  import { ref } from 'vue'
  import { useTaskStore } from '@/stores/tasks'

  const taskStore = useTaskStore()
  const filter = ref('')

  const statusOptions = [
    { title: 'All', value: '' },
    { title: 'Completed', value: 'completed' },
    { title: 'Pending', value: 'pending' },
  ]
</script>
