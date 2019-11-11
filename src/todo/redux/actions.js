import nanoid from "nanoid";
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO_STATUS = "UPDATE_TODO_STATUS";
export const UPDATE_FILTER = "UPDATE_FILTER";

export const addTodo = task => {
  return {
    type: ADD_TODO,
    todo: {
      id: nanoid(),
      task,
      complete: false
    }
  };
};

export const updateTodoStatus = (todo, complete) => {
  return {
    type: UPDATE_TODO_STATUS,
    todo,
    complete
  };
};

export const updateFilter = filter => {
  return {
    type: UPDATE_FILTER,
    filter
  };
};
