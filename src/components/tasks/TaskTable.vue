<template>
  <v-data-table
    :headers="headers"
    :items="taskStore.tasks"
    :items-per-page="5"
    class="elevation-1"
  >
    <template #item.created_at="{ item }">
      {{ formatDate(item.created_at) }}
    </template>
    <template #item.updated_at="{ item }">
      {{ formatDate(item.updated_at) }}
    </template>
    <template #item.completed="{ item }">
      <v-chip :color="item.completed ? 'green' : 'grey'" dark>
        {{ item.completed ? 'Completed' : 'Pending' }}
      </v-chip>
    </template>
    <template #item.actions="{ item }">
      <div class="text-right d-flex justify-end ga-2">
        <v-btn icon @click="taskStore.completeTask(item.id)" :disabled="!!item.completed" title="Mark complete">
          <v-icon>mdi-check</v-icon>
        </v-btn>
        <v-btn icon @click="taskStore.deleteTask(item.id)" title="Delete task">
          <v-icon color="red">mdi-delete</v-icon>
        </v-btn>
      </div>
    </template>
  </v-data-table>
</template>

<script setup>
  import { useTaskStore } from '@/stores/tasks'
  const taskStore = useTaskStore()

  const headers = [
    { title: 'Task', key: 'title' },
    { title: 'Status', key: 'completed' },
    { title: 'Created At', key: 'created_at' },
    { title: 'Updated At', key: 'updated_at' },
    { title: 'Actions', key: 'actions', sortable: false, align: 'end' },
  ];

  const formatDate = (isoString) => {
    return  new Date(isoString).toLocaleString(
      'en-US', {
        dateStyle: 'long',
        timeStyle: 'short',
      }
    )
  }
</script>
