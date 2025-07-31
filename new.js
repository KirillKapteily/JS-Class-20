//1
let firstDiv = document.querySelector("#first");
let secondDiv = document.querySelector("#second");
let thirdDiv = document.querySelector("#third");

firstDiv.addEventListener("click", function (event) {
    const clicked = event.target;
    alert("1");
});

// secondDiv.addEventListener("click", () => {
//     console.log(2);
//         alert("2");
// });
// thirdDiv.addEventListener("click",() => {
//     console.log(3);
//         alert("3");
// });

//2
const userList = document.getElementById('userList');
const deleteButton = document.querySelector("#deleteButton");

userList.addEventListener("click", function (event) {
    const deleted = event.target.closest("li");
    deleted.style.display = "none";
});

//2
let addTask = document.querySelector("#addTask");
let newTask = document.querySelector("#newTask");
let taskList = document.querySelector("#taskList");


addTask.addEventListener("click", function (event) {
    event.preventDefault();
    const li = document.createElement("li");
    let text = newTask.value;
    li.innerHTML = `<input type="checkbox" class="check"> <p>${text}</p> <button class="delete">Delete</button>`;
    taskList.appendChild(li);

    newTask.value = ' ';
});

taskList.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("delete")) {
        let thiuse = event.target.closest("li");
        thiuse.remove();
    }
});

taskList.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("check")) {
        let thiuse = event.target.closest("li");
        thiuse.style.textDecoration = 'line-through';
    } 
});





//3
let colorPalet = document.querySelector("#colorPalet");
let selected = document.querySelector("#selected");


colorPalet.addEventListener("click", (event) => {
    const color = event.target.dataset.color;
    selected.textContent = `color: ${color}`;
    selected.style.color = color;

});

for (let i = 0; i < 100; i++) {
    const color = getRandomColor();
    const btn = document.createElement("button");
    btn.dataset.color = color;
    btn.style.backgroundColor = color;
    btn.style.border = 'none';
    colorPalet.appendChild(btn);
}

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}