export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="flex justify-between items-center border-b py-2">
      <span
        onClick={() => toggleTodo(todo._id)}
        className={`cursor-pointer ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => deleteTodo(todo._id)}
        className="text-red-400 hover:underline text-sm"
      >
        Delete
      </button>
    </li>
  );
}
