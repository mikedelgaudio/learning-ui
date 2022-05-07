const express = require("express");
const router = express.Router();
const data = require("../data");
const libraryData = data.library;

router.get("/book/:id", async (req, res) => {
  try {
    const userInput = req.params?.id;
    if (!userInput) res.status(400).json({ error: "You must send a book id." });
    const book = await libraryData.get(userInput);
    res.status(200).json(book);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
});

router.post("/book", async (req, res) => {
  try {
    const { title, author, text } = req.body;
    if (!title || !author || !text)
      res.status(400).json({ error: "You did not provide all 3 fields." });
    const result = await libraryData.create(title, author, text);
    res.status(201).json(result);
  } catch (e) {
    console.log(e);

    res.status(400).json({ error: e.message });
  }
});

module.exports = router;
