{/* <li>
  Finish Frontend Simplified
  <button onclick="deleteTask()" class="todo__delete">
    x
  </button>
</li> */}

const list = document.querySelector(".list")

const todoList = [
  {
    task: "Finish Frontend Simplified"
  },
  {
    task: "Finish Interview Questions"
  },
  {
    task: "Land $100k Job"
  },
]

list.innerHTML = todoList.map(
  element =>
    `<li>
      ${element.task}
      <button onclick="deleteTask()" class="todo__delete">
        x
      </button>
    </li>`
).join("")