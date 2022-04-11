const express = require("express");
require("./config/db");
const port = 2024;
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/", require("./routes/fruitsRouter"));
app.use("/", require("./routes/peoplesRouter"));

app.get("/", (req, res) => {
  res.send("This is a very simple API");
});

app.listen(port, (req, res) => {
  console.log(`App is Listening to: ${port}`);
});
