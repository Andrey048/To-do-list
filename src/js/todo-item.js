export function renderTodo(todoText, todoId, checked, cbCheck, cbDelete) {
   const todoTmp = document.querySelector('#todo-template');
   const todoElement = todoTmp.content.querySelector('.item-todo').cloneNode(true);
   const todosContainer = document.querySelector('.todos-items');

   todoElement.dataset.id = todoId;
   todoElement.querySelector('.item-todo__text').textContent = todoText;
   todoElement.querySelector('.item-todo__checkbox').addEventListener('click', onClickCheckBox);
   todoElement.querySelector('.item-todo__delete').addEventListener('click', onClickDelete);

   if (checked) {
      todoElement.classList.add('item-todo--checked');
      todoElement.querySelector('.item-todo__checkbox').checked = true;
   }

   todosContainer.appendChild(todoElement);

   function onClickCheckBox() {
      const TODO_CHECKED_CLASS = 'item-todo--checked';

      cbCheck(todoId);

      todoElement.classList.toggle(TODO_CHECKED_CLASS);
   }
   function onClickDelete() {
      todoElement.remove();

      cbDelete(todoId);
   }
}