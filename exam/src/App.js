import { Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./components/List";
import EditCloth from "./components/EditCloth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<List />}></Route>
      <Route path="/edit/:id" element={<EditCloth />}></Route>
    </Routes>
  );
}

export default App;
