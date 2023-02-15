<script setup>
import axios from "axios";
import { computed, onMounted, reactive } from "vue";

const props = defineProps({
  postId: String,
});

const state = reactive({ comments: [] });

const sortedComments = computed(() => {
  let sortedComments = [];

  for (const comment of Object.values(state.comments)) {
    sortedComments.push(comment);
  }

  return sortedComments;
});

async function fetchComments() {
  const response = await axios.get(
    `http://localhost:4001/posts/${props.postId}/comments`
  );
  state.comments = response.data;
}

onMounted(() => {
  fetchComments();
});
</script>

<template>
  <ul>
    <li v-for="comment in sortedComments" :key="comment.id">
      {{ comment.content }}
    </li>
  </ul>
</template>

<style></style>
