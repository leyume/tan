<script setup>
import { useRoute } from "vue-router";
import { gQ } from "../store";

const route = useRoute();
const id = route.query.id;

const { data, isLoading, isSuccess } = gQ(`posts/${id}/comments`);

// const { data, isLoading, isSuccess } = useQuery(
//   {
//     queryKey: ["comments-" + id],
//     queryFn: async () => (await API.get(`/posts/${id}/comments`))?.data,
//   },
//   qc
// );
</script>
<template>
  <div>
    <h2>Comments {{ route.query.id }}</h2>
    <hr class="my-10" />
    <div v-if="isLoading" class="text-9xl">Lo din din Loading ....</div>
    <pre v-else>{{ data }}</pre>
  </div>
</template>