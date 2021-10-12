const express = require("express");
const app = express();
const cors = require("cors");
const videoRoutes = require("./routes/videoRoutes");

//Run the port using the env file
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(express.json());

//Implementing middleware
app.use(cors());

app.use((_req, _res, next) => {
  console.log("Incoming Request");
  next();
});

app.use("/videos", videoRoutes);

app.use("/:id", videoRoutes);

// Start the server listening
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
