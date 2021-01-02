const addToDo = document.querySelector('.todo__submit');
const input = document.querySelector('.todo__input');
const toDoItems = document.querySelector('.todo__items');
const checked = document.querySelector('.todo__check');
const todos = document.querySelectorAll('.todo__item');
const close = document.querySelector('.todo__close');


// const checkedMarkup = () =>
//     `<span class="todo__checked"><i class="fas fa-check" ></i></span>`;

// addToDo.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const markup = 
//     `
//     <li class="todo__item">
//         <div class="todo__check hidden"><i class="fas fa-check"></i></div>
//         <p class="todo__p">${input.value}</p>
//         <span class="todo__close"><i class="fas fa-window-close"></i></span>
//     </li>
// `;  
//     if(input.value === '') return alert('Type something')
//     toDoItems.insertAdjacentHTML('afterbegin', markup);
//     console.log(todoArray);
//     input.textContent = '';
// });


// // event delegation
// toDoItems.addEventListener('click', e => {
//         console.log(e.target.textContent);
//         // if(e.target.classList === 'todo__check' && e.target.classList === 'todo__p') {
//            document.querySelector('.todo__check').classList.toggle('hidden')
//            document.querySelector('.todo__p').classList.toggle('checked')
//             e.target.style.color = 'red';
        

// });

// toDoItems.addEventListener('click', function(e) {
//     if(e.target.classList === 'todo__close') {
//         console.log('close');
//         e.target.closest('.todo__close').remove();
//     }
// })

class Todo {
    id = (Date.now() + ''.slice(-10));
    inputText = input.value;
    
}

class App {
    #todos = [];
    #completeTodos = [];
    constructor() {
        addToDo.addEventListener('submit', this._newTodo.bind(this));
        toDoItems.addEventListener('click', this._completeTodo.bind(this));
        toDoItems.addEventListener('click', this._removeTodo)
    };

    _completeTodo(e) {
        const todoEl = e.target.closest('.todo__item');
        if(!todoEl) return;

        const c = todoEl.childNodes;
        console.log(c);
        const checked = c[1];
        const completed = c[3];
        checked.classList.toggle('hidden');
        completed.classList.toggle('checked');

        const todo = this.#todos.find(todo => todo.id === todoEl.dataset.id)
        this.#todos.pop(todo);
        // this.#completeTodos.push(todo);


        console.log(this.#todos);
        console.log(this.#completeTodos);
        console.log(todoEl);
        console.log(todo);
    };

    _removeTodo(e) {
        const closeEl = e.target;
        if(closeEl.tagName === 'I') {
            closeEl.closest('.todo__item').remove()
        }
        // console.log(closeEl.classList);

        if(!closeEl) return;
        console.log(closeEl);
    }

    _newTodo(e) {
        e.preventDefault();
        const todo = new Todo();

        if(input.value === '') return alert('Type something')
        
        this._renderTodo(todo);
        
        input.value = '';

        this.#todos.push(todo);   
        console.log(this.#todos);

    };

    _renderTodo(todo) {
        const markup = 
        `
        <li class="todo__item data-id=${todo.id}">
            <div class="todo__check hidden"><i class="fas fa-check"></i></div>
            <p class="todo__p">${todo.inputText}</p>
            <span class="todo__close"><i class="fas fa-window-close"></i></span>
        </li>
        `;  
        toDoItems.insertAdjacentHTML('afterbegin', markup);
    };
}


const app = new App;