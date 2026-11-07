"use client";

import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [newTitle, setNewTitle] = useState("");

  const handleAdd = () => {
    const title = newTitle.trim();
    if (!title) return;
    addTodo(title);
    setNewTitle("");
  };

  return (
    <div id="wd-context-todo-list" className="mt-4 max-w-xl">
      <h3>React Context Todo List</h3>

      <div className="mb-3 flex gap-2">
        <input
          id="wd-context-todo-new-title"
          aria-label="New todo title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="min-w-0 flex-1 rounded border border-neutral-300 px-3 py-1.5"
        />
        <button
          type="button"
          id="wd-context-todo-add-click"
          onClick={handleAdd}
          className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="mb-2 flex gap-2">
            <input
              id={`wd-context-todo-title-${todo.id}`}
              aria-label={`Todo ${todo.id} title`}
              value={todo.title}
              onChange={(e) => updateTodo(todo.id, e.target.value)}
              className="min-w-0 flex-1 rounded border border-neutral-300 px-3 py-1.5"
            />
            <button
              type="button"
              id={`wd-context-todo-delete-${todo.id}-click`}
              onClick={() => deleteTodo(todo.id)}
              className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
