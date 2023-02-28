const view = {
  add(toDoId, toDoText, toDoChecked) {
    const toDoTemplate = document.querySelector('#todo-template').content;
    const toDoElement = toDoTemplate.querySelector('.item-todo').cloneNode(true);
    const toDoRemoveBtn = toDoElement.querySelector('.item-todo__delete');
    const toDoCheckBtn = toDoElement.querySelector('.item-todo__checkbox');
    const toDosContainer = document.querySelector('.todos-items');

    toDoElement.dataset.id = toDoId;
    toDoElement.querySelector('.item-todo__text').textContent = toDoText;
    if (toDoChecked) toDoElement.querySelector('.item-todo__checkbox').checked = true;

    toDoRemoveBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.remove(toDoElement);
    });
    toDoCheckBtn.addEventListener('checked', (e) => {
      e.preventDefault();
      this.toggleCheck(toDoElement);
    });

    toDosContainer.appendChild(toDoElement);
  },
  remove(element) {
    element.remove();
  },
  toggleCheck(element) {
    const checkboxElement = element.querySelector('.item-todo__checkbox');
    if (checkboxElement.checked) {
      checkboxElement.checked = false;
    } else {
      checkboxElement.checked = true;
    }
  },
};

export default view;
