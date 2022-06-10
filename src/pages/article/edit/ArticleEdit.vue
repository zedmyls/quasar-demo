<script setup lang="ts">


</script>

<template>
  <q-page padding>
    <q-input color="purple-12" v-model="text" label="标题">
      <template v-slot:prepend>
        <q-icon name="event" />
      </template>
    </q-input>
    <q-editor
      class="q-mt-md"
      v-model="editor"
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
      <q-radio v-model="color" val="teal" label="原创" color="teal" />
      <q-radio v-model="color" val="cyan" label="转载" color="cyan" />
    </div>
  </q-page>
</template>

<style scoped lang="scss"></style>
