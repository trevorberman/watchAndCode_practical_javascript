// Watch and Code Practical Javascript - Todo List Build and Learn

// V10 Requirements
// [x] Add a function for creating delete buttons
// [] Add a delete button for each todo
// [] Add todo array position to each <li> as an id=
// [] Give delete buttons access to their associated todo id=
// [] Integrate the above so deleting a todo updates todoList.todos and the DOM
// -------------------------------------

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
    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++
      }
    }

    // If all todos are true, make them all false
    if (completedTodos === totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false
      }
    } else {
      // Otherwise, make all todos true
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true
      }
    }

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
  deleteTodo () {
    // Get position of array item from #deleteTodoPositionInput
    let deleteTodoPositionInput = document.getElementById(
      'deleteTodoPositionInput'
    )
    // Delete that todo
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber)
    // Reset #deleteTodoPositionInput
    deleteTodoPositionInput.value = ''

    view.displayTodos()
  }
}

// Create methods for what displays as a result of user interactions - cleaner than writing as eventListener callbacks
let view = {
  // Display todos as a list in the frontend UI
  displayTodos () {
    const todosUl = document.querySelector('ul')
    // Clear contents of UL prior to showing the current todos
    todosUl.innerHTML = ''

    // Set each list item's content to the todo's .completed and .todoText
    for (let i = 0; i < todoList.todos.length; i++) {
      // Create a list item for each todo
      let todoLi = document.createElement('li')
      let todo = todoList.todos[i]

      if (todo.completed === true) {
        todoLi.textContent = '[x] ' + todo.todoText
      } else {
        todoLi.textContent = '[ ] ' + todo.todoText
      }

      todosUl.appendChild(todoLi)
    }
  },
  // Create individual delete buttons (for each todo)
  createDeleteButton () {
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.className = 'deleteButton'
    return deleteButton
  }
}
