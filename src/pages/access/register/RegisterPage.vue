<script setup lang="ts">
import { useRegisterStore } from 'pages/access/register/vm/register.store';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

const $r = useRegisterStore();
const { user, repeatPwd } = storeToRefs($r);
const isPwd = ref(true);

const form = ref(null);
</script>

<template>
  <q-page padding>
    <q-form @submit="$r.submit" class="q-gutter-md" greedy>
      <q-input
        filled
        v-model.trim="user.username"
        label="用户名"
        :rules="[
          (value) =>
            (value && RegExp(/(^[a-zA-Z_])/).test(value)) ||
            '必须以字母或下划线开头',
          (value) =>
            (value && value.length >= 3 && value.length <= 10) ||
            '用户名长度需在3-10间',
        ]"
      />

      <q-input
        v-model="user.password"
        filled
        label="密码"
        :type="isPwd ? 'password' : 'text'"
        :rules="[
          (value) =>
            (value && value.length >= 3 && value.length <= 10) ||
            '密码长度需在3-10间',
          (value) =>
            (value && RegExp(/(?=.*[a-z])/).test(value)) || '至少含有一位字母',
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

      <q-input
        v-model="repeatPwd"
        filled
        label="确认密码"
        :type="isPwd ? 'password' : 'text'"
        :rules="[
          (value) => (value && value.length) || '请输入确认密码',
          (value) => value === user.password || '两次输入的密码不一致',
        ]"
      >
      </q-input>

      <q-input
        filled
        v-model.trim="user.email"
        label="邮箱"
        :rules="[
          (value) =>
            (value &&
              RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/).test(
                value
              )) ||
            '请输入有效格式的邮箱',
        ]"
      />

      <div>
        <q-btn label="注册" type="submit" color="primary" size="md" />
      </div>
    </q-form>
  </q-page>
</template>

<style scoped lang="scss"></style>
