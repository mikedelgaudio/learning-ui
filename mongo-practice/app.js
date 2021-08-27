const express = require("express");
const app = express();
app.use(express.json());

const db = require("./db");
const collection = "todo";

const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

app.get("/todos", (req, res) => {
  db.getDb()
    .collection(collection)
    .find({})
    .toArray((err, documents) => {
      if (err) {
        //send user the error response
        console.error(err);
      } else {
        console.log(documents);
        res.json(documents);
      }
    });
});

app.put("todos/:id", (req, res) => {
  const todoId = req.params.id; // make sure valid int
  const userInput = req.body; // make sure valid

  db.getDb()
    .collection(collection)
    .findOneAndUpdate(
      { _id: todoId },
      { $set: { todo: userInput.todo } },
      { returnOriginal: false },
      (err, result) => {
        if (err) console.error("Failed to update I would send you a response");
        else res.json(result);
      }
    );
});

db.connect((err) => {
  if (err) {
    console.error(
      "Unable to connect to database. mongod --config /usr/local/etc/mongod.conf"
    );
    process.exit(1);
  } else {
    app.listen(3000, () => {
      console.log("Server is live on http://localhost:3000");
    });
  }
});
