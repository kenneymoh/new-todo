const btnTheme = document.querySelector('[data-btn-theme]');
const headerElement = document.querySelector('[data-header]')
const todoTextInput = document.querySelector('[data-todo-input]')
const todoContainerElement = document.querySelector('[data-todo-container]')
const taskTemplate = document.getElementById('task-template')
const tasksLeftElement = document.querySelector('[data-tasks-left]')
const btnClearCompleted = document.querySelector('[data-btn-completed]')
const btnFilterInputs = document.querySelectorAll('[data-radio-input]')
const taskCollection = todoContainerElement.children
let tasksLeft = 0
