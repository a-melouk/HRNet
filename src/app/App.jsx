import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../Components/Nav";
import NewEmployee from "../pages/NewEmployee";
import Employees from "../pages/Employees";
import Error from "../pages/Error";
import "./App.css";
import { HRContext } from "./HRContext";
import { useState } from "react";

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
  const [sorting, setSorting] = useState({
    sortOrder: "no-sort",
    sortField: "",
  });
  return (
    <Router>
      <Nav />
      <HRContext.Provider value={{ formData, setFormData }}>
        <Routes>
          <Route path="/new-employee" element={<NewEmployee />} />
          <Route
            path="/employees"
            element={<Employees sorting={sorting} setSorting={setSorting} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </HRContext.Provider>
    </Router>
  );
}

export default App;
