import { useState, useRef, useEffect } from "react";
import { bestsellers } from "./bestsellers-data.js";

// The Actual Component
export default function BestsellersV2() {
  const [selectedImage, setSelectedImage] = useState(null);
  const trackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  function handleCardImgClick(imageSrc) {
    setSelectedImage(imageSrc);
  }

  function scrollLeft() {
    console.log("scrolling left, newb!!");
    if (trackRef.current) {
      trackRef.current.scrollBy({
        left: -trackRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }

  function scrollRight() {
    if (trackRef.current) {
      trackRef.current.scrollBy({
        left: trackRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="wrapper dkbg">
      <h2 className="bestsellers-headline">
        Bestsellers <i className="ph ph-smiley-wink"></i>
      </h2>

      {isMobile && (
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={scrollLeft}>
            L
          </button>
          <button className="carousel-btn" onClick={scrollRight}>
            R
          </button>
        </div>
      )}

      <section
        className="section-bestsellers bestseller-track"
        id="bestsellers"
        ref={trackRef}
      >
        {bestsellers.map((chair) => (
          <div className="chair-card" key={chair.id}>
            <img
              src={chair.image}
              alt={chair.alt}
              onClick={() => handleCardImgClick(chair.image)}
            />
            <div className="card-contents">
              <h4 className="card-title">{chair.title}</h4>
              <ul className="card-list">
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
                <button className="btn--small">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="chair enlarged"
            className="modal-image"
            onClick={(e) => e.stopPropagation}
          />
        </div>
      )}
    </div>
  );
}
