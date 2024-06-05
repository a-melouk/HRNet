import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../Components/Nav";
import NewEmployee from "../pages/NewEmployee";
import Employees from "../pages/Employees";
import Error from "../pages/Error";
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/new-employee" element={<NewEmployee />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
