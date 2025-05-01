<template>
  <v-container class="pa-0">
    <TopBar />
    <v-main class="pa-4">
      <v-card class="pa-4">
        <TaskForm />
        <TaskFilter />
        <TaskTable />
      </v-card>
    </v-main>
  </v-container>
</template>

<script setup>
  import TopBar from '@/components/layout/TopBar.vue'
  import TaskForm from '@/components/tasks/TaskForm.vue'
  import TaskFilter from '@/components/tasks/TaskFilter.vue'
  import TaskTable from '@/components/tasks/TaskTable.vue'
  import { onMounted } from 'vue'
  import { useTaskStore } from '@/stores/tasks'

  const taskStore = useTaskStore()
  onMounted(() => taskStore.loadTasks())
</script>
