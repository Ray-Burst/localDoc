let todoInput = document.querySelector('.js-todo-name');
let todoList = [];
let listItem = document.querySelector('.js-todo-list');
let date = document.querySelector('.js-dueDate');


function addTodo() {
  
  todoList.push({ name: todoInput.value, dueDate: date.value });
  
  todoInput.value = '';
  date.value = '';
  
  renderTodoList();

  
}



function renderTodoList() {
  
  let todoHTML = '';
  

  for (let i = 0; i < todoList.length; i++) {
    
    let todoObj = todoList[i];

    const { name, dueDate } = todoObj;

    let html = `
    <div>${name}</div> <div>${dueDate}</div>
      <button onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
      " class="deleteBtn">Delete</button>
    `;
    todoHTML += html;
   
  }
  listItem.innerHTML = todoHTML;
}


function keyHandel(event) {
  event.key == 'Enter' ? addTodo() : false;
}