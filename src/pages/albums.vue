<script setup>
import { ref, watch } from "vue";
import { API } from "../config";

let albums = ref();
let photos = ref([]);
let photoz = ref([]);

const getAlbums = async (id = "") => {
  let ext = id ? `/${id}/photos` : "";
  let res = await API.get(`https://jsonplaceholder.typicode.com/albums${ext}`);
  if (!id) {
    albums.value = res.data;
  } else {
    photos.value = res.data;
  }
};

// watch(x, y, z)
watch(
  () => photos,
  () => {
    photoz.value = photos.value.map((photo) => ({ ...photo, picsum: "https://picsum.photos/" + (300 + parseInt(photo.id)) }));
  },
  { deep: true, immediate: true }
);
</script>
<template>
  <div class="pt-6">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-6xl">Albums</h2>
      <a @click="getAlbums()" class="px-6 py-2 bg-orange-300 text-black text-sm uppercase rounded"> Loading Albums </a>
    </div>
    <!-- <pre>{{ albums }}</pre> -->
    <div class="grid grid-cols-2">
      <div>
        <div class="flex gap-3 mb-4" v-for="{ id, title } in albums" :key="id" @click="getAlbums(id)">
          <div>{{ id }}.</div>
          <div>{{ title }}</div>
        </div>
      </div>

      <div>
        <div class="grid grid-cols-6 gap-6 items-start">
          <img v-for="{ id, thumbnailUrl, picsum } in photoz" :key="'photo' + id" :src="picsum" />
        </div>
      </div>
    </div>
  </div>
  <pre class="text-xs">{{ photos }}</pre>
</template>