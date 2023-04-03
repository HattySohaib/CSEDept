const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view-engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.listen(80, () => {
  console.log("Server listening at port 80");
});
