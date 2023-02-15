<script setup>
import postCreate from "./components/postCreate.vue";
import postList from "./components/postList.vue";

import axios from "axios";
import { onMounted, reactive } from "vue";

const state = reactive({
  posts: {},
});

async function fetchPosts() {
  const response = await axios.get("http://localhost:4001/posts");
  state.posts = response.data;
}

async function sendPost(title) {
  await axios
    .post("http://localhost:4001/posts", {
      title: title,
    })
    .catch(function (error) {
      console.log("ERROR", error);
    });

  await fetchPosts();
}

onMounted(function () {
  fetchPosts();
});
</script>

<template>
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container">
      <postCreate @sendPost="sendPost"></postCreate>
      <hr />
      <h1>Posts</h1>
      <postList :posts="state.posts"></postList>
    </div>
  </body>
</template>

<style scoped></style>
