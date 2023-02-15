const cors = require("cors");
const express = require("express");
const randomBytes = require("crypto").randomBytes;

const app = express();

app.use(express.json);
app.use(cors());

// POSTS SERVICE

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const title = req.body.title;

  posts[id] = { id, title };

  res.status(200).send(posts[id]);
});

// COMMENTS SERVICE

const commentsByPostId = {};

app.get("posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const content = req.body.content;
  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comments;

  res.status(200).send(comments);
});

// PORT

const port = 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
