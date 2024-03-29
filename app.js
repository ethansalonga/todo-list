const input = document.querySelector(".input__text")
const list = document.querySelector(".list")

let todoList = []
let counter = 0

function addTodo() {
  if (!input.value) {
    return
  }

  todoList.push({
    id: counter++,
    task: input.value
  })

  renderTodos()
  input.value = ""
}

function deleteTodo(id) {
  todoList = todoList.filter(task => task.id !== id)
  renderTodos()
}

function renderTodos() {
  list.innerHTML = todoList.map(element =>
    `<li>
        ${element.task}
        <button onclick="deleteTodo(${element.id})" class="todo__delete">
        x
        </button>
    </li>`
  ).join("")
}
