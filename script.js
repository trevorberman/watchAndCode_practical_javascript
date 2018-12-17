// Watch and Code Practical Javascript - Todo List Build and Learn

// V6 Requirements
// If all todos are false, make them all true
// If some todos are true, make them all true
// above x2 REALLY ==
// [x] .toggleAll If all todos are true, make them all false
// [x] .toggleAll Else make everything true
// AKA: If ANY todos are false, make them all true
// -------------------------------------

// Store the todos array on an object
let todoList = {
  todos: [],
  // Include a displayTodos method
  // Refactored for ES6 method definition shorthand
  displayTodos () {
    // [x] displayTodos shows if .todos is empty
    if (this.todos.length === 0) {
      console.log(
        "Your todos list is empty. Try todoList.addTodo('first todo')"
      )
    } else {
      // [x] displayTodos shows .completed status
      // [x] displayTodos shows .todoText
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
  // Include an addTodo method
  // todoList.addTodo adds objects
  addTodo (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    })
    this.displayTodos()
  },
  // Include a changeTodo method
  // todoList.changeTodo changes the todoText property
  changeTodo (arrayIndex, todoText) {
    this.todos[arrayIndex].todoText = todoText
    this.displayTodos()
  },
  // todoList.toggleCompleted changes the completed property
  toggleCompleted (arrayIndex) {
    let todo = this.todos[arrayIndex]
    todo.completed = !todo.completed
    this.displayTodos()
  },
  toggleAll () {
    let totalTodos = this.todos.length
    let completedTodos = 0

    // Get number of completed todos
    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++
      }
    }

    // [x] If all todos are true, make them all false
    if (completedTodos === totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false
      }
    } else {
      // [x] make all todos true
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true
      }
    }
    this.displayTodos()
  },
  // Include a deleteTodo method
  deleteTodo (arrayIndex) {
    this.todos.splice(arrayIndex, 1)
    this.displayTodos()
  }
}
