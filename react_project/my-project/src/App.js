import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
