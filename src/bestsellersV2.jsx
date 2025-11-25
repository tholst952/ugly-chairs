import { useState, useRef, useEffect } from "react";
import { bestsellers } from "./bestsellers-data.js";

// The Actual Component
export default function BestsellersV2() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileCarousel, setIsMobileCarousel] = useState(
    window.innerWidth <= 870
  );

  //A Width Listener
  useEffect(() => {
    function handleResize() {
      setIsMobileCarousel(window.innerWidth <= 870);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = bestsellers.length;

  function handleLeft() {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }

  function handleRight() {
    setCurrentIndex((prev) => (prev + 1) % total);
  }

  // Function to make imgs larger on click
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
          <div className="baby-carousel">
            {isMobileCarousel ? (
              <SingleCard
                chair={bestsellers[currentIndex]}
                onClick={handleCardImgClick}
              />
            ) : (
              bestsellers.map((chair) => (
                <SingleCard
                  key={chair.id}
                  chair={chair}
                  onClick={handleCardImgClick}
                />
              ))
            )}
          </div>

          {isMobileCarousel && (
            <div className="best-scroll-btns">
              <div className="best-btn">
                <button className="best-btn-left" onClick={handleLeft}>
                  <i className="ph ph-caret-double-left"></i>
                </button>
              </div>

              <div className=" best-btn">
                <button className="best-btn-right" onClick={handleRight}>
                  <i className="ph ph-caret-double-right"></i>
                </button>
              </div>
            </div>
          )}
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

function SingleCard({ chair, onClick }) {
  return (
    <div className="chair-card">
      <div className="chair-img">
        <img
          src={chair.image}
          alt={chair.alt}
          onClick={() => onClick(chair.image)}
        />
      </div>
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
  );
}

// copy pasta
// {bestsellers.map((chair) => (
//               <div className="chair-card" key={chair.id}>
//                 <div className="chair-img">
//                   <img
//                     src={chair.image}
//                     alt={chair.alt}
//                     onClick={() => handleCardImgClick(chair.image)}
//                   />
//                 </div>
//                 <div className="card-contents">
//                   <h4 className="card-title">{chair.title}</h4>
//                   <ul className="card-list">
//                     {chair.features.map((feat, i) => (
//                       <li key={i}>
//                         {feat.icon}
//                         <span>{feat.label}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="chair-price">
//                     <span>
//                       <strong>{chair.price}</strong>
//                     </span>
//                     <button className="btn--small button-74">Ok</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
