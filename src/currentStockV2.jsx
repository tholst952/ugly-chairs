import { useRef } from "react";
import { currentStock } from "./stock-data.js";

export default function CurrentStock() {
  const scrollRef = useRef();

  function handleScroll(direction) {
    const container = scrollRef.current;
    const card = container.querySelector(".stock-card");
    const cardWidth = card.offsetWidth;
    const gap = 40;
    const scrollAmount = (cardWidth + gap) * 3;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <div className="wrapper dkbg">
      <h2 className="stock-headline">Current Stock</h2>
      <section className="section-current-stock" id="current-stock">
        <div className="carousel-window" ref={scrollRef}>
          {currentStock.map((chair) => (
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
                  <button className="btn--small">Ok</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="stock-scroll-btns">
        <div className="stock-btn">
          <button
            className="stock-btn-left"
            onClick={() => handleScroll("left")}
          >
            <i className="ph ph-caret-double-left"></i>
          </button>
        </div>

        <div className="stock-btn">
          <button
            className="stock-btn-right"
            onClick={() => handleScroll("right")}
          >
            <i className="ph ph-caret-double-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
