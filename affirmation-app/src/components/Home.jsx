import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./css/styles.css";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center mt-4 mb-4 p-3" id="home-title">
      <div className="row d-flex align-items-center" data-aos="fade-zoom-in">
        <main>
          <h1>Positive Quotes</h1>
        </main>
      </div>
    </div>
  );
}

export default Home;
