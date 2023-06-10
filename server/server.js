const express = require("express");
const path = require("path");

const PORT = 8080;

const app = express();

app.use(
    express.static(
        path.join(__dirname, "../client")
    )
);

app.get("/", (req, res) => {
    res.redirect("/html/index.html");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});