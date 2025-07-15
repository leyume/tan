<script setup>
import { ref } from "vue";
import { mPost } from "../store";

const title = ref();
const body = ref();

const { mutate, isPending, isSuccess, isError, error } = mPost();
</script>
<template>
  <div class="pt-6">
    <h2 class="text-6xl">Posts</h2>
    <hr class="my-10" />
    <form @submit.prevent="mutate({ title, body })" class="grid gap-8 [&_*]:border-white/50 [&_*]:border-1 [&_*]:p-2">
      <input type="text" placeholder="title" v-model="title" />
      <textarea name="" rows="5" v-model="body" placeholder="body"></textarea>
      <button class="px-6 py-2 bg-orange-300 text-black text-sm uppercase rounded">New Post</button>
    </form>

    <pre v-if="0">{{ data }}</pre>
  </div>
</template>