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

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let icon = document.createElement("i");
    inputBox.className = "editor";
    inputBox.setAttribute("contenteditable", "true");
    icon.src = "fa-regular fa-pen-to-square";
    textArea.appendChild(inputBox).appendChild(icon);
});

textArea.addEventListener("click", function(e){
    if(e.target.tagName === "icon"){
        e.target.parentElement.remove();
    }
})