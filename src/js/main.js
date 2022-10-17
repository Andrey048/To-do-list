import {renderTodo} from './todo-item.js';
import {data} from './data.js';


const savedTodosArray = data.getTodos();

if (savedTodosArray) {
   savedTodosArray.forEach(i => {
      showTodo(i.text, i.id, i.checked);
   })
}


const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', onClickAddBtn);

function onClickAddBtn(e) {
   e.preventDefault();

   const addField = document.querySelector('#add-field');

   const todoText = addField.value;

   data.addTodo(todoText)
      .then((todoId) => {
         showTodo(todoText, todoId, false);
      })
}
function showTodo(todoText, todoId, todoChecked) {
   renderTodo(todoText, todoId, todoChecked, id => data.changeCheckedTodo(id), id => data.deleteTodo(id));
}