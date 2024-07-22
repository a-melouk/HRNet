import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Nav from "../Components/Nav";
import NewEmployee from "../pages/NewEmployee";
import Employees from "../pages/Employees";
import Error from "../pages/Error";
import "./App.css";
import { HRContext } from "./HRContext";
import { useState } from "react";
import records from "../data/employees.json";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: null,
    emailAddress: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
    startDate: null,
  });

  const [employeesData, setEmployeesData] = useState(Array.from(records));

  return (
    <Router>
      <Nav />
      <HRContext.Provider
        value={{ formData, setFormData, employeesData, setEmployeesData }}
      >
        <Routes>
          <Route path="/" element={<Navigate replace to="/new-employee" />} />
          <Route path="/new-employee" element={<NewEmployee />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HRContext.Provider>
    </Router>
  );
}

export default App;
