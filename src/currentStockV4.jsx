import { useRef, useEffect, useState } from "react";
import { currentStock } from "./stock-data.js";

export default function CurrentStock({ onOkClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileCarousel, setIsMobileCarousel] = useState(
    window.innerWidth <= 870
  );

  useEffect(() => {
    function handleResize() {
      setIsMobileCarousel(window.innerWidth <= 870);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalChairs = currentStock.length;
  const cardsPerView = isMobileCarousel ? 1 : 3;
  const totalSegments = Math.ceil(totalChairs / cardsPerView);
  const currentSegment = Math.floor(currentIndex / cardsPerView);

  function handleLeft() {
    setCurrentIndex((prev) => {
      return (prev - cardsPerView + totalChairs) % totalChairs;
    });
  }

  function handleRight() {
    setCurrentIndex((prev) => {
      return (prev + cardsPerView) % totalChairs;
    });
  }

  // Build the array of chairs to display
  const visibleChairs = [];
  for (let i = 0; i < cardsPerView; i++) {
    visibleChairs.push(currentStock[(currentIndex + i) % totalChairs]);
  }

  return (
    <div className="wrapper dkbg">
      <h2 className="stock-headline">Current Stock</h2>

      <section className="section-current-stock" id="current-stock">
        <div className="carousel-window">
          {visibleChairs.map((chair) => (
            <div className="stock-card" key={chair.id}>
              <div className="stock-img">
                <img src={chair.image} alt={chair.alt} />
              </div>

              <div className="stock-card-contents">
                <h4 className="stock-card-title">{chair.title}</h4>

                <ul className="stock-card-list">
                  {chair.features.map((feat, i) => (
                    <li key={i}>
                      {feat.icon}
                      <span>{feat.label}</span>
                    </li>
                  ))}
                </ul>

                <div className="chair-price">
                  <span>
                    <strong>{chair.price}</strong>
                  </span>
                  <button
                    className="btn--small button-74"
                    onClick={() => onOkClick(chair)}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="stock-scroll-btns">
        <div className="stock-btn">
          <button className="stock-btn-left" onClick={handleLeft}>
            <i className="ph ph-caret-double-left"></i>
          </button>
        </div>

        <div className="stock-progress-bar">
          <div
            className="stock-progress-fill"
            style={{
              width: `${((currentSegment + 1) / totalSegments) * 100}%`,
            }}
          ></div>
        </div>

        <div className="stock-btn">
          <button className="stock-btn-right" onClick={handleRight}>
            <i className="ph ph-caret-double-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
