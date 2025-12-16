import { useState } from "react";
import NavBar from "./navBar.js";
import Home from "./home.jsx";
import OkModal from "./OkModal.jsx";
import { getRandomOkMessage } from "./ok-messages.js";
import BestsellersV2 from "./bestsellersV2.jsx";
import AboutOurChairs from "./about.jsx";
// import CurrentStock from "./currentStockV2.jsx";
// import CurrentStock from "./currentStockV3.jsx";
import CurrentStock from "./currentStockV4.jsx";
import Testimonial from "./testimonial.js";
import Footer from "./footer.js";

export default function App() {
  const [okList, setOkList] = useState([]);
  const [isOkModalOpen, setIsOkModalOpen] = useState(false);

  function handleOkClick(chair) {
    setOkList((prev) => [
      ...prev,
      {
        ...chair,
        message: getRandomOkMessage(),
      },
    ]);
  }

  function clearOkList() {
    setOkList([]);
    setIsOkModalOpen(false);
  }

  return (
    <div className="page-container">
      <NavBar
        onOkNavClick={() => setIsOkModalOpen(true)}
        okCount={okList.length}
        onOkModalClose={clearOkList}
      />
      <div className="main">
        <Home />
        <BestsellersV2 onOkClick={handleOkClick} />
        <AboutOurChairs />
        <CurrentStock onOkClick={handleOkClick} />
        <Testimonial />
        <Footer />
      </div>

      {isOkModalOpen && <OkModal okList={okList} onClose={clearOkList} />}
    </div>
  );
}
