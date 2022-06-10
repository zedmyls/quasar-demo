<script setup lang="ts">
import { useQuasar } from 'quasar';

const $q = useQuasar();
</script>

<template>
  <q-page padding>
    <q-btn color="secondary" label="切换主题" @click="$q.dark.toggle" />
    <q-btn
      color="secondary"
      label="register"
      icon="login"
      @click="$router.push('/register')"
    />
    <q-btn
      color="brown-5"
      label="edit"
      icon="edit"
      @click="$router.push('/article/edit')"
    />
  </q-page>
  <div class="bg-blue-1">111</div>
</template>

<style scoped lang="scss">
.wrapper {
}
</style>
