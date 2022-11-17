const express = require("express");

const https = require("https");

const bodyParser = require("body-parser");

const app = express();

app.set("vies engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.cityName;
  const apiKey = "4fded8cfc6ed7e219b7089e8395afcb0";
  const units = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    units +
    "";

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<p>Weather description is " + desc + ".</p>");
      res.write(
        "<h1>Temp in " + query + " is " + temp + " Degree Celcius.</h1>"
      );
      res.write("<img src =" + imgURL + " >");
      // res.sendFile(__dirname + "/hi.html");
      res.send();
    });
  });
});

app.listen(2003, function () {
  console.log("Server is started on port 2003");
});
