export default function CurrentStock() {
  return (
    <div className="wrapper dkbg">
      <h2 className="stock-headline">Current Stock</h2>
      <section className="section-current-stock" id="current-stock">
        <div>
          <button className="stock-btn-left">
            <i class="ph ph-caret-left"></i>
          </button>
        </div>

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
              src="/img/stock-01.jpg"
              alt="a silver armchair, upholstery ripped and frayed"
            />
          </div>

          <div className="stock-card-contents">
            <h4 className="stock-card-title">The Elephant Squatter</h4>
            <ul className="stock-card-list">
              <li>
                <span>Breakfast & Doom scrolling</span>
              </li>
              <li>
                <span>Comfortable for 6 months</span>
              </li>
              <li>
                <span>Recycled Microfiber</span>
              </li>
              <li>
                <span>Weighs 60 lbs.</span>
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
                <span>Comfortable for 10 minutes</span>
              </li>
              <li>
                <span>Nailed together wood</span>
              </li>
              <li>
                <span>Weighs 6 lbs.</span>
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

        <div>
          <button className="stock-btn-right">
            <i class="ph ph-caret-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
}
