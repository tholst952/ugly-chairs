const uglyChairFacts = [
  {
    subheadline: "Ethical and sustainable",
    text: "We only use the lowest quality materials. Found in the most exotic locations, and prepared with an exorbitant amount of chemical agents, you can be certain all of our chairs are garden-fresh.",
  },
  {
    subheadline: "Science meets design",
    text: "Scientific studies have sit-tested each chair with thousands of participants to ensure spinal and skeletal alignment. If you have a spine, understand that you fulfill that requirement.",
  },
  {
    subheadline: "Guaranteed warranty contract deal",
    text: "Our chairs come with an official legal document guaranteeing that it is true and has the right to remain silent. Your rights are valid upon notary, and will be available for download within 36 hours of completed purchase. No other chair manufacturer can beat our contract, and that's an assurance we can promise!",
  },
];

export default function AboutOurChairs() {
  return (
    <div className="wrapper">
      <h2 className="our-chairs-headline">Our Chairs</h2>
      <section className="section-our-chairs" id="our-chairs">
        {uglyChairFacts.map((fact) => (
          <div className="our-chairs-fact">
            <h3 className="our-chairs-subheadline">
              <i className="ph ph-arrow-bend-down-right"></i> {fact.subheadline}
            </h3>

            <p className="our-chairs-text">{fact.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
