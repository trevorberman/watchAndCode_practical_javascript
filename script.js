// Watch and Code Practical Javascript - Todo List Build and Learn

// V11 Requirements
// [x] Use forEach instead of a for loop in todoList.toggleAll
// [x] Use forEach instead of a for loop in view.displayTodos
// -------------------------------------

// Set global variable for DOM todo list
const todosUl = document.querySelector('ul')

let todoList = {
  // Store the todos in an array on an object
  todos: [],
  // Add todo objects to the todos array
  addTodo (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    })
  },
  // Change the todoText property
  changeTodo (position, todoText) {
    this.todos[position].todoText = todoText
  },
  // Toggle the completed property
  toggleCompleted (position) {
    let todo = this.todos[position]
    todo.completed = !todo.completed
  },
  // Toggle the completed property of all todos - see logic below
  toggleAll () {
    let totalTodos = this.todos.length
    let completedTodos = 0

    // Get number of completed todos
    this.todos.forEach(todo => {
      if (todo.completed === true) {
        completedTodos++
      }
    })

    this.todos.forEach(todo => {
      // If all todos are true, make them all false
      if (completedTodos === totalTodos) {
        todo.completed = false
      } else {
        // Otherwise, make all todos true
        todo.completed = true
      }
    })

    view.displayTodos()
  },
  // Delete todo objects
  deleteTodo (position) {
    this.todos.splice(position, 1)
  }
}

// Create methods for inline HTML click events - cleaner than writing as eventListener callbacks
let handlers = {
  addTodo () {
    // Get todo from #addTodoTextInput
    let addTodoTextInput = document.getElementById('addTodoTextInput')
    // Add todo to the list
    todoList.addTodo(addTodoTextInput.value)
    // Reset #addTodoTextInput
    addTodoTextInput.value = ''

    view.displayTodos()
  },
  changeTodo () {
    // Get position of array item from #changeTodoPositionInput
    let changeTodoPositionInput = document.getElementById(
      'changeTodoPositionInput'
    )
    // Get revised todo from #changeTodoTextInput
    let changeTodoTextInput = document.getElementById('changeTodoTextInput')
    // Change that todo
    todoList.changeTodo(
      changeTodoPositionInput.valueAsNumber,
      changeTodoTextInput.value
    )
    // Reset #changeTodoPositionInput and #changeTodoTextInput
    changeTodoPositionInput.value = ''
    changeTodoTextInput.value = ''

    view.displayTodos()
  },
  toggleCompleted () {
    // Get position of array item from #toggleCompletedPositionInput
    let toggleCompletedPositionInput = document.getElementById(
      'toggleCompletedPositionInput'
    )
    // Toggle that todo
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber)
    // Reset #toggleCompletedPositionInput
    toggleCompletedPositionInput.value = ''

    view.displayTodos()
  },
  deleteTodo (position) {
    // Delete that todo
    todoList.deleteTodo(position)

    view.displayTodos()
  }
}

// Create methods for what displays as a result of user interactions - cleaner than writing as eventListener callbacks
let view = {
  // Display todos as a list in the frontend UI
  displayTodos () {
    // Clear contents of UL prior to showing the current todos
    todosUl.innerHTML = ''

    // Set each list item's content
    todoList.todos.forEach((todo, position) => {
      // Create a list item for each todo
      let todoLi = document.createElement('li')

      // Add the todo's .completed status and .todoText
      if (todo.completed === true) {
        todoLi.textContent = '[x] ' + todo.todoText
      } else {
        todoLi.textContent = '[ ] ' + todo.todoText
      }

      // Set todo id= array index
      todoLi.id = position

      // Add the todo content to the DOM
      todoLi.appendChild(view.createDeleteButton())
      todosUl.appendChild(todoLi)
    })
  },
  // Create individual delete buttons (for each todo)
  createDeleteButton () {
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.className = 'deleteButton'
    return deleteButton
  },
  setupEventListeners () {
    // Give delete buttons access to their associated todo id=
    todosUl.addEventListener('click', event => {
      let elementClicked = event.target

      // Check if elementClicked is a delete buttton
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id))
      }
    })
  }
}

view.setupEventListeners()
