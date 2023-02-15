<script setup>
import { ref } from "vue";

const props = defineProps({
  postId: String,
});

const newComment = ref("");
const emit = defineEmits(["sendComment"]);

async function sendComment(event) {
  event.preventDefault();

  emit("sendComment", newComment.value);

  newComment.value = "";
}
</script>

<template>
  <div class="CommentCreate">
    <div>
      <form @submit="sendComment">
        <div className="form-group">
          <label>New Comment</label>
          <input v-model="newComment" className="form-control" required />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
