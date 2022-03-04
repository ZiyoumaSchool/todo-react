import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "../../pages/TodoList";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/welcome" element={<TodoList />} />
    //     <Route path="/" element={<TodoList />} />
    //   </Routes>
    // </Router>
    <>
      <TodoList />
    </>
  );
}

export default App;
