const view = {
  add(toDoId, toDoText, toDoChecked, checkCb, removeCb) {
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
      removeCb(toDoId);
      this.remove(toDoElement);
    });
    toDoCheckBtn.addEventListener('click', (e) => {
      checkCb(toDoId);
    });

    toDosContainer.appendChild(toDoElement);
  },
  remove(element) {
    element.remove();
  },
};

export default view;
