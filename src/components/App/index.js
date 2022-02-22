import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "../../pages/TodoList";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" component={Landing} /> */}
        <Route path="/" element={<TodoList />} />
        {/* <Route path="/forgetpassword" component={ForgetPassword} />
          <Route component={ErrorPage} /> */}
      </Routes>
    </Router>
  );
}

export default App;
