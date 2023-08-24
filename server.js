const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello from Vamshi");
});

app.get("/about", (req, res) => {
  // res.send("https://portfolio-hvg.vercel.app/");
  window.location.href("https://portfolio-hvg.vercel.app/");
});

// Export the Express API

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

module.exports = app;
