// Watch and Code Practical Javascript - Todo List Build and Learn

// V8 Requirements
// [x] Add working UI for .addTodo
// [x] Add working UI for .changeTodo
// [x] Add working UI for .deleteTodo
// [] Add working UI for .toggleCompleted
// -------------------------------------

// Store the todos array on an object
let todoList = {
  todos: [],
  // Display todo information via object properties
  // Refactored for ES6 method definition shorthand
  displayTodos () {
    // Show if .todos is empty
    if (this.todos.length === 0) {
      console.log(
        "Your todos list is empty. Try todoList.addTodo('first todo')"
      )
    } else {
      // Show completed property status
      // Show todoText property content
      let todo = {}
      const incomplete = '[ ] '
      const complete = '[x] '
      console.log('My todos')
      for (let i = 0; i < this.todos.length; i++) {
        todo = this.todos[i]
        if (todo.completed === false) {
          console.log(incomplete + todo.todoText)
        } else {
          console.log(complete + todo.todoText)
        }
      }
    }
  },
  // Add todo objects
  addTodo (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    })
    this.displayTodos()
  },
  // Change the todoText property
  changeTodo (position, todoText) {
    this.todos[position].todoText = todoText
    this.displayTodos()
  },
  // Toggle the completed property
  toggleCompleted (position) {
    let todo = this.todos[position]
    todo.completed = !todo.completed
    this.displayTodos()
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
    this.displayTodos()
  },
  // Delete todo objects
  deleteTodo (position) {
    this.todos.splice(position, 1)
    this.displayTodos()
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
  }
}
