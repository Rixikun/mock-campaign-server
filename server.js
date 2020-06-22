const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.use("/api", require("./api"));

app.get("/", (req, res) => res.send("Hello from server"));

app.listen(port, () => console.log(`App listening on port ${port}!`));
