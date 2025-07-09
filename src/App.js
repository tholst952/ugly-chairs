import NavBar from "./navBar.js";
import Home from "./home.jsx";
import BestsellersV2 from "./bestsellersV2.jsx";
import AboutOurChairs from "./about.jsx";
import CurrentStock from "./currentStockV2.jsx";
import Testimonial from "./testimonial.js";
import Footer from "./footer.js";

export default function App() {
  return (
    <div>
      <NavBar />
      <div className="main">
        <Home />
        <BestsellersV2 />
        <AboutOurChairs />
        <CurrentStock />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}
