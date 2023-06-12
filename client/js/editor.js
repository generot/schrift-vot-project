var roomID = null;

var toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'font': [] }],
    [{ 'size': ['small', false, 'large', 'huge'] }],  

    [{ 'script': 'sub' }, { 'script': 'super' }],     
    [{ 'indent': '-1' }, { 'indent': '+1' }],         

    ['bold', 'italic', 'underline', 'strike'],        
    ['blockquote', 'code-block'],

    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'align': [] }],         

    [{ 'color': [] }, { 'background': [] }],

    ['clean']
];

//const { default: Quill } = require("quill");


function invitee() {
    roomID = prompt("Enter your room ID!");
}

function creator() {
    roomID = crypto.randomUUID();

    alert(`Your Document ID is: ${roomID}`);
}

function entry(callback) {
    callback();

    let socket = io();

    let editor = new Quill("#editor-div", {
        theme: "snow",
        placeholder: "Your story starts here...",

        modules: {
            toolbar: toolbarOptions
        }
    });

    editor.on("text-change", (delta, oldDelta, source) => {
        if(source == "user") {
            socket.emit("modify-text", roomID, delta);
        }
    });

    socket.on("connect", () => {
        socket.emit("join-document", roomID);
    })

    socket.on("user-altered-text", (msg) => {
        editor.updateContents(msg, "api");
    })
}