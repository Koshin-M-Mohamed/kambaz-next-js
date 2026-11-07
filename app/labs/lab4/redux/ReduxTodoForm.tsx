export default function ReduxTodoForm({
  title,
  setTitle,
  editingId,
  saveTodo,
}: {
  title: string;
  setTitle: (title: string) => void;
  editingId: string | null;
  saveTodo: () => void;
}) {
  return (
    <div className="mb-3 flex flex-wrap gap-2">
      <input
        id="wd-redux-todo-title"
        className="rounded border border-neutral-300 px-3 py-1.5"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="button"
        id="wd-redux-add-todo"
        onClick={saveTodo}
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        {editingId ? "Update" : "Add"}
      </button>
    </div>
  );
}
