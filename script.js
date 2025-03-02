//  code to disable the delete icon from getting deleted while typing
// document.addEventListener("DOMContentLoaded", function () {
//     const editor = document.getElementById("editor");

//     editor.addEventListener("input", function () {
//         if (editor.innerHTML.trim() === "") {
//             editor.innerHTML = '<i class="fa-solid fa-trash delete-icon"></i>';
//         }
//     });
// });

const textArea = document.querySelector(".txtArea");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".editor");

// function showNotes(){
//     textArea.innerHTML = localStorage.getItem("notes");
// }
// showNotes();

function showNotes() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        textArea.innerHTML = savedNotes;
        addDeleteEvent();
    }
}

function updateStorage(){
    localStorage.setItem("notes", textArea.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let icon = document.createElement("i");
    inputBox.className = "editor";
    inputBox.setAttribute("contenteditable", "true");
    icon.className = "fa-regular fa-pen-to-square";
    textArea.appendChild(inputBox).appendChild(icon);

    updateStorage();
    addDeleteEvent();
});

// textArea.addEventListener("click", function(e){
//     if(e.target.tagName === "icon"){
//         e.target.parentElement.remove();
//         updateStorage();
//     }
//     else if(e.target.tagName === "p"){
//         notes = document.querySelectorAll(".editor");
//         notes.forEach(nt =>{
//             nt.onkeyup = function(){
//                 updateStorage();
//             }
//         });
//     }
// })

function addDeleteEvent() {
    document.querySelectorAll(".editor i").forEach(icon => {
        icon.onclick = function () {
            this.parentElement.remove();
            updateStorage();
        };
    });

    document.querySelectorAll(".editor").forEach(editor => {
        editor.onkeyup = updateStorage;
    });
}


document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

showNotes();
localStorage.removeItem("notes");




