import { useState, useRef, useEffect } from "react";
import { bestsellers } from "./bestsellers-data.js";

// The Actual Component
export default function BestsellersV2() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    function handleScroll() {
      const scrollLeft = slider.scrollLeft;

      const card = slider.querySelector(".chair-card");
      const cardWidth = card?.offsetWidth || slider.offsetWidth;

      const index = Math.round(slider.scrollLeft / cardWidth);
      setCurrentSlide(index);
    }

    slider.addEventListener("scroll", handleScroll, { passive: true });
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  function goToSlide(index) {
    setCurrentSlide(index);

    const slider = sliderRef.current;
    if (slider) {
      const card = slider.querySelector(".chair-card");
      const cardWidth = card?.offsetWidth || slider.offsetWidth;

      slider.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  }

  function handleCardImgClick(imageSrc) {
    setSelectedImage(imageSrc);
  }

  return (
    <div className="wrapper dkbg">
      <div className="bestsellers-inner">
        <h2 className="bestsellers-headline">
          Bestsellers <i className="ph ph-smiley-wink"></i>
        </h2>

        <section className="section-bestsellers" id="bestsellers">
          <div
            className="slider-track"
            ref={sliderRef}
            style={{
              width: `${bestsellers.length * 100}%`,
              transform: `translateX(-${
                currentSlide * (100 / bestsellers.length)
              }%)`,
            }}
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
                    <button className="btn--small button-74">Ok</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-dots">
            {bestsellers.map((__, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </section>

        {selectedImage && (
          <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
            <img
              src={selectedImage}
              alt="chair enlarged"
              className="modal-image"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  );
}
