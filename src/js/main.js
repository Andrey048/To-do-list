import {renderTodo, removeTodo, toggleTodoCheckedClass} from './todo-item.js';
import {data} from './data.js';



const savedTodosArray = data.getTodos();

if (savedTodosArray) {
   savedTodosArray.forEach(i => {
      renderTodo(i.text, i.id, i.checked);
   })
}



const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', onClickAddBtn);

function onClickAddBtn(e) {
   e.preventDefault();

   const addField = document.querySelector('#add-field');

   const todoText = addField.value;
   addField.value = '';

   data.addTodo(todoText)
      .then((todoId) => {
         renderTodo(todoText, todoId, false);
      })
}



const todosWrapper = document.querySelector('#todos-wrapper');

todosWrapper.addEventListener('click', onClickTodo);

function onClickTodo(e) {
   const element = e.target;

   if (element.matches('.item-todo__delete')) {
      const todoElement = element.closest('.item-todo');
      const todoElementId = Number(todoElement.dataset.id);

      data.deleteTodo(todoElementId);

      removeTodo(todoElement);
   } else if (element.matches('.item-todo__checkbox')) {
      const todoElement = element.closest('.item-todo');
      const todoElementId = Number(todoElement.dataset.id);

      data.changeCheckedTodo(todoElementId);

      toggleTodoCheckedClass(todoElement);
   }
}