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
function entry() {
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
            socket.emit("modify-text", delta);
        }
    });

    socket.on("user-altered-text", (msg) => {
        editor.updateContents(msg, "api");
    })
}

entry();