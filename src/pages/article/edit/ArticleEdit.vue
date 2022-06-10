<script setup lang="ts">
import { useArticleEditStore } from 'stores/article/article-edit/article_edit';
import { storeToRefs } from 'pinia';

const $ae = useArticleEditStore();
const { article } = storeToRefs($ae);
</script>

<template>
  <q-page padding>
    <q-form @submit="$ae.submit">
      <q-input color="purple-12" v-model="article.title" label="标题">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>
      <q-editor
        class="q-mt-md"
        v-model="article.content"
        min-height="10rem"
        toolbar-bg="primary"
        toolbar-text-color="white"
        toolbar-toggle-color="yellow-8"
        content-class="bg-grey-2"
        :definitions="{
          img: {
            tip: 'Upload a image',
            icon: 'fa-solid fa-image',
            label: 'IMAGE',
            handler: () => {},
          },
        }"
        :toolbar="[
          ['bold', 'italic', 'strike', 'underline'],
          ['img'],
          ['undo', 'redo'],
        ]"
      />
      <div>
        <q-radio v-model="article.type" :val="0" label="原创" color="teal" />
        <q-radio v-model="article.type" :val="1" label="转载" color="cyan" />
      </div>
      <q-input
        color="purple-12"
        v-model="article.sourceURL"
        label="原文链接"
        v-show="article.type === 1"
      >
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>

      <div class='q-mt-lg'>
        <q-btn color="primary" label="提交" type="submit" />
      </div>
    </q-form>
  </q-page>
</template>

<style scoped lang="scss"></style>
