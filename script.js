// Watch and Code Practical Javascript - Todo List Build and Learn

// V4 Requirements
// -------------------------------------
// Store the todos array on an object
let todoList = {
  todos: [],
  // Include a displayTodos method
  // Refactored for ES6 method definition shorthand
  displayTodos () {
    console.log('My todos', this.todos)
  },
  // Include an addTodo method
  // [x] todoList.addTodo adds objects
  addTodo (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    })
    this.displayTodos()
  },
  // Include a changeTodo method
  // [x] todoList.changeTodo changes the todoText property
  changeTodo (arrayIndex, todoText) {
    this.todos[arrayIndex].todoText = todoText
    this.displayTodos()
  },
  // [x] todoList.toggleCompleted changes the completed property
  toggleCompleted (arrayIndex) {
    let todo = this.todos[arrayIndex]
    todo.completed = !todo.completed
    this.displayTodos()
  },
  // Include a deleteTodo method
  deleteTodo (arrayIndex) {
    this.todos.splice(arrayIndex, 1)
    this.displayTodos()
  }
}
