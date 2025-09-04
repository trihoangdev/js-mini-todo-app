let tasks = [
  // {
  //   title: "Rua chen",
  //   completed: true,
  // },
  // {
  //   title: "Quet nha",
  //   completed: false,
  // },
  // {
  //   title: "Lau nha",
  //   completed: true,
  // },
];

// Get elements
const taskList = document.querySelector("#task-list");
const todoInput = document.querySelector("#todo-input");
const todoForm = document.querySelector("#todo-form");

let render = (tasks) => {
  let html = tasks
    .map(
      (task) => `
  <li class="task-item ${task.completed ? "completed" : "uncompleted"}">
      <span class="task-title">${task.title}</span>
      <div class="task-action">
          <button class="task-btn edit">Edit</button>
          <button class="task-btn done">${
            task.completed ? "Mark as undone" : "Mark as done"
          }</button>
          <button class="task-btn delete">Delete</button>
      </div>
  </li>
  </ul>
  `
    )
    .join("");

  taskList.innerHTML = html;
};

todoForm.onsubmit = function (e) {
  e.preventDefault();
  let value = todoInput.value.trim();
  if (!value) {
    alert("Please do something...");
    return;
  }
  tasks.push({ title: value, completed: false });
  todoInput.value = "";
  render(tasks);
};
