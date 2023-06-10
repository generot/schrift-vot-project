//const { default: Quill } = require("quill");
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

function entry() {
    let editor = new Quill("#editor-div", {
        theme: "snow",
        placeholder: "Your story starts here...",

        modules: {
            toolbar: toolbarOptions
        }
    });
}

entry();