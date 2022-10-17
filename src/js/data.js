const LOCAL_STORAGE_KEY = 'todos';

export const data = {
   addTodo: async function(todoText) {
      const currentTodosArray = store.get(LOCAL_STORAGE_KEY);

      const todoObject = {
         id: createTodoId(),
         text: todoText,
         checked: false,
      }

      if (currentTodosArray.length > 0) {
         currentTodosArray.push(todoObject);

         store.set(LOCAL_STORAGE_KEY, currentTodosArray);
      } else {
         store.set(LOCAL_STORAGE_KEY, [todoObject]);
      }

      function createTodoId() {
         if (currentTodosArray.length > 0) {
            const lastTodoId = currentTodosArray[currentTodosArray.length - 1].id;

            return lastTodoId + 1;
         } else {
            return 1;
         }      
      }

      return todoObject.id;
   },
   getTodos: function() {
      return store.get(LOCAL_STORAGE_KEY);
   },
   changeCheckedTodo: function(todoId) {
      const currentTodosArray = store.get(LOCAL_STORAGE_KEY);

      currentTodosArray.map(i => {
         if (i.id === todoId) {
            i.checked = !i.checked;

            return i;
         }
      })

      store.set(LOCAL_STORAGE_KEY, currentTodosArray);
      console.log(currentTodosArray);
   },
   deleteTodo: function(todoId) {
      const currentTodosArray = store.get(LOCAL_STORAGE_KEY);

      const newCurrentTodosArray = currentTodosArray.filter(i => i.id !== todoId);

      store.set(LOCAL_STORAGE_KEY, newCurrentTodosArray);
   }
}
