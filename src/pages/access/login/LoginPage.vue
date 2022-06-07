<script setup lang="ts">
import { useLoginStore } from 'pages/access/login/store/login.store';
import { ref } from 'vue';

const $l = useLoginStore();
const isPwd = ref(true);
</script>

<template>
  <q-page padding>
    <form @submit.prevent.stop="$l.submit" class="q-gutter-md">
      <q-input
        filled
        v-model.trim="$l.username"
        label="用户名"
        lazy-rules
        :rules="[
          (value) =>
            (value.length >= 3 && value.length <= 10) || '用户名长度需在3-10间',
          (value) =>
            new RegExp(/(^[a-zA-Z_])/).test(value) || '必须以字母或下划线开头',
        ]"
      />

      <q-input
        v-model="$l.password"
        filled
        label="密码"
        :type="isPwd ? 'password' : 'text'"
        :rules="[
          (value) =>
            (value.length >= 3 && value.length <= 10) || '密码长度需在3-10间',
          (value) =>
            new RegExp(/(?=.*[a-z])/).test(value) || '至少含有一位字母',
        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-toggle v-model="$l.isCachePassword" label="记住密码" />

      <div>
        <q-btn label="登录" type="submit" color="primary" size="md" />
      </div>
    </form>
  </q-page>
</template>

<style scoped lang="scss"></style>
