<script setup>
import commentCreate from "./commentCreate.vue";
import commentList from "./commentList.vue";

defineProps({
  currentPost: Object,
});
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h3>{{ currentPost.title }}</h3>
      <commentList :postId="currentPost.id"></commentList>
      <commentCreate :postId="currentPost.id"></commentCreate>
    </div>
  </div>
</template>

<style></style>
