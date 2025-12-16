import { useState } from "react";
import NavBar from "./navBar.js";
import Home from "./home.jsx";
import CrateModal from "./crateModal.jsx";
import { getRandomCrateMessage } from "./crate-messages.js";
import BestsellersV2 from "./bestsellersV2.jsx";
import AboutOurChairs from "./about.jsx";
import CurrentStock from "./currentStockV4.jsx";
import Testimonial from "./testimonial.js";
import Footer from "./footer.js";

export default function App() {
  const [crate, setCrate] = useState([]);
  const [isCrateOpen, setIsCrateOpen] = useState(false);

  function addToCrate(chair) {
    setCrate((prev) => {
      const alreadyInCrate = prev.some((item) => item.id === chair.id);

      if (alreadyInCrate) return prev;

      return [
        ...prev,
        {
          ...chair,
          message: getRandomCrateMessage(),
        },
      ];
    });
  }

  function clearCrate() {
    setCrate([]);
    setIsCrateOpen(false);
  }

  return (
    <div className="page-container">
      <NavBar
        onCrateNavClick={() => setIsCrateOpen(true)}
        crateCount={crate.length}
        onCrateClose={clearCrate}
      />
      <div className="main">
        <Home />
        <BestsellersV2 onAddClick={addToCrate} crate={crate} />
        <AboutOurChairs />
        <CurrentStock onAddClick={addToCrate} crate={crate} />
        <Testimonial />
        <Footer />
      </div>

      {isCrateOpen && <CrateModal crate={crate} onClose={clearCrate} />}
    </div>
  );
}
