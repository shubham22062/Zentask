import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 max-w-md mx-auto">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-2">My Tasks</h1>
      <p className="text-gray-500 mb-6">
        Start by adding your first task below 👇
      </p>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task..."
          className="w-64 border border-gray-300 bg-gray-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <button
          type="submit"
          className="bg-gray-600 hover:bg-gray-400 text-white px-5 py-2.5 rounded-lg shadow-md transition"
        >
          ADD
        </button>
      </form>
    </div>
  );
}
