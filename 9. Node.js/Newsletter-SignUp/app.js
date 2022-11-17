const express = require("express");

const bodyParser = require("body-parser");

const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signUp.html");
});

app.post("/", function (req, res) {
  var first = req.body.firstName;
  var last = req.body.lastName;
  var email = req.body.email;

  console.log(first, last, email);
});

app.listen(2003, function () {
  console.log("Server started on port 2003");
});

// c68260238b8cddfe099007d06ae6571a-us12

// 7320de2d2a
