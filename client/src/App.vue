<script setup>
import postCreate from "./components/postCreate.vue";
import postList from "./components/postList.vue";
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
      <postCreate></postCreate>
      <hr />
      <h1>Posts</h1>
      <postList></postList>
    </div>
  </body>
</template>

<style scoped></style>
