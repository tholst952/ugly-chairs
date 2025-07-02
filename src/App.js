import { useState } from "react";
import NavBar from "./navBar.jsx";
import Home from "./home.jsx";
import Bestsellers from "./bestsellers.js";
import BestsellersV2 from "./bestsellersV2.jsx";
import About from "./about.jsx";
import CurrentStock from "./stock.jsx";
import Testimonial from "./testimonial.jsx";
import Footer from "./footer.js";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div>
      <NavBar />
      <div className="main">
        <Home />
        {/* <Bestsellers /> */}
        <BestsellersV2 />
        <About />
        <CurrentStock />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}
