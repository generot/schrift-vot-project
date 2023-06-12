const { createServer } = require("http");

const PORT = 8080;

const socket = require("socket.io");
const express = require("express");
const path = require("path");

const app = express();
const server = createServer(app);
const io = new socket.Server(server);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    express.static(
        path.join(__dirname, "../client")
    )
);

app.get("/", (req, res) => {
    res.redirect("/html/index.html");
});

io.on("connection", (socket) => {
    socket.on("join-document", (roomID) => {
        socket.join(roomID);
    })

    socket.on("modify-text", (roomID, msg) => {
        socket.to(roomID).emit("user-altered-text", msg);
    })
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});