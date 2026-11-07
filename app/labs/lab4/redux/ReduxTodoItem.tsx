import { useDispatch } from "react-redux";
import { deleteTodo, type ReduxTodo } from "./todosReducer";

export default function ReduxTodoItem({
  todo,
  editTodo,
}: {
  todo: ReduxTodo;
  editTodo: (todo: ReduxTodo) => void;
}) {
  const dispatch = useDispatch();

  return (
    <li
      id={`wd-my-own-redux-todo-${todo.id}`}
      className="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1"
    >
      <span>{todo.title}</span>
      <span className="flex gap-2">
        <button
          type="button"
          onClick={() => editTodo(todo)}
          className="rounded bg-yellow-400 px-2 py-0.5 text-sm"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
        >
          Delete
        </button>
      </span>
    </li>
  );
}
