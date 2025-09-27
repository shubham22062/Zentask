import { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Home() {
  const [todos, setTodos] = useState([]);

  // Fetch todos from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Add a new todo
  const addTodo = async (text) => {
    try {
      const res = await axios.post("http://localhost:5000/api/todos", { text });
      setTodos([...todos, res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  // Toggle individual todo completion
  const toggleTodo = async (id) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/todos/${id}`);
      setTodos(todos.map((t) => (t._id === id ? res.data : t)));
    } catch (err) {
      console.error(err);
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      setTodos(todos.filter((t) => t._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Toggle all todos completion (frontend only)
  const toggleAll = (completed) => {
    setTodos(todos.map((t) => ({ ...t, completed })));
  };

  return (
    <div className="max-w-md mx-auto mt-6">
      <h1 className="text-2xl font-bold mb-4 text-center">TodoMaster ✅</h1>
      <TodoForm addTodo={addTodo} toggleAll={toggleAll} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
