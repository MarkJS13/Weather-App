const todos = [
    {text: 'play mariokart', author: 'shaun'},
    {text: 'buy some milk', author: 'luigi'},
    {text: 'buy some bread', author: 'mario'}
]

//console.log(JSON.stringify(todos))
console.log(todos)

localStorage.setItem('todos', JSON.stringify(todos))
let todo = localStorage.getItem('todos');

console.log(JSON.parse(todo))