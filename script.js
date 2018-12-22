// Watch and Code Practical Javascript - Todo List Build and Learn

// V7 Requirements
// [x] Add a 'display todos' button to the web interface.
// [x] Add a 'toggle all' button to the web interface.
// [x] Clicking 'display todos' calls todoList.displayTodos
// [x] Clicking 'toggle all' calls todoList.toggleAll
// -------------------------------------

// Store the todos array on an object
let todoList = {
  todos: [],
  // displays todo information via object properties
  // Refactored for ES6 method definition shorthand
  displayTodos () {
    // shows if .todos is empty
    if (this.todos.length === 0) {
      console.log(
        "Your todos list is empty. Try todoList.addTodo('first todo')"
      )
    } else {
      // shows completed property status
      // shows todoText property content
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
  // adds todo objects
  addTodo (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    })
    this.displayTodos()
  },
  // changes the todoText property
  changeTodo (arrayIndex, todoText) {
    this.todos[arrayIndex].todoText = todoText
    this.displayTodos()
  },
  // toggles the completed property
  toggleCompleted (arrayIndex) {
    let todo = this.todos[arrayIndex]
    todo.completed = !todo.completed
    this.displayTodos()
  },
  // toggles the completed property of all todos - see logic below
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
  // deletes todo objects
  deleteTodo (arrayIndex) {
    this.todos.splice(arrayIndex, 1)
    this.displayTodos()
  }
}

// Get access to 'display todos' button
const displayTodosButton = document.getElementById('displayTodosButton')

// Call the displayTodos method when 'display todos' is clicked
/*
displayTodosButton.addEventListener('click', function () {
  todoList.displayTodos()
})
*/
// Refactored for ES6 arrow function expression
displayTodosButton.addEventListener('click', () => todoList.displayTodos())

// Get access to 'toggle todos' button
const toggleAllButton = document.getElementById('toggleAllButton')

// Call the toggleAll method when 'togggle all' is clicked
toggleAllButton.addEventListener('click', () => todoList.toggleAll())
