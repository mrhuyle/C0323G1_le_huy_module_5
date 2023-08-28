import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ServicesList from "./components/ServicesList";
import CustomersList from "./components/CustomersList";
import ContactsList from "./components/ContactsList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/services" element={<ServicesList />}></Route>
          <Route
            path="/dashboard/customers"
            element={<CustomersList />}
          ></Route>
          <Route path="/dashboard/contacts" element={<ContactsList />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
