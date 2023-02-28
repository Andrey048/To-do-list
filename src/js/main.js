import view from './view.js';
import data from './data.js';

const oldToDos = data.getToDos();
oldToDos.forEach((toDo) => view.add(
  toDo.id,
  toDo.text,
  toDo.checked,
  data.toggleCheckToDo.bind(data),
  data.removeToDo.bind(data),
));

const addForm = document.querySelector('.todo-add-form');
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const addInput = document.querySelector('.todo-add-form__field');
  const addInputValue = addInput.value;
  data.addToDo(addInputValue, view.add.bind(view));
  addInput.value = '';
});
