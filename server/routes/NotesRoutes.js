const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const noteFilePath = "./data/Notes.json";

const getNotes = () => {
  const fileContent = fs.readFileSync(noteFilePath);
  const parsedFileContent = JSON.parse(fileContent);
  return parsedFileContent;
};

router.get("/", (_req, res) => {
  try {
    const text = getNotes();
    return res.status(200).json(text);
  } catch (err) {
    return res.status(500).json({ error: "File invalid." });
  }
});

router.post("/", (req, res) => {
  console.log("Request body object:", req.body);

  const newNote = {
    id: uuidv4(),
    text: req.body.text,
  };

  const note = getNotes();
  note.push(newNote);

  fs.writeFileSync(noteFilePath, JSON.stringify(note));

  return res.status(201).json(newNote);
});

module.exports = router;
