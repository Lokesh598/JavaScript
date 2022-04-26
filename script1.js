const heading = document.querySelector('h1');;

heading.innerText = 'Hello lokesh';

const allListItems = document.querySelectorAll('ul li')

for( let i = 0; i < allListItems.length; i++){
    const listItem = allListItems[i];
    listItem.innerText = 'Hello lokesh';
}
console.log(heading);
console.log(allListItems);
//counter application
const incrementBtn = document.querySelector('#increment');
let counter = 0;

function incrementCounter(){
    const counterEl = document.getElementById('counter');
    counter++;
    counterEl.innerText = counter;
}

incrementBtn.addEventListener('click', incrementCounter);

//todo logic
const addBtn = document.querySelector('#add');
const todoInput = document.getElementById('todo-list');

function addTask() {
    // create a new li element
    const li = document.createElement('li');
    const textNode = document.createTextNode('task' + );
    // append it to the ul
    todoInput.appendChild(li);
}

addBtn.addEventListener('click', addTask)