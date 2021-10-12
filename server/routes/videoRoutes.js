const express = require("express");
const router = express.Router();
const fs = require("fs");
//const { v4: uuidv4 } = require("uuid");

const videosFilePath = "./data/videos.json";

const getVideos = () => {
  const fileContent = fs.readFileSync(videosFilePath);
  const parsedFileContent = JSON.parse(fileContent);
  return parsedFileContent;
};

// GET all videos endpoint

router.get("/", (_req, res) => {
  try {
    const videos = getVideos();
    return res.status(200).json(videos);
  } catch (err) {
    return res.status(500).json({ error: "File invalid." });
  }
});

router.get("/:id", (_req, res) => {
  try {
    const videos = getVideos();
    return res.status(200).json(
      videos.find((vid) => {
        return vid.id === _req.params.id;
      })
    );
  } catch (err) {
    return res.status(500).json({ error: "Invalid file request." });
  }
});

module.exports = router;
