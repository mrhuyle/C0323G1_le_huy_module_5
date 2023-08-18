import "./App.css";
import Header from "./components/header";
import NavBar from "./components/nav_bar";
import Footer from "./components/footer";
import BookingsList from "./components/room";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <BookingsList />
      <Footer />
    </div>
  );
}

export default App;
