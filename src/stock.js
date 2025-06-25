import { useRef } from "react";

export default function CurrentStock() {
  const scrollRef = useRef();

  function handleScroll(direction) {
    const container = scrollRef.current;
    const card = container.querySelector(".stock-card");
    const cardWidth = card.offsetWidth + 40;

    container.scrollBy({
      left: direction === "left" ? -cardWidth * 3 : cardWidth * 3,
      behavior: "smooth",
    });
  }

  return (
    <div className="wrapper dkbg">
      <h2 className="stock-headline">Current Stock</h2>
      <section className="section-current-stock" id="current-stock">
        <div className="stock-btn stock-btn-left">
          <button onClick={() => handleScroll("left")}>
            {/* <i class="ph ph-caret-left"></i> */}
            <i class="ph ph-caret-double-left"></i>
          </button>
        </div>

        <div className="carousel-window" ref={scrollRef}>
          <div className="stock-card">
            <div className="stock-img">
              <img
                src="/img/stock-00.jpg"
                alt="a pale green armchair, upholstery ripped and frayed"
              />
            </div>

            <div className="stock-card-contents">
              <h4 className="stock-card-title">The Fringe Duchess</h4>
              <ul className="stock-card-list">
                <li>
                  <span>Quiet Reflection & Sobbing</span>
                </li>
                <li>
                  <span>Comfortable for a Lifetime</span>
                </li>
                <li>
                  <span>All Natural Polyester</span>
                </li>
                <li>
                  <span>Weighs 41 lbs.</span>
                </li>
              </ul>

              <div className="chair-price">
                <span>
                  <strong>$404</strong>
                </span>
                <btn className="btn--small">Add to cart</btn>
              </div>
            </div>
          </div>

          <div className="stock-card">
            <div className="stock-img">
              <img
                src="/img/stock-01.jpg"
                alt="a silver armchair, upholstery ripped and frayed"
              />
            </div>

            <div className="stock-card-contents">
              <h4 className="stock-card-title">The Elephant Squatter</h4>
              <ul className="stock-card-list">
                <li>
                  <span>Breakfast & Doom Scrolling</span>
                </li>
                <li>
                  <span>Comfortable for 6 Months</span>
                </li>
                <li>
                  <span>Reassembled Macrofibers</span>
                </li>
                <li>
                  <span>Weighs 60 lbs.</span>
                </li>
              </ul>

              <div className="chair-price">
                <span>
                  <strong>$219</strong>
                </span>
                <btn className="btn--small">Add to cart</btn>
              </div>
            </div>
          </div>

          <div className="stock-card">
            <div className="stock-img">
              <img
                src="/img/stock-02.jpg"
                alt="a wood back chair frame with no cushion or arms"
              />
            </div>

            <div className="stock-card-contents">
              <h4 className="stock-card-title">The Baby Trainer</h4>
              <ul className="stock-card-list">
                <li>
                  <span>Milk and iPad</span>
                </li>
                <li>
                  <span>Comfortable for 5 Minutes</span>
                </li>
                <li>
                  <span>Nailed Together Wood</span>
                </li>
                <li>
                  <span>Weighs 6 lbs.</span>
                </li>
              </ul>

              <div className="chair-price">
                <span>
                  <strong>$99</strong>
                </span>
                <btn className="btn--small">Add to cart</btn>
              </div>
            </div>
          </div>

          <div className="stock-card">
            <div className="stock-img">
              <img
                src="/img/stock-03.jpg"
                alt="a pale green armchair, upholstery ripped and frayed"
              />
            </div>

            <div className="stock-card-contents">
              <h4 className="stock-card-title">The Road King</h4>
              <ul className="stock-card-list">
                <li>
                  <span>Tattoos & Hair Perms</span>
                </li>
                <li>
                  <span>Comfortable for Multiple Days</span>
                </li>
                <li>
                  <span>100% Egyptian Cotton</span>
                </li>
                <li>
                  <span>Weighs 32 lbs.</span>
                </li>
              </ul>

              <div className="chair-price">
                <span>
                  <strong>$150</strong>
                </span>
                <btn className="btn--small">Add to cart</btn>
              </div>
            </div>
          </div>

          <div className="stock-card">
            <div className="stock-img">
              <img
                src="/img/stock-04.jpg"
                alt="a pale green armchair, upholstery ripped and frayed"
              />
            </div>

            <div className="stock-card-contents">
              <h4 className="stock-card-title">The Secret BLANK </h4>
              <ul className="stock-card-list">
                <li>
                  <span>Journaling & Corn Chips</span>
                </li>
                <li>
                  <span>Comfortable for 3 Hours</span>
                </li>
                <li>
                  <span>Premium Goose Down Stuffing</span>
                </li>
                <li>
                  <span>Weighs 53 lbs.</span>
                </li>
              </ul>

              <div className="chair-price">
                <span>
                  <strong>$300</strong>
                </span>
                <btn className="btn--small">Add to cart</btn>
              </div>
            </div>
          </div>

          <div className="stock-card">
            <div className="stock-img">
              <img
                src="/img/stock-05.jpg"
                alt="a pale green armchair, upholstery ripped and frayed"
              />
            </div>

            <div className="stock-card-contents">
              <h4 className="stock-card-title">The Crooked Banker</h4>
              <ul className="stock-card-list">
                <li>
                  <span>Computer & Office Work</span>
                </li>
                <li>
                  <span>Comfortable for 20 Minutes</span>
                </li>
                <li>
                  <span>Wet Notebooks and Metal Bars</span>
                </li>
                <li>
                  <span>Weighs 14 lbs.</span>
                </li>
              </ul>

              <div className="chair-price">
                <span>
                  <strong>$20</strong>
                </span>
                <btn className="btn--small">Add to cart</btn>
              </div>
            </div>
          </div>

          <div className="stock-card">
            <div className="stock-img">
              <img
                src="/img/stock-06.jpg"
                alt="a pale green armchair, upholstery ripped and frayed"
              />
            </div>

            <div className="stock-card-contents">
              <h4 className="stock-card-title">The Dank Depresser</h4>
              <ul className="stock-card-list">
                <li>
                  <span>Vomiting & Game Shows</span>
                </li>
                <li>
                  <span>Comfortable for 30 Minutes</span>
                </li>
                <li>
                  <span>Quad-Slat Premium Cardboard</span>
                </li>
                <li>
                  <span>Weighs 20 lbs.</span>
                </li>
              </ul>

              <div className="chair-price">
                <span>
                  <strong>$80</strong>
                </span>
                <btn className="btn--small">Add to cart</btn>
              </div>
            </div>
          </div>

          <div className="stock-card">
            <div className="stock-img">
              <img
                src="/img/stock-07.jpg"
                alt="a pale green armchair, upholstery ripped and frayed"
              />
            </div>

            <div className="stock-card-contents">
              <h4 className="stock-card-title">The Postman's Polly</h4>
              <ul className="stock-card-list">
                <li>
                  <span>something here</span>
                </li>
                <li>
                  <span>Comfortable for 24 Hours</span>
                </li>
                <li>
                  <span>Natural polyester</span>
                </li>
                <li>
                  <span>Weighs 41 lbs.</span>
                </li>
              </ul>

              <div className="chair-price">
                <span>
                  <strong>$640</strong>
                </span>
                <btn className="btn--small">Add to cart</btn>
              </div>
            </div>
          </div>

          <div className="stock-card">
            <div className="stock-img">
              <img
                src="/img/stock-08.jpg"
                alt="a pale green armchair, upholstery ripped and frayed"
              />
            </div>

            <div className="stock-card-contents">
              <h4 className="stock-card-title">The Fringe Duchess</h4>
              <ul className="stock-card-list">
                <li>
                  <span>Quiet reflection</span>
                </li>
                <li>
                  <span>Comfortable for 6 months</span>
                </li>
                <li>
                  <span>Natural polyester</span>
                </li>
                <li>
                  <span>Weighs 41 lbs.</span>
                </li>
              </ul>

              <div className="chair-price">
                <span>
                  <strong>$640</strong>
                </span>
                <btn className="btn--small">Add to cart</btn>
              </div>
            </div>
          </div>

          <div className="stock-card">
            <div className="stock-img">
              <img
                src="/img/stock-09.jpg"
                alt="a pale green armchair, upholstery ripped and frayed"
              />
            </div>

            <div className="stock-card-contents">
              <h4 className="stock-card-title">The Fringe Duchess</h4>
              <ul className="stock-card-list">
                <li>
                  <span>Quiet reflection</span>
                </li>
                <li>
                  <span>Comfortable for 6 months</span>
                </li>
                <li>
                  <span>Natural polyester</span>
                </li>
                <li>
                  <span>Weighs 41 lbs.</span>
                </li>
              </ul>

              <div className="chair-price">
                <span>
                  <strong>$640</strong>
                </span>
                <btn className="btn--small">Add to cart</btn>
              </div>
            </div>
          </div>

          <div className="stock-card">
            <div className="stock-img">
              <img
                src="/img/stock-10.jpg"
                alt="a pale green armchair, upholstery ripped and frayed"
              />
            </div>

            <div className="stock-card-contents">
              <h4 className="stock-card-title">The Fringe Duchess</h4>
              <ul className="stock-card-list">
                <li>
                  <span>Quiet reflection</span>
                </li>
                <li>
                  <span>Comfortable for 6 months</span>
                </li>
                <li>
                  <span>Natural polyester</span>
                </li>
                <li>
                  <span>Weighs 41 lbs.</span>
                </li>
              </ul>

              <div className="chair-price">
                <span>
                  <strong>$640</strong>
                </span>
                <btn className="btn--small">Add to cart</btn>
              </div>
            </div>
          </div>

          <div className="stock-card">
            <div className="stock-img">
              <img
                src="/img/stock-11.jpg"
                alt="a pale green armchair, upholstery ripped and frayed"
              />
            </div>

            <div className="stock-card-contents">
              <h4 className="stock-card-title">The Fringe Duchess</h4>
              <ul className="stock-card-list">
                <li>
                  <span>Quiet reflection</span>
                </li>
                <li>
                  <span>Comfortable for 6 months</span>
                </li>
                <li>
                  <span>Natural polyester</span>
                </li>
                <li>
                  <span>Weighs 41 lbs.</span>
                </li>
              </ul>

              <div className="chair-price">
                <span>
                  <strong>$640</strong>
                </span>
                <btn className="btn--small">Add to cart</btn>
              </div>
            </div>
          </div>

          <div className="stock-card">
            <div className="stock-img">
              <img
                src="/img/stock-12.jpg"
                alt="a pale green armchair, upholstery ripped and frayed"
              />
            </div>

            <div className="stock-card-contents">
              <h4 className="stock-card-title">The Fringe Duchess</h4>
              <ul className="stock-card-list">
                <li>
                  <span>Quiet reflection</span>
                </li>
                <li>
                  <span>Comfortable for 6 months</span>
                </li>
                <li>
                  <span>Natural polyester</span>
                </li>
                <li>
                  <span>Weighs 41 lbs.</span>
                </li>
              </ul>

              <div className="chair-price">
                <span>
                  <strong>$640</strong>
                </span>
                <btn className="btn--small">Add to cart</btn>
              </div>
            </div>
          </div>

          <div className="stock-card">
            <div className="stock-img">
              <img
                src="/img/stock-13.jpg"
                alt="a pale green armchair, upholstery ripped and frayed"
              />
            </div>

            <div className="stock-card-contents">
              <h4 className="stock-card-title">The Fringe Duchess</h4>
              <ul className="stock-card-list">
                <li>
                  <span>Quiet reflection</span>
                </li>
                <li>
                  <span>Comfortable for 6 months</span>
                </li>
                <li>
                  <span>Natural polyester</span>
                </li>
                <li>
                  <span>Weighs 41 lbs.</span>
                </li>
              </ul>

              <div className="chair-price">
                <span>
                  <strong>$640</strong>
                </span>
                <btn className="btn--small">Add to cart</btn>
              </div>
            </div>
          </div>
        </div>

        <div className="stock-btn stock-btn-right">
          <button onClick={() => handleScroll("right")}>
            <i class="ph ph-caret-double-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
}
