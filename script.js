const textArea = document.querySelector(".txtArea");
const createBtn = document.querySelector(".btn");




function showNotes() {
    const savedNotes = localStorage.getItem("notes");

    if (savedNotes) {
        textArea.innerHTML = savedNotes;
        addDeleteEvent();
    }
}

function updateStorage() {
    localStorage.setItem("notes", textArea.innerHTML);
}

createBtn.addEventListener("click", () => {

    addNote();
});

function addNote(text = "") {
    let note = document.createElement("div");
    note.className = "editor";

    let inputBox = document.createElement("p");
    inputBox.className = "note-text";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.textContent = text;

    let icon = document.createElement("i");
    icon.className = "fa-solid fa-trash delete-icon";


    icon.addEventListener("click", () => {
        note.remove();
        updateStorage();
    });



    inputBox.addEventListener("input", updateStorage);


    inputBox.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            document.execCommand("insertLineBreak");
            event.preventDefault();
        }
    });

    note.appendChild(inputBox);
    note.appendChild(icon);
    textArea.appendChild(note);
    updateStorage();
}

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

function formatText(command) {
    document.execCommand(command, false, null);
}


document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});


showNotes();





