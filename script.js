let tasks = [
  {
    title: "Rua chen",
    completed: true,
  },
  {
    title: "Quet nha",
    completed: false,
  },
  {
    title: "Lau nha",
    completed: true,
  },
];

const taskList = document.querySelector("#task-list");

let html = tasks
  .map(
    (task) => `
  <li class="task-item ${task.completed ? "uncompleted" : "completed"}">
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
