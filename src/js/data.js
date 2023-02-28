const STORE_KEY = 'todos';

const data = {
  setToDos(array) {
    return store.set(STORE_KEY, { arrayToDos: array });
  },
  getToDos() {
    const result = store.get(STORE_KEY);
    if (result) return result.arrayToDos;
    return [];
  },
  getNewId() {
    const toDos = this.getToDos();
    if (toDos.length > 0) {
      const lastToDo = toDos[toDos.length - 1];
      return lastToDo.id + 1;
    }
    return 1;
  },
  addToDo(todoText, cb) {
    const toDoId = this.getNewId();
    const toDos = this.getToDos();
    toDos.push({
      id: toDoId,
      text: todoText,
      checked: false,
    });
    this.setToDos(toDos);
    cb(toDoId, todoText, false, this.toggleCheckToDo.bind(this), this.removeToDo.bind(this));
  },
  removeToDo(toDoId) {
    const toDos = this.getToDos();
    this.setToDos(toDos.filter((toDo) => toDo.id !== toDoId));
  },
  toggleCheckToDo(toDoId) {
    const toDos = this.getToDos();
    this.setToDos(toDos.map((toDo) => {
      if (toDo.id === toDoId) {
        if (toDo.checked) return { ...toDo, checked: false };
        return { ...toDo, checked: true };
      }
      return toDo;
    }));
  },
};

export default data;
