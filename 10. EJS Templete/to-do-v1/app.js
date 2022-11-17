const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

let items = [];
let workItems = [];

app.get("/", (req, res) => {
  let day = date.getDate();
  res.render("list", { listTitle: day, newListItem: items });
});

app.post("/", (req, res) => {
  let item = req.body.newItem;

  if (req.body.button === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItem: workItems });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(2003, () => {
  console.log("Server started at port 2003");
});
