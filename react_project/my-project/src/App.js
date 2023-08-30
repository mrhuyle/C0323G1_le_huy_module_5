import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ServicesList from "./components/ServicesList";
import CustomersList from "./components/CustomersList";
import ContractsList from "./components/ContractsList";
import AddService from "./components/AddService";
import AddContract from "./components/AddContract";
import AddCustomer from "./components/AddCustomer";
import EditContract from "./components/EditContract";

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
          <Route
            path="/dashboard/contracts"
            element={<ContractsList />}
          ></Route>
          <Route path="/dashboard/add_service" element={<AddService />}></Route>
          <Route path="/dashboard/add_contract" element={<AddContract />} />
          <Route path="/dashboard/add_customer" element={<AddCustomer />} />
          <Route path="/dashboard/edit/:id" element={<EditContract />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
