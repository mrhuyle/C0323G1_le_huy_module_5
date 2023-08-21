import "./App.css";
import StudentInfoComponent from "./components/ListStudent";

function App() {
  const students = [
    { index: 1, name: "HuyLe", age: 35, address: "Da Nang" },
    { index: 2, name: "Louis", age: 35, address: "USA" },
  ];

  return (
    <div className="App">
      <h1>Student List</h1>
      <StudentInfoComponent students={students} />
    </div>
  );
}

export default App;
