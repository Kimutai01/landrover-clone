import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Build from "./components/Build";
import Configure from "./components/Configure";

function App() {
  return (
    <>
      <Navbar />
      <Details />
      <Build />
      <Configure />
    </>
  );
}

export default App;
