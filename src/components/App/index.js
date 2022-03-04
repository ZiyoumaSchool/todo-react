import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "../../pages/TodoList";
import Signup from "../Signup";
import Signin from "../Signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/welcome" element={<TodoList />} />
        <Route path="/" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
