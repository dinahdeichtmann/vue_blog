<script setup>
import { computed } from "vue";

const props = defineProps({
  postId: String,
  comments: Object,
});

// const commentProp = defineProps({
//   comments: Object,
// });

const sortedComments = computed(() => {
  let sortedComments = [];

  for (const comment of Object.values(props.comments)) {
    sortedComments.push(comment);
  }

  return sortedComments;
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
