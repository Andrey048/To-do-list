export function renderTodo(todoText, todoId, checked, cbCheck, cbDelete) {
   const todoTmp = document.querySelector('#todo-template');
   const todoElement = todoTmp.content.querySelector('.item-todo').cloneNode(true);
   const todosContainer = document.querySelector('.todos-items');

   todoElement.dataset.id = todoId;
   todoElement.querySelector('.item-todo__text').textContent = todoText;

   if (checked) {
      todoElement.classList.add('item-todo--checked');
      todoElement.querySelector('.item-todo__checkbox').checked = true;
   }

   todosContainer.appendChild(todoElement);
}

export function removeTodo(todoElement) {
   todoElement.remove();
}

export function toggleTodoCheckedClass(todoElement) {
   todoElement.classList.toggle('item-todo--checked');
}