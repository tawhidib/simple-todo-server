const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

const todoList = [];

app.get("/", (request, response) => {
  response.send(todoList);
});

app.post("/", (request, response) => {
  const newTaskContent = request.body.newTask;
  todoList.push({ id: todoList.length + 1, content: newTaskContent });
  response.json(todoList);
});

app.listen(port, () => {
  console.log("server running on: ", port);
});
