import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div
        className="row d-flex align-items-center"
        data-aos="fade-zoom-in"
      >
        <main id="hero-text">
          <h1 id="home-title">Positive Quotes</h1>
        </main>
      </div>
    </div>
  );
}

export default Home;
