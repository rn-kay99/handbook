const express = require("express");
const app = express();

let port = 8080;

app.get("/", (req, res) => {
    res.send("Handbook startpage");
})

app.listen(port, (req, res) => {
    console.log("Server is running on port " + port);
})