import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Loginpage";
import Signup from "./pages/signup";
import Navbar from "./components/Navbar";
import TodoFrom from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TodoItem />
    </>
  );
}

export default App;
