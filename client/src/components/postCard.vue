<script setup>
import commentCreate from "./commentCreate.vue";
import commentList from "./commentList.vue";

import axios from "axios";
import { onMounted, reactive } from "vue";

const props = defineProps({
  currentPost: Object,
});

const state = reactive({ comments: [] });

async function fetchComments() {
  const response = await axios.get(
    `http://localhost:4001/posts/${props.postId}/comments`
  );
  state.comments = response.data;
  console.log("COMMENTS", state.comments);
}

async function sendComment(content) {
  await axios
    .post(`http://localhost:4001/posts/${props.postId}/comments`, {
      content: content,
    })
    .catch(function (error) {
      console.log("ERROR", error);
    });

  await fetchComments();
}

onMounted(function () {
  fetchComments();
});
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h3>{{ currentPost.title }}</h3>
      <commentList
        :postId="currentPost.id"
        :comments="state.comments"
      ></commentList>
      <commentCreate
        @sendComment="sendComment"
        :postId="currentPost.id"
      ></commentCreate>
    </div>
  </div>
</template>

<style></style>
