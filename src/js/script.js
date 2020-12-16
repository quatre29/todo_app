const addToDo = document.querySelector('.todo__submit');
const input = document.querySelector('.todo__input');
const toDoItems = document.querySelector('.todo__items');
const deleteItem = document.querySelector('.todo__close');
const checked = document.querySelector('.todo__checked');


const todos = [];

addToDo.addEventListener('submit', function(e) {
    e.preventDefault();
    const markup = 
    `
    <li class="todo__item">
        <span class="todo__checked hidden"><i class="fas fa-check" ></i></span>
        <p  class="todo__p">${input.value}</p>
        <span class="todo__close"><i class="fas fa-window-close"></i></span>
    </li>
`;  
    if(input.value === '') return alert('Type something')
    toDoItems.insertAdjacentHTML('afterbegin', markup);
    todos.push(markup)
    console.log(todos);
});

deleteItem.addEventListener('click', function() {

})