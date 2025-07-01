export default function Testimonial() {
  return (
    <div className="wrapper">
      <h2 className="our-customers-headline">Our Customers</h2>
      <section className="section-testimonial" id="our-customers">
        <div className="customers customer-group1">
          <figure className="testimonial">
            <img
              src="./img/customer-01.jpg"
              alt="a smiling young lady with long brown hair"
              className="customer-img customer-img-1"
            />
            <figcaption className="customer-quote customer-quote-1">
              "This chair is the best mistake I ever bought, and I buy a lot of
              mistakes..."
            </figcaption>
          </figure>

          <figure className="testimonial testimonial-2">
            <img
              src="./img/customer-02.jpg"
              alt="a smiling man with glasses"
              className="customer-img customer-img-2"
            />
            <figcaption className="customer-quote customer-quote-2">
              "My friends laughed when they saw my chair. Then I let them sit in
              it for a bit and they don't laugh anymore."
            </figcaption>
          </figure>

          <figure className="testimonial testimonial-3">
            <img
              src="./img/customer-03.jpg"
              alt="a smiling man touching his chin"
              className="customer-img customer-img-3"
            />
            <figcaption className="customer-quote customer-quote-3">
              "My ugly chair doesn't match anything else and that's the way I
              like it. I like things that stand out!"
            </figcaption>
          </figure>
        </div>

        <div className="customers customer-group2">
          <figure className="testimonial testimonial-4">
            <img
              src="./img/customer-04.jpg"
              alt="a smiling older lady mid sentence"
              className="customer-img customer-img-4"
            />
            <figcaption className="customer-quote customer-quote-4">
              "I think all the chairs they sell are beautiful. I love my chair,
              it's not ugly at all!"
            </figcaption>
          </figure>

          <figure className="testimonial testimonial-5">
            <img
              src="./img/customer-05.jpg"
              alt="a smiling blonde woman wearing glasses"
              className="customer-img customer-img-5"
            />
            <figcaption className="customer-quote customer-quote-5">
              "I love my ugly chair. It's self-cleaning. The new stains just
              blend into the old ones like camoflauge."
            </figcaption>
          </figure>

          <figure className="testimonial testimonial-6">
            <img
              src="./img/customer-06.jpg"
              alt="an older man grinning and winking"
              className="customer-img customer-img-6"
            />
            <figcaption className="customer-quote customer-quote-6">
              "My kids said I wasted money on this chair. I like to think those
              kids don't know much and I'll do whatever the hell I want!"
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}
