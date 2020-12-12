const refresh = document.querySelector(".refresh");
const taskCount = document.getElementById("todoCount");
const form = document.querySelector(".addTodo");
const addTodoButton = document.querySelector(".icon_add img");
const listView = document.querySelector(".todoList");
const textInput = form.querySelector("input");

let LIST, id;

if (localStorage.getItem("list")) {
    LIST = JSON.parse(localStorage.getItem("list"));
    id = LIST[LIST.length - 1].id + 1;
} else {
    LIST = [];
    id = 0;
}

function countTasks(){
    let count = LIST.filter(item => (item.done == false && item.trash == false)).length;
    taskCount.textContent = count;

}

function addTodo(e) {
    e.preventDefault();
    let value = textInput.value;
    textInput.value = "";
    if (!value) return;
    let todo = {
        id: id,
        text: value,
        done: false,
        trash: false,
    };
    id++;
    LIST.push(todo);
    localStorage.setItem("list", JSON.stringify(LIST));
    renderTodo();
}
function renderTodo() {
    const html = LIST.map((item) => {
        return `
        <li data-jobId="${item.id}" class="${item.trash ? 'deleted' : ''}">
            <button id="complete" 
                    class="${item.done ? "done" : "undone"}"></button>
            <p>${item.text}</p>
            <button id="trash" class="trash"></button>
        </li>
        `;
    }).join("");
    listView.innerHTML = html;
    countTasks();
}

function completed(target, parentId) {
    target.classList.toggle("done");
    let index = LIST.findIndex(item => item.id == parentId);
    LIST[index].done = !LIST[index].done;
    localStorage.setItem('list', JSON.stringify(LIST));
    countTasks();
}
function trashItem(target, parentId){
    target.parentNode.classList.add('deleted');
    let index = LIST.findIndex(item => item.id == parentId);
    LIST[index].trash = true;
    localStorage.setItem('list', JSON.stringify(LIST));
    countTasks();
}

renderTodo();

// -------------- adding todo
form.addEventListener("submit", addTodo);
addTodoButton.addEventListener("click", addTodo);

listView.addEventListener("click", (e) => {
    let target = e.target;
    let targetId = e.target.id;
    let parentId = e.target.parentNode.dataset.jobid;
    if (targetId == "complete") {
        completed(target, parentId);
    } else if (targetId == "trash") {
        trashItem(target, parentId);
    }
});

// -------------- refresh
refresh.addEventListener("click", () => {
    localStorage.removeItem("list");
    location.reload();
});
