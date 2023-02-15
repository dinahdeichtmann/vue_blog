<script setup>
import axios from "axios";
import { computed, onMounted, reactive } from "vue";

const state = reactive({
  posts: {},
});

const sortedPosts = computed(() => {
  let sortedPosts = [];

  for (const post of Object.values(state.posts)) {
    sortedPosts.push(post);
  }

  return sortedPosts;
});

async function fetchPosts() {
  const response = await axios.get("http://localhost:4001/posts");
  state.posts = response.data;
  console.log("SORTED POSTS", sortedPosts);
}

onMounted(() => {
  fetchPosts();
});
</script>

<template>
  <div class="d-flex flex-row flex-wrap justify-content-between">
    <div class="card" v-for="post in sortedPosts" :key="post.id">
      <h3>{{ post.title }}</h3>
    </div>
  </div>
</template>

<style></style>
