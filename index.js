const express = require("express");
const cors = require("cors");

const app = express();

const userData = require("./routes/data.js");

const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.send("This is a server built by Gideon Nwokpor");
});

app.get("/api/data", (req, res) => {
  res.json(userData);
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server is running on port " + port);
});
