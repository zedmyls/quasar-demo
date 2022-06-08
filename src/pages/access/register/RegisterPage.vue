<script setup lang="ts">
import { useRegisterStore } from 'pages/access/register/vm/register.store';
import { storeToRefs } from 'pinia';

const $r = useRegisterStore();
const { user, repeatPwd, isPwd, isAgree } = storeToRefs($r);
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
      >
        <template v-slot:prepend>
          <q-icon name="fa-solid fa-user-ninja" />
        </template>
      </q-input>

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
        <template v-slot:prepend>
          <q-icon name="fa-solid fa-lock" />
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
        <template v-slot:prepend>
          <q-icon name="fa-solid fa-lock" />
        </template>
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
      >
        <template v-slot:prepend>
          <q-icon name="fa-solid fa-at" />
        </template>
      </q-input>

      <div>
        <q-checkbox v-model="isAgree" color="cyan" />
        <span
          >您需同意本APP的<span
            class="text-light-blue-5 cursor-pointer"
            @click.stop="$r.showDialog"
            >用户使用规范</span
          ></span
        >
      </div>

      <div>
        <q-btn label="注册" type="submit" color="primary" size="md" :disable='!isAgree'/>
        <q-btn color="black" label="已有账号？去登录" class='float-right'/>
      </div>
    </q-form>
  </q-page>
</template>

<style scoped lang="scss"></style>
