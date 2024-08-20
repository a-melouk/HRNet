import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import Nav from "../Components/Nav";
import "./App.css";
import { HRContext } from "./HRContext";
import records from "../data/employees-copy.json";

// Lazy load components
const NewEmployee = lazy(() => import("../pages/NewEmployee"));
const Employees = lazy(() => import("../pages/Employees"));
const Error = lazy(() => import("../pages/Error"));

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
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Navigate replace to="/new-employee" />} />
            <Route path="/new-employee" element={<NewEmployee />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </HRContext.Provider>
    </Router>
  );
}

export default App;
