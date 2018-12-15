// Watch and Code Practical Javascript - Todo List Build and Learn

// V1 Requirements
// -------------------------------------
// [x] It should have a place to store todos
// let todos = ['item 1', 'item 2', 'item 3']

// [x] It should have a way to display todos
// console.log('My todos: ', todos)

// [x] It should have a way to add new todos
// todos.push('item 4', 'item 5')

// [x] It should have a way to change a todo
// todos[0] = 'item 1 updated'

// [x] It should have a way to delete a todo
// todos.splice(0, 1)

// V2 Requirements
// -------------------------------------
// [x] It should have a function to display todos
// Refactor this function definiton with an ES6 arrow function
/*
function displayTodos () {
  console.log('My todos', todos)
}
*/
// const displayTodos = () => console.log('My todos:', todos)
// displayTodos()

// [x] It should have a function to add todos
/*
const addTodo = todo => {
  todos.push(todo)
  // See what's happened after adding a new todo
  displayTodos()
}
*/
// addTodo()

// [x] It should have a function to change todos
// Arrow functions SHOULD NOT return assignments
// const changeTodo = (arrayIndex, newValue) => todos[arrayIndex] = 'newValue'
/*
function changeTodo (arrayIndex, newValue) {
  todos[arrayIndex] = newValue
  displayTodos()
}
*/

// [] It should have a function to delete todos
/*
const deleteTodos = arrayIndex => {
  todos.splice(arrayIndex, 1)
  displayTodos()
}
*/

// V3 Requirements
// -------------------------------------
// [x] Store the todos array on an object
let todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  // [x] Include a displayTodos method
  /*
  displayTodos: function () {
    console.log('My todos', this.todos)
  }
  */
  // Refactor for ES6 method definition shorthand
  displayTodos () {
    console.log('My todos', this.todos)
  },
  // [x] Include an addTodo method
  addTodo (todo) {
    this.todos.push(todo)
    this.displayTodos()
  },
  // [x] Include a changeTodo method
  changeTodo (arrayIndex, newValue) {
    this.todos[arrayIndex] = newValue
    this.displayTodos()
  },
  // [x] Include a deleteTodo method
  deleteTodo (arrayIndex) {
    this.todos.splice(arrayIndex, 1)
    this.displayTodos()
  }
}
