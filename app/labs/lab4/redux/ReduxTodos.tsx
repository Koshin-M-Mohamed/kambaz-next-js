import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, type ReduxTodo } from "./todosReducer";
import type { RootState } from "./store";
import ReduxTodoForm from "./ReduxTodoForm";
import ReduxTodoItem from "./ReduxTodoItem";

export default function ReduxTodos() {
  const [title, setTitle] = useState("Learn Mongo");
  const [editingId, setEditingId] =
    useState<string | null>(null);

  const { todos } = useSelector(
    (state: RootState) => state.todosReducer
  );

  const dispatch = useDispatch();

  const saveTodo = () => {
    if (editingId) {
      dispatch(updateTodo({ id: editingId, title }));
      setEditingId(null);
    } else {
      dispatch(addTodo(title));
    }

    setTitle("Learn Mongo");
  };

  const editTodo = (todo: ReduxTodo) => {
    setTitle(todo.title);
    setEditingId(todo.id);
  };

  return (
    <div id="wd-redux-todos">
      <h3>Redux Todo List</h3>

      <ReduxTodoForm
        title={title}
        setTitle={setTitle}
        editingId={editingId}
        saveTodo={saveTodo}
      />

      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <ReduxTodoItem
            key={todo.id}
            todo={todo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}
