export default function Testimonial() {
  return (
    <div className="wrapper">
      <h2 className="our-customers-headline">Our Customers</h2>
      <section className="section-testimonial" id="our-customers">
        <div className="customers customer-group1">
          <figure className="testimonial">
            <img
              src="./img/face-01.png"
              alt="face of a person"
              className="customer-img"
            />
            <figcaption className="customer-quote">
              "This chair was the best mistake I ever bought, and I buy a lot of
              mistakes..."
            </figcaption>
          </figure>

          <figure className="testimonial">
            <img
              src="./img/face-02.png"
              alt="face of a person"
              className="customer-img"
            />
            <figcaption className="customer-quote">
              "My friends laughed when they first saw my chair. Then I let them
              sit in it for a coupla seconds and they don't laugh anymore."
            </figcaption>
          </figure>

          <figure className="testimonial">
            <img
              src="./img/face-03.png"
              alt="face of a person"
              className="customer-img"
            />
            <figcaption className="customer-quote">
              "My ugly chair doesn't match anything else and that's the way I
              like it. I like things that stand out!"
            </figcaption>
          </figure>
        </div>

        <div className="customers customer-group2">
          <figure className="testimonial">
            <img
              src="./img/face-04.png"
              alt="face of a person"
              className="customer-img"
            />
            <figcaption className="customer-quote">
              "My kids said I wasted money on this chair. I like to think those
              kids don't know much and I'll do whatever the hell I want!"
            </figcaption>
          </figure>

          <figure className="testimonial">
            <img
              src="./img/face-05.png"
              alt="face of a person"
              className="customer-img"
            />
            <figcaption className="customer-quote">
              I love my ugly chair. It's self-cleaning. The new stains just
              blend into the old ones like camoflauge.
            </figcaption>
          </figure>

          <figure className="testimonial">
            <img
              src="./img/face-06.png"
              alt="face of a person"
              className="customer-img"
            />
            <figcaption className="customer-quote">
              My chair KNOWS that it's weird and it doesn't try to hide it. I'll
              never part with it.
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}
