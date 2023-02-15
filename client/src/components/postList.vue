<script setup>
import { computed } from "vue";
import commentCreate from "./commentCreate.vue";
import commentList from "./commentList.vue";

const props = defineProps({
  posts: Object,
});

const sortedPosts = computed(() => {
  let sortedPosts = [];

  for (const post of Object.values(props.posts)) {
    sortedPosts.push(post);
  }

  return sortedPosts;
});
</script>

<template>
  <div class="d-flex flex-row flex-wrap justify-content-between">
    <div class="card" v-for="post in sortedPosts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <commentList :postId="post.id"></commentList>
      <commentCreate :postId="post.id"></commentCreate>
    </div>
  </div>
</template>

<style></style>
