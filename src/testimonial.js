export default function Testimonial() {
  return (
    <div className="wrapper">
      <h2 className="our-customers-headline">Our Customers</h2>
      <section className="section-testimonial" id="our-customers">
        <div className="customers customer-group1">
          <figure className="testimonial">
            <img
              src="./img/customer-05.jpg"
              alt="face of a person"
              className="customer-img"
            />
            <figcaption className="customer-quote">
              "This chair is the best mistake I ever bought, and I buy a lot of
              mistakes..."
            </figcaption>
          </figure>

          <figure className="testimonial">
            <img
              src="./img/customer-04.jpg"
              alt="face of a person"
              className="customer-img"
            />
            <figcaption className="customer-quote">
              "My friends laughed when they saw my chair. Then I let them sit in
              it for a bit and they don't laugh anymore."
            </figcaption>
          </figure>

          <figure className="testimonial">
            <img
              src="./img/customer-03.jpg"
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
              src="./img/customer-06.jpg"
              alt="face of a person"
              className="customer-img"
            />
            <figcaption className="customer-quote">
              "I think all the chairs they have are beautiful. I love my chair,
              it's not ugly at all!"
            </figcaption>
          </figure>

          <figure className="testimonial">
            <img
              src="./img/customer-01.jpg"
              alt="face of a person"
              className="customer-img"
            />
            <figcaption className="customer-quote">
              "I love my ugly chair. It's self-cleaning. The new stains just
              blend into the old ones like camoflauge."
            </figcaption>
          </figure>

          <figure className="testimonial">
            <img
              src="./img/customer-02.jpg"
              alt="face of a person"
              className="customer-img"
            />
            <figcaption className="customer-quote">
              "My kids said I wasted money on this chair. I like to think those
              kids don't know much and I'll do whatever the hell I want!"
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}
