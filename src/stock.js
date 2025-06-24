export default function CurrentStock() {
  return (
    <div className="wrapper dkbg">
      <h2>Current Stock</h2>
      <section className="section-current-stock" id="current-stock">
        <div className="stock-card">
          <img
            src="/img/stock-00.jpg"
            alt="a pale green armchair, upholstery ripped and frayed"
          />

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
                <span>Recycled Microfiber</span>
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
          <img
            src="/img/stock-01.jpg"
            alt="a silver armchair, upholstery ripped and frayed"
          />

          <div className="stock-card-contents">
            <h4 className="stock-card-title">The Elephant Squatter</h4>
            <ul className="stock-card-list">
              <li>
                <span>Quiet reflection</span>
              </li>
              <li>
                <span>Comfortable for 6 months</span>
              </li>
              <li>
                <span>Recycled Microfiber</span>
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
          <img
            src="/img/stock-02.jpg"
            alt="a wood back chair frame with no cushion or arms"
          />

          <div className="stock-card-contents">
            <h4 className="stock-card-title">The Baby Trainer</h4>
            <ul className="stock-card-list">
              <li>
                <span>Quiet reflection</span>
              </li>
              <li>
                <span>Comfortable for 6 months</span>
              </li>
              <li>
                <span>Recycled Microfiber</span>
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
          <img
            src="/img/stock-03.jpg"
            alt="a wood back chair frame with no cushion or arms"
          />

          <div className="stock-card-contents">
            <h4 className="stock-card-title">The Uncle Joey</h4>
            <ul className="stock-card-list">
              <li>
                <span>Quiet reflection</span>
              </li>
              <li>
                <span>Comfortable for 6 months</span>
              </li>
              <li>
                <span>Recycled Microfiber</span>
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
      </section>
    </div>
  );
}
