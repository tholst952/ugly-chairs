import { useRef, useEffect } from "react";
import { currentStock } from "./stock-data.js";

export default function CurrentStock() {
  const scrollRef = useRef(null);

  function getCardsPerPage() {
    const width = window.innerWidth;
    if (width >= 1200) return 3;
    if (width >= 870) return 2;
    return 1;
  }

  function handleScroll(direction) {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector(".stock-card");
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 40;
    const cardsPerPage = getCardsPerPage();

    const scrollAmount = (cardWidth + gap) * cardsPerPage;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }

  function snapScroll() {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector(".stock-card");
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 40;
    const cardsPerPage = getCardsPerPage();

    const currentScroll = container.scrollLeft;
    const scrollPerPage = (cardWidth + gap) * cardsPerPage;

    const pageIndex = Math.round(currentScroll / scrollPerPage);

    container.scrollTo({
      left: pageIndex * scrollPerPage,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let isScrolling;

    function handleScroll() {
      clearTimeout(isScrolling);

      isScrolling = setTimeout(() => {
        snapScroll();
      }, 100);
    }

    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(isScrolling);
    };
  }, []);

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
                  <button className="btn--small button-74">Ok</button>
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

        <div className=" stock-btn">
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
