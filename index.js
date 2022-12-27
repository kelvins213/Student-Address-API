require("./model/location_schema");

const express = require('express');
const mongoose = require('mongoose');
const admin = require('./routes/admin');
const app = express();

const url = "mongodb+srv://kelvins213:<password>@cluster0.aaknyyf.mongodb.net/Student-Location?retryWrites=true&w=majority";
mongoose.connect(url).then(
  () => {
    console.log("Connected with MongoDB");
  }
).catch(
  (err) => {
    console.error(err);
  }
);

app.listen(8081, () => {
  console.log("Server running on http://localhost:8081");
});

const rota = "/"
app.use(rota, admin);
