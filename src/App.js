import NavBar from "./navBar.js";
import Home from "./home.js";
import Bestsellers from "./bestsellers.js";
import About from "./about.js";

export default function App() {
  return (
    <div>
      <NavBar />
      <div className="main">
        <Home />
        <Bestsellers />
        <About />
      </div>
    </div>
  );
}
