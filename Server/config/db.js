const mongoose = require("mongoose");

const url = "mongodb://localhost/Reference";

mongoose.connect(url).then(() => {
  console.log("Database is now Connected");
});
