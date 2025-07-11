export default function Home() {
  return (
    <div className="wrapper">
      <section className="section-home home" id="home">
        <div className="home-text">
          <h2 className="home-headline">
            We hand-craft ugly chairs for any space.
          </h2>
          <p className="home-introduction">
            Distorted beauty is just that. Welcome to the new luxe aesthetic-
            ugly chairs. Each unique piece comes with a story that you can tell
            and sometimes smell. Elevate your room.
          </p>
          <p className="posh-tag">
            <em>Posh is as posh does!</em>
          </p>
        </div>

        <div className="home-img">
          <img src="/img/chair-main.jpg" alt="a brown chair, heavily damaged" />
        </div>
      </section>
    </div>
  );
}
