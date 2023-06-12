var textfield = document.getElementById("form-input");
var createDoc = document.getElementById("create-doc");
var joinDoc   = document.getElementById("join-doc");

function main() {
    createDoc.onclick = () => {
        window.location.href = `/html/editor-creator.html`;
    };

    joinDoc.onclick = () => {
        window.location.href = "/html/editor.html";
    }
}

main();