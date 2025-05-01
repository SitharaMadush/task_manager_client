<template>
  <v-snackbar v-model="visible" :color="color" :location="location" timeout="4000">
    {{ message }}
  </v-snackbar>
</template>

<script setup>
  import { ref, watchEffect } from 'vue'
  import { useNotificationStore } from '@/stores/notification'

  const store = useNotificationStore()
  const visible = ref(false)
  const message = ref('')
  const color = ref('error')
  const location = ref('top')

  watchEffect(() => {
    if (store.message) {
      message.value = store.message
      color.value = store.color
      visible.value = true
      store.clear()
    }
  })
</script>
