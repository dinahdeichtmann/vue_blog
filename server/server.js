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

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
