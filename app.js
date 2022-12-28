const list = document.querySelector(".list")

let todoList = [
  {
    id: 1,
    task: "Finish Frontend Simplified"
  },
  {
    id: 2,
    task: "Finish Interview Questions"
  },
  {
    id: 3,
    task: "Land $100k Job"
  },
]

function deleteTodo(id) {
  todoList = todoList.filter((todo) => {
    return todo.id !== id
  })
  renderTodos()
}

function renderTodos() {
  list.innerHTML = todoList.map(
    element =>
      `<li>
        ${element.task}
        <button onclick="deleteTodo(${element.id})" class="todo__delete">
        x
        </button>
      </li>`
  ).join("")
}

renderTodos()