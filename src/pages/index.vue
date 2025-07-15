<script setup>
import { gQ } from "../store";
const { data, isLoading, isSuccess } = gQ(`posts`);

// const { data, isLoading, isSuccess } = useQuery(
//   {
//     queryKey: ["xyz"],
//     queryFn: async () => (await API.get("/posts"))?.data,
//   },
//   qc
// );
</script>
<template>
  <div class="pt-6">
    <div class="flex justify-between items-center">
      <h2 class="text-6xl">Posts</h2>
      <router-link to="/post" class="px-6 py-2 bg-orange-300 text-black text-sm uppercase rounded">New Post</router-link>
    </div>
    <hr class="my-10" />
    <div v-if="isLoading" class="text-3xl animate-bounce">Lo din din Loading ....</div>
    <div v-else-if="isSuccess" class="grid grid-cols-2 gap-10">
      <router-link v-for="{ id, title, body } in data" :to="`/comments?id=${id}`" :key="id" class="border-1 border-white/50 p-4">
        <h3 v-text="title.slice(0, 10)" class="text-2xl capitalize text-white" />
        <div v-text="body" />
      </router-link>
    </div>

    <pre v-if="0">{{ data }}</pre>
  </div>
</template>