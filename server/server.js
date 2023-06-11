const { createServer } = require("http");

const socket = require("socket.io");
const express = require("express");
const path = require("path");

const PORT = 8080;

const app = express();
const server = createServer(app);
const io = new socket.Server(server);

app.use(
    express.static(
        path.join(__dirname, "../client")
    )
);

app.get("/", (req, res) => {
    res.redirect("/html/index.html");
});

io.on("connection", (socket) => {
    socket.on("modify-text", (msg) => {
        socket.broadcast.emit("user-altered-text", msg);
    })
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});