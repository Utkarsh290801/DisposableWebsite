const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.get("/home", (req, res) => {
    res.send("hello express");
  });
  app.listen(port, () => {
    console.log("the server has been started");
  });
  