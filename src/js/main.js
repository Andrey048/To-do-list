import view from './view.js';
import data from './data.js';

store.clearAll();

const addForm = document.querySelector('.todo-add-form');
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const addInput = document.querySelector('.todo-add-form__field');
  const addInputValue = addInput.value;
  data.addToDo(addInputValue, view.add.bind(view));
  addInput.value = '';
});
