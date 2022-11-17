const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});

app.get("/about", function (req, res) {
  res.send("I am Mayur");
});

app.listen(2003, function () {
  console.log("server is started on port 2003");
});
