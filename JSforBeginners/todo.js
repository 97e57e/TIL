const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintTodo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "❌";

    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;

    paintTodo(currentValue);
    toDoInput.value = "";
}

function loatToDos() {
    const loadedTodos = localStorage.getItem(TODOS_LS);
    if (loadedTodos !== null){
        console.log(loadedTodos);
        const parsedToDos = JSON.parse(loadedTodos);
        parsedToDos.forEach(function(toDo) {
            console.log(toDo.text);
            paintTodo(toDo.text);
        });
    }
 }

function init(){
    loatToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();