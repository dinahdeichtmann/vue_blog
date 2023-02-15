<script setup>
import { computed } from "vue";
import postCard from "./postCard.vue";

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
    <postCard
      v-for="post of sortedPosts"
      :key="post.id"
      :currentPost="post"
    ></postCard>
  </div>
</template>

<style></style>
