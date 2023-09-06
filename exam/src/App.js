import { Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./components/List";
import EditCloth from "./components/EditCloth";
import AddCloth from "./components/AddCloth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<List />}></Route>
      <Route path="/edit/:id" element={<EditCloth />}></Route>
      <Route path="/add" element={<AddCloth />}></Route>
    </Routes>
  );
}

export default App;
