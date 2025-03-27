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
  

  todoList.forEach((todoObj)=>{

    const { name, dueDate } = todoObj;

    let html = `
    <div>${name}</div> <div>${dueDate}</div>
      <button class="deleteBtn js-deleteBtn">Delete</button>
    `;
    todoHTML += html;
   
  })
  listItem.innerHTML = todoHTML;
  //if a html doesn't exist put the eventlistener inside the function that will make it enable to exist
  //if you need index use forEach to get the class array use first variable and secound variable to get index
  document.querySelectorAll('.js-deleteBtn').forEach((del, index) => {
    del.addEventListener('click', () => {
      todoList.splice(index, 1);
          renderTodoList();
    })
  })
  
}


function keyHandel(event) {
  event.key == 'Enter' ? addTodo() : false;
}

document.querySelector('.js-addBtn').addEventListener('click', () => addTodo());


// let i =JSON.parse(localStorage.getItem('i')) ;
// let interval;
// function titleInterval() {
  
//   interval = setInterval(() => {
//     //  changeTitle();
//     document.title =  `ToDo List`;
//     setTimeout(() => {
//       if (i <= 0) {
//         document.title = `ToDo List`;
//       } else {
//         document.title = `(${i}) new massege`;
//       }
      
//     }, 3000)
//   }, 5000)
  
//   localStorage.setItem('i',JSON.stringify(i));
// }
 
// titleInterval();
// //  document.title = `ToDo List`


// function addmsg() {
//   i++;
//   titleInterval();
  
// }

// function delmsg() {
//   i--;
//   i < 0 ? i++ : false;
//  titleInterval();
  
// }
